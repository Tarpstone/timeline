/**
 * Schema and data for the site.
 */

interface YearSummary {
	year: string;
	summary: string;
}

interface EventsDB {
	[key: string]: YearEvent[];
}

interface YearEvent {
	slug: string;
	name: string;
	images: EventImages[];
}

interface EventImages {
	slug: string;
	altText: string;
}

export const years: YearSummary[] = [
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

export const eventsDB: EventsDB = {
	'2023': [
		{
			slug: 'pax-east',
			name: 'PAX East',
			images: []
		}
	],
	'2024': [
		{
			slug: 'pax-east',
			name: 'PAX East',
			images: []
		},
		{
			slug: 'dreamhack-dallas',
			name: 'Dreamhack Dallas',
			images: [
				{
					slug: 'baseball',
					altText:
						'From left to right sitting in the stands at Truist Park in Atlanta, GA: Brandon, Mike Tarpey, Bryant.'
				},
				{
					slug: 'ddr',
					altText:
						'Mike Tarpey holding a rainbow-colored Dance Dance Revolution arrow pillow made by Maiden And The Machine.'
				},
				{
					slug: 'banks',
					altText:
						'Pictured on the left is James Banks, the premier player interviewer and stage hype-man in Counter-Strike esports. Pictured on the right is Mike Tarpey, owner of this website (tarpey.dev).'
				},
				{
					slug: 'kaelaris',
					altText:
						"Mike Tarpey takes a selfie with James 'Kaelaris' Carrol, long-time StarCraft II commentator and host."
				},
				{
					slug: 'gstew',
					altText:
						'The winning moment from IEM Dallas 2024. Members of G2 Esports stand behind their trophy on-stage after defeating Vitality 2-1 in the best-of-3 series. Their faces are displayed prominently on the big screen above the stage, while smaller yellow pyrotechnics fire off on each side.'
				}
			]
		}
	]
};
