const years = [
	{
		year: '2023',
		summary:
			'PAX East, other stuff, just listing words here to test how the page looks really, sup people'
	},
	{
		year: '2024',
		summary: "PAX East, Dreamhack Dallas, here's some more words"
	}
];

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load() {
	return { years: years };
}
