export = AvxItem;

declare type AvxItem = {
	err?: Error;
	formatted?: boolean;
	path: Required<string>;
};
