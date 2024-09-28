/**
 * Schema and data for the site.
 */

import { getFull, type Image } from './images';

// main SEO image
export const mainImageAltText =
	'Cindy Tarpey in the early 90s, crouched down on the front lawn of her house in Central Florida, holding her toddler aged son Mike Tarpey (owner of this website). The shadows indicate high noon, and their blocky brown Chrysler minivan is in the background.';

interface YearSummary {
	year: string;
	summary: string;
}

interface EventsDB {
	[key: string]: Record<string, YearEvent>;
}

interface YearEvent {
	slug?: string;
	name: string;
	images: EventImage[];
}

interface EventImage {
	slug: string;
	altText: string;
}

export interface EnhancedImageData {
	year: string;
	eventSlug: string;
	eventName: string;
	imageSlug: string;
	href: string;
	enhancedSrc: Image;
	altText: string;
}

export const years: YearSummary[] = [
	{
		year: '2024',
		summary: "PAX East, Dreamhack Dallas, Denver"
	},
	{
		year: '2023',
		summary:
			'PAX East, other stuff, just listing words here to test how the page looks really, sup people'
	},
	// {
	// 	year: '2022',
	// 	summary: '',
	// },
	{
		year: '2021',
		summary: 'Massachusetts, dodging COVID',
	},
	// {
	// 	year: '2020',
	// 	summary: '',
	// },
	// {
	// 	year: '2019',
	// 	summary: '',
	// },
	// {
	// 	year: '2018',
	// 	summary: '',
	// },
	// {
	// 	year: '2017',
	// 	summary: '',
	// },
	// {
	// 	year: '2016',
	// 	summary: '',
	// },
	// {
	// 	year: '2015',
	// 	summary: '',
	// },
	// {
	// 	year: '2014',
	// 	summary: '',
	// },
	// {
	// 	year: '2013',
	// 	summary: '',
	// },
	{
		year: '2012',
		summary: 'Coke 600, world was supposed to end'
	}
];

export const eventsDB: EventsDB = {
	'2012': {
		'coke-600': {
			name: 'Coke 600',
			images: [
				{
					slug: 'pizza',
					altText: ''
				},
				{
					slug: 'rockstar',
					altText: ''
				},
				{
					slug: 'kasey',
					altText: ''
				},
				{
					slug: 'burnt',
					altText: ''
				},
				{
					slug: 'paraglider',
					altText: ''
				},
				{
					slug: 'high-line',
					altText: ''
				},
				{
					slug: 'winner',
					altText: ''
				}
			]
		}
	},
	'2021': {
		'mass-summer': {
			name: 'MA Summer',
			images: [
				{
					slug: 'elevator',
					altText: '',
				},
				{
					slug: 'carrot-cake',
					altText: '',
				},
				{
					slug: '93',
					altText: '',
				},
				{
					slug: 'lolita',
					altText: '',
				},
				{
					slug: 'seaport',
					altText: '',
				},
				{
					slug: 'eagle',
					altText: '',
				},
				{
					slug: 'greenway',
					altText: '',
				},
				{
					slug: 'arch',
					altText: '',
				},
				{
					slug: 'wharf',
					altText: '',
				},
				{
					slug: 'bunny',
					altText: '',
				},
				{
					slug: 'onramp',
					altText: '',
				},
				{
					slug: 'garden',
					altText: '',
				},
				{
					slug: 'owo',
					altText: '',
				},
				{
					slug: 'skyline',
					altText: '',
				},
				{
					slug: 'lakeside',
					altText: '',
				},
				{
					slug: 'reception',
					altText: '',
				},
				{
					slug: 'double',
					altText: '',
				},
				{
					slug: 'panorama',
					altText: '',
				},
				{
					slug: 'cover',
					altText: '',
				},
				{
					slug: 'mountain',
					altText: '',
				},
				{
					slug: 'chipmunk',
					altText: '',
				},
				{
					slug: 'coffee',
					altText: '',
				},
				{
					slug: 'huevos',
					altText: '',
				},
			]
		},
	},
	'2023': {
		'pax-east': {
			slug: 'pax-east',
			name: 'PAX East',
			images: [
				{
					slug: 'cape-cod',
					altText: 'cape-cod'
				},
				{
					slug: 'sparta',
					altText: 'sparta'
				}
			]
		},
		'dc-spring': {
			name: "DC Spring",
			images: [
				{ slug: 'waldorf', altText: '' },
				{ slug: 'uconn', altText: '' },
				{ slug: 'onsite', altText: '' },
				{ slug: 'queso', altText: '' },
				{ slug: 'oval', altText: '' },
			],
		}
	},
	'2024': {
		'pax-east': {
			slug: 'pax-east',
			name: 'PAX East',
			images: [
				{
					slug: 'baby-girl',
					altText: 'baby-girl'
				},
				{
					slug: 'cafeteria',
					altText: 'cafeteria'
				}
			]
		},
		'dreamhack-dallas': {
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
		},
		'denver': {
			slug: 'denver',
			name: 'Denver',
			images: [
				{
					slug: 'i64',
					altText: 'i64'
				},
				{
					slug: 'wv',
					altText: 'wv'
				},
				{
					slug: 'louisville',
					altText: 'louisville'
				},
				{
					slug: 'arch',
					altText: 'arch'
				},
				{
					slug: 'baseball',
					altText: 'baseball'
				},
				{
					slug: 'billboard',
					altText: 'billboard'
				},
				{
					slug: 'windfarm',
					altText: 'windfarm'
				},
				{
					slug: 'golden',
					altText: 'golden'
				},
				{
					slug: 'elmo',
					altText: 'elmo'
				},
				{
					slug: 'geological',
					altText: 'geological'
				},
				{
					slug: 'spirits',
					altText: 'spirits'
				},
				{
					slug: 'altar',
					altText: 'altar'
				},
				{
					slug: 'cafe',
					altText: 'cafe'
				},
				{
					slug: 'lookout',
					altText: 'lookout'
				},
				{
					slug: 'ashe',
					altText: 'ashe'
				},
				{
					slug: 'carrygun',
					altText: 'carrygun'
				},
				{
					slug: 'grave',
					altText: 'grave'
				},
				{
					slug: 'hike',
					altText: 'hike'
				},
				{
					slug: 'owl',
					altText: 'owl'
				},
				{
					slug: 'fusion',
					altText: 'fusion'
				},
				{
					slug: 'salmon',
					altText: 'salmon'
				},
				{
					slug: 'mansion',
					altText: 'mansion'
				},
				{
					slug: 'elk',
					altText: 'elk'
				},
				{
					slug: 'crabapple',
					altText: 'crabapple'
				},
				{
					slug: 'stanley',
					altText: 'stanley'
				},
				{
					slug: 'no-fishing',
					altText: 'no-fishing'
				},
				{
					slug: 'hyrule',
					altText: 'hyrule'
				},
				{
					slug: 'lovers',
					altText: 'lovers'
				},
				{
					slug: 'lake',
					altText: 'lake'
				},
				{
					slug: 'vista',
					altText: 'vista'
				},
				{
					slug: 'oatmeal',
					altText: 'oatmeal'
				},
				{
					slug: 'burrito',
					altText: 'burrito'
				},
				{
					slug: 'symphyotrichum',
					altText: 'symphyotrichum'
				},
				{
					slug: 'trail',
					altText: 'trail'
				},
				{
					slug: 'cactus',
					altText: 'cactus'
				},
				{
					slug: 'snake',
					altText: 'snake'
				},
				{
					slug: 'crossing',
					altText: 'crossing'
				},
				{
					slug: 'blondie',
					altText: 'blondie'
				},
				{
					slug: 'downtown',
					altText: 'downtown'
				},
				{
					slug: 'forest',
					altText: 'forest'
				},
				{
					slug: 'haywire',
					altText: 'haywire'
				},
				{
					slug: 'office',
					altText: 'office'
				},
				{
					slug: 'worlds',
					altText: 'worlds'
				},
				{
					slug: 'eyes',
					altText: 'eyes'
				},
				{
					slug: 'memento-mori',
					altText: 'memento-mori'
				},
				{
					slug: 'artifact',
					altText: 'artifact'
				},
				{
					slug: 'twisted',
					altText: 'twisted'
				},
				{
					slug: 'hags',
					altText: 'hags'
				},
				{
					slug: 'kingdom',
					altText: 'kingdom'
				},
				{
					slug: 'streets',
					altText: 'streets'
				},
				{
					slug: 'alley',
					altText: 'alley'
				},
				{
					slug: 'leaving',
					altText: 'leaving'
				},
				{
					slug: 'matcha',
					altText: 'matcha'
				},
				{
					slug: 'sandwich',
					altText: 'sandwich'
				},
				{
					slug: 'prairie',
					altText: 'prairie'
				},
				{
					slug: 'bouquet',
					altText: 'bouquet'
				},
				{
					slug: 'chillin',
					altText: 'chillin'
				},
				{
					slug: 'genji',
					altText: 'genji'
				},
				{
					slug: 'burgers',
					altText: 'burgers'
				},
				{
					slug: 'library',
					altText: 'library'
				},
				{
					slug: 'bonsai',
					altText: 'bonsai'
				},
				{
					slug: 'travel',
					altText: 'travel'
				},
				{
					slug: 'yall',
					altText: 'yall'
				},
				{
					slug: 'refuel',
					altText: 'refuel'
				}
			]
		},
	}
};

/**
 * Return a list of event slugs for a given year.
 */
export function getEventSlugsForYear(year: string): string[] {
	return Object.keys(eventsDB[year]);
}

/**
 * Return a list of event slug->name key values for a given year.
 */
export function getEventNamesBySlugForYear(year: string): Record<string, string> {
	let eventSlugNameMap: Record<string, string> = {};
	for (const [slug, event] of Object.entries(eventsDB[year])) {
		eventSlugNameMap[slug] = event.name;
	}
	return eventSlugNameMap;
}

/**
 * Return the last listed image for a given event,
 * otherwise known as the "key image".
 */
export function getEventKeyImage(year: string, eventSlug: string): EnhancedImageData {
	const enhancedImageData = getYearEventImages(year, eventSlug);
	return enhancedImageData[enhancedImageData.length - 1];
}

/**
 * Return the key image for every event in a year.
 */
export function getYearKeyImages(year: string): EnhancedImageData[] {
	const eventSlugs = getEventSlugsForYear(year);
	return eventSlugs.map((eventSlug: string) => getEventKeyImage(year, eventSlug));
}

/**
 * Return a single image given the entire image path.
 */
export function getEventImageByName(
	year: string,
	eventSlug: string,
	imageSlug: string
): EnhancedImageData {
	const enhancedImageData = getYearEventImages(year, eventSlug);
	// TODO error handling here
	return enhancedImageData.find((image) => image.href === `/${year}/${eventSlug}/${imageSlug}`)!;
}

/**
 * Return all of the images for a given year + event.
 */
export function getYearEventImages(year: string, eventSlug: string): EnhancedImageData[] {
	const imageData = eventsDB[year][eventSlug]['images'];
	return imageData.map((imageData: EventImage) =>
		transformToEnhancedImageData(year, eventSlug, imageData)
	);
}

/**
 * Take EventImage data and transform it to the EnhancedImageData
 * required by Svelte's enhanced:img tag.
 */
export function transformToEnhancedImageData(
	year: string,
	eventSlug: string,
	image: EventImage
): EnhancedImageData {
	const eventSlugNameMap = getEventNamesBySlugForYear(year);
	return {
		year: year,
		eventSlug: eventSlug,
		eventName: eventSlugNameMap[eventSlug],
		imageSlug: image.slug,
		href: `/${year}/${eventSlug}/${image.slug}`,
		enhancedSrc: getFull(`/src/lib/albums/${year}/${eventSlug}/${image.slug}.webp`),
		altText: image.altText
	};
}

/**
 * Get a direct link to the build URL of a certain image.
 * Useful for SEO (we need the built image file which includes
 * an optimization hash that changes every build).
 */
export function getImageBuildPath(year: string, eventSlug: string, imageSlug: string): string {
	const enhancedSrc = getFull(`/src/lib/albums/${year}/${eventSlug}/${imageSlug}.webp`);
	return enhancedSrc.img.src;
}
