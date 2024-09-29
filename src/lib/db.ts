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
					altText: 'View from the driver\'s seat on Interstate 64 westbound near Lexington, Virginia. Trees line each side of the road, and the car in front looks like it\'s almost touching the low-hanging mountain clouds.'
				},
				{
					slug: 'wv',
					altText: 'View from the driver\'s seat on Interstate 64 westbound at the Welcome sign for West Virginia. A small camper is underneath the sign. The speed limit sign says 70 miles per hour.'
				},
				{
					slug: 'louisville',
					altText: 'View from the driver\'s seat on Interstate 64 westbound , with a blurred Louisville skyline in the background. The bottom third of the photo is the dashboard of the Mazda.'
				},
				{
					slug: 'arch',
					altText: 'View of the St. Louis Arch from the driver\'s seat on Interstate 70 westbound. A US Bank skyscraper is visible underneath the arch.'
				},
				{
					slug: 'baseball',
					altText: 'Busch Stadium, home of the St. Louis Cardinals professional baseball team, viewed from the driver\'s seat on Interstate 70 westbound.'
				},
				{
					slug: 'billboard',
					altText: 'A highway billboard that reads "IS ANYONE EVEN READING THIS?", viewed from the driver\'s seat on Interstate 70 westbound. It\'s an ad for a local Dairy Queen.'
				},
				{
					slug: 'windfarm',
					altText: 'View from the driver\'s seat on Interstate 70 westbound near Beverly, Kansas. The sun has set and wispy clouds line the horizon. The shillouette of a wind farm is visible (about a dozen turbines).'
				},
				{
					slug: 'golden',
					altText: 'View from the driver\'s seat in downtown Golden, Colorado. The 12th Street stoplight is red. An arching sign reads "Howdy Folks! WELCOME TO GOLDEN, WHERE THE WEST LIVES". Small two-story buildings in earthy tones line each side of the street, with cars parked in front and pedestrians walking by.'
				},
				{
					slug: 'elmo',
					altText: 'A toy Volkswagen bus in the Colorado Mills mall with a peace sign on the front. Elmo is driving and a polar bear is in the passenger seat.'
				},
				{
					slug: 'geological',
					altText: 'A huge, layered rock formation near Red Rocks Trail in Golden, Colorado. Cars can be seen traveling the highway in the bottom portion of the image.'
				},
				{
					slug: 'spirits',
					altText: 'Framed images of family members who are no longer with us, on a white wooden stand with metal drawer handles. The caption in front reads "we know you would be here today, if heaven wasn\'t so far away".'
				},
				{
					slug: 'altar',
					altText: 'A small garden area, illuminated by string lights running from locations outside the image up to a tree above the wedding altar. There\'s a wooden barrel underneath the altar, and the ground is a mixture of small pebble paths and a grassy area.'
				},
				{
					slug: 'cafe',
					altText: 'Mike Tarpey dressed in a University of Connecticut hat and a light gray Buc-ee\'s hoodie, drinking an iced vanilla latte and eating a turkey + egg breakfast sandwich on grilled sourdough, with a cup of vinegar-based hot sauce.'
				},
				{
					slug: 'lookout',
					altText: 'Panoramic view from the parking lot of the Buffalo Bill Museum parking lot, looking toward the Rocky Mountains underneath a partly cloudy blue sky. Trees are interspersed in the foreground, with a winding road down the mountain.'
				},
				{
					slug: 'ashe',
					altText: 'Sign from the Buffalo Bill Museum that reads "BUFFALO BILL\'S WILD WEST. CONGRESS, ROUGH RIDERS OF THE WORLD. MISS ANNIE OAKLEY, THE PEERLESS LADY WING-SHOT." Annie Oakley is holding a rifle in her right hand, propped up on the prairie, with other Wild West participants taking shots in the background behind her.'
				},
				{
					slug: 'carrygun',
					altText: 'Photograph in the Buffalo Bill Museum of a man shooting a rifle behind him by leaning back at a 90 degree angle and craning his neck, basically forming an upside-down J shape with his body.'
				},
				{
					slug: 'grave',
					altText: 'Wide-angle photograph taken from behind Buffalo Bill\'s grave site. The US flag and Colorado state flags fly on the same pole near the top of the image. A few tourists are observing various spots around the grave.'
				},
				{
					slug: 'hike',
					altText: 'Looking down at our hiking shoes on Lookout Mountain in Colorado. One pair is tan with bright red laces, and the other pair is gray with white accents.'
				},
				{
					slug: 'owl',
					altText: 'A stuffed Great Horned Owl looking directly into the camera with yellow eyes, located in the Lookout Mountain Nature Preserve.'
				},
				{
					slug: 'fusion',
					altText: 'Closeup of a square fried wonton appetizer topped with chopped corned beef, sauerkraut, thousand island dressing, and greens.'
				},
				{
					slug: 'salmon',
					altText: 'Closeup of a pan seared, bourbon teriyaki salmon cooked to medium temperature, topped with greens and sitting on a mountain of colcannon risotto.'
				},
				{
					slug: 'mansion',
					altText: 'Picture of the doll house located in the Stanley Hotel in Estes Park, Colorado. It was featured in The Shining.'
				},
				{
					slug: 'elk',
					altText: 'Statue of an elk in the garden located behind the Stanley Hotel.'
				},
				{
					slug: 'crabapple',
					altText: 'Closeup of some bright red crabapples hanging from a tree in the garden located behind the Stanley Hotel.'
				},
				{
					slug: 'stanley',
					altText: 'View from the hedge maze in front of the Stanley Hotel. A statue of F.O. Stanley is in the foreground with a quote from 1928. The Stanley Hotel is in the background.'
				},
				{
					slug: 'no-fishing',
					altText: 'A sign that reads "NO FISHING ALLOWED. THE FISH THANK YOU. Stanley Village" mounted on a pole in front of a small pond surrounded by rocks.'
				},
				{
					slug: 'hyrule',
					altText: 'A replica of a Hylian Shield hanging on a natural wood wall in a local sword shop in Estes Park. It\'s flanked on either side with Master Sword replicas (one blue, one black).'
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
