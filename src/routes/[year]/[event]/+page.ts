import { getYearEventImages, type EnhancedImageData } from '../../../lib/db';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }): { year: string; event: string; images: EnhancedImageData[] } {
	return {
		year: params.year,
		event: params.event,
		images: getYearEventImages(params.year, params.event)
	};
}
