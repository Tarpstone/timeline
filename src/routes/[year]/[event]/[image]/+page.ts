import { getEventImageByName, type EnhancedImageData } from '../../../../lib/db';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }): { imageData: EnhancedImageData } {
	return { imageData: getEventImageByName(params.year, params.event, params.image) };
}
