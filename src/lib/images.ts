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
	default: Image;
};

// inspired by the docs + a couple github solutions.
// https://github.com/sveltejs/kit/discussions/11438
// https://github.com/sveltejs/kit/issues/11535#issuecomment-2207645048
export const images = import.meta.glob<ImageImport>(['$lib/albums/**'], {
	eager: true,
	query: {
		enhanced: true,
		w: '800'
	}
});

export function getFull(desiredImage: string) {
	return images[desiredImage].default;
}
