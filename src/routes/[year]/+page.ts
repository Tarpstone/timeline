import { getYearKeyImages, type EnhancedImageData } from '$lib/db';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }): { year: string; images: EnhancedImageData[] } {
	const imageData = getYearKeyImages(params.year);
	return { year: params.year, images: imageData };
}
