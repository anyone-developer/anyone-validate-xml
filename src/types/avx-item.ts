export type AvxError = {
	err?: NodeJS.ErrnoException | Error;
	path: Required<string>;
};

export type AvxFormatted = {
	path: Required<string>;
	formatted?: boolean;
};

export type AvxItem = AvxError | AvxFormatted;
