export type Image = {
	sources: {
		avif: string;
		webp: string;
		png: string;
	};
	img: {
		src: string;
		w: number;
		h: number;
	};
};

type ImageImport = {
	default: string;
};

type EnhancedImageImport = {
	default: Image;
};

// inspired by the docs + a couple github solutions.
// https://github.com/sveltejs/kit/discussions/11438
// https://github.com/sveltejs/kit/issues/11535#issuecomment-2207645048
function loadImages() {
	return import.meta.glob<ImageImport>(['$lib/albums/**'], {
		eager: true,
	});
}

function loadEnhancedImages() {
	return import.meta.glob<ImageImport>(['$lib/albums/**'], {
		eager: true,
		query: {
			enhanced: true,
			w: '400;800;1600'
		}
	});
}

// turns out enhanced images are probably overkill and hard to work with.
// let's just do it ourselves.
const images = loadImages();

/**
 * Return the data from an image import.
 *
 * TODO When using enhanced image data, this would return type Image.
 */
export function getImageImport(desiredImage: string): string {
	return images[desiredImage].default;
}
