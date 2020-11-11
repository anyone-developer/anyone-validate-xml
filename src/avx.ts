import rrdir from 'rrdir';
import path from 'path';
import fs from 'fs';
import parser from 'fast-xml-parser';
import beautify from 'beautify';
import {AvxFormatted, AvxItem, AvxError} from './types/avx-item';

async function validateAndFormat(path: string): Promise<AvxError | AvxFormatted> {
	return new Promise<AvxItem>((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject({
					err,
					path
				});
			} else {
				const content = data.toString();
				const v = parser.validate(content, {
					allowBooleanAttributes: true
				});
				if (typeof v === 'boolean' && v) {
					const f = beautify(content, {format: 'xml'});
					fs.writeFile(path, f, err => {
						if (err) {
							reject({
								err,
								path
							});
						} else {
							const r: AvxFormatted = {
								path,
								formatted: true
							};
							resolve(r);
						}
					});
				} else {
					reject({
						err: v.err,
						path
					});
				}
			}
		});
	});
}

export default async function avx(fileExtension: string[], ignoreFiles: string[], ignoreDirectories: string[], readPath: string): Promise<AvxItem[]> {
	return new Promise((resolve, reject) => {
		readPath = path.normalize(readPath);

		if (!fs.existsSync(readPath)) {
			reject({
				err: new Error(`the path: ${readPath} was not existed`),
				path: readPath
			});
			return;
		}

		let actualPath = rrdir.sync(readPath, {
			exclude: [...ignoreDirectories, ...ignoreFiles],
			strict: true
		});

		fileExtension = fileExtension.map(i => i.startsWith('.') ? i : `.${i}`);

		actualPath = actualPath.filter(i => !i.directory && fileExtension.includes(path.extname(i.path)));

		const ais = actualPath.map(async i => validateAndFormat(i.path));
		resolve(Promise.all(ais.map(async i => i.catch(error => error))));
	});
}
