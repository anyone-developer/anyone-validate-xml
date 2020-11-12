export = AvxItem;

declare type AvxItem = {
	err?: NodeJS.ErrnoException | Error;
	formatted?: boolean;
	path: Required<string>;
};
