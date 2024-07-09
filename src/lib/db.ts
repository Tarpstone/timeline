/**
 * Schema and data for the site.
 */

import { getFull, type Image } from './images';

interface YearSummary {
	year: string;
	summary: string;
}

interface EventsDB {
	[key: string]: Record<string, YearEvent>;
}

interface YearEvent {
	slug: string;
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
		}
	}
};

/**
 * Return the first listed image for a given event.
 */
export function getEventKeyImage(year: string, eventSlug: string): EnhancedImageData {
	const enhancedImageData = getYearEventImages(year, eventSlug);
	return enhancedImageData[0];
}

export function getEventImageByName(
	year: string,
	eventSlug: string,
	imageSlug: string
): EnhancedImageData {
	const enhancedImageData = getYearEventImages(year, eventSlug);
	// TODO error handling here
	return enhancedImageData.find((image) => image.href === `/${year}/${eventSlug}/${imageSlug}`)!;
}

export function getEventSlugsForYear(year: string): string[] {
	return Object.keys(eventsDB[year]);
}

export function getEventNamesBySlugForYear(year: string): Record<string, string> {
	let eventSlugNameMap: Record<string, string> = {};
	for (const [slug, event] of Object.entries(eventsDB[year])) {
		eventSlugNameMap[slug] = event.name;
	}
	return eventSlugNameMap;
}

export function getYearKeyImages(year: string): EnhancedImageData[] {
	const eventSlugs = getEventSlugsForYear(year);
	return eventSlugs.map((eventSlug: string) => {
		const imageData = eventsDB[year][eventSlug]['images'][0];
		return transformToEnhancedImageData(year, eventSlug, imageData);
	});
}

export function getYearEventImages(year: string, eventSlug: string): EnhancedImageData[] {
	const imageData = eventsDB[year][eventSlug]['images'];
	return imageData.map((imageData: EventImage) =>
		transformToEnhancedImageData(year, eventSlug, imageData)
	);
}

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
