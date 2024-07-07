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

// round 2 since kapitalisman's fix didn't work either
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
