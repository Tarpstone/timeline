import { years } from '$lib/db';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load() {
	return { years };
}
