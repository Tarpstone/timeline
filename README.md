# timeline

[timeline.tarpey.dev](https://timeline.tarpey.dev)

```typescript
type Image = {
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

// simply using dynamic paths for enhanced:img is broken.
// shoutout kapitalisman for this workaround.
// https://github.com/sveltejs/kit/discussions/11438
export const imagesno = import.meta.glob<Image>('$lib/albums/**', {
	query: { enhanced: true },
	import: 'default',
	eager: true
});

// round 2 since kapitalisman's fix didn't work either
export const images = import.meta.glob<ImageImport>(['$lib/albums/**'], {
	eager: true,
	query: { enhanced: true }
});

console.log(images);

export function get_full(desired_image: string) {
	return images[desired_image].default;
}
```

Starting to feel unloved. Might want to investigate Hugo at some point. Huge green flag from their README:

```
Hugo's fast asset pipelines include:

Image processing – Convert, resize, crop, rotate, adjust colors, apply filters, overlay text and images, and extract EXIF data
```
