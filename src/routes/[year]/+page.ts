import { eventsDB } from '$lib/db.js';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }) {
	return { year: params.year, events: eventsDB[params.year] };
}
