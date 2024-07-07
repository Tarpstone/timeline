import { eventsDB } from '$lib/db';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }) {
	const eventData = [];
	for (const [slug, event] of Object.entries(eventsDB[params.year])) {
		eventData.push({
			slug: slug,
			name: event.name
		});
	}
	return { year: params.year, events: eventData };
}
