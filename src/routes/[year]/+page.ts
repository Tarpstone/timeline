import { type YearEvent } from '$lib/types.js';

const events: { [key: string]: YearEvent[] } = {
	'2023': [
		{
			slug: 'pax-east',
			name: 'PAX East'
		}
	],
	'2024': [
		{
			slug: 'pax-east',
			name: 'PAX East'
		},
		{
			slug: 'dreamhack-dallas',
			name: 'Dreamhack Dallas'
		}
	]
};

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }) {
	return { events: events[params.year] };
}
