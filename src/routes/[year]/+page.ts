import { getYearKeyImages, type EnhancedImageData } from '$lib/db';
import { error } from '@sveltejs/kit';

// load is a special function in Svelte. The return value is made available
// to the neighboring page.svelte file
export function load({ params }): { year: string; images: EnhancedImageData[] } {
	const imageData = getYearKeyImages(params.year);
	if (!imageData) {
		error(404, "This page doesn't exist.");
	}
	return { year: params.year, images: imageData };
}
