import { eventsDB } from '$lib/db.js';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }) {
    const event = eventsDB[params.year].find((event) => event.slug === params.event);
    // TODO should have a proper error here instead of a page crash
	return { images: event!["images"] };
}
