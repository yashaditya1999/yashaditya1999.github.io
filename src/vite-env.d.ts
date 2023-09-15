/// <reference types="vite/client" />
declare const html = (
	strings: readonly string[] | ArrayLike<string>,
	...values
) => String.raw({ raw: strings }, ...values);
