<script lang="ts">
	import { type EnhancedImageData } from '../db';
	export let image: EnhancedImageData;
	export let keyPhoto: boolean;
	// figure out the href and name for this polaroid. if it's a key photo,
	// it should link to the entire event. otherwise it should
	// link to a specific image page (the full href field)
	const href = keyPhoto ? `/${image.year}/${image.eventSlug}` : image.href;
	const polaroidName = keyPhoto ? image.eventName : image.imageSlug;
</script>

<a href={href}
	>
		<div class="event-name-div">
		<span class="event-name">{polaroidName}</span></div><enhanced:img
			class="album-grid-img"
			src={image.enhancedSrc}
			alt={image.altText}
		/>

	</a
>
<!-- <a {href}><enhanced:img class="album-grid-img" src={image.enhancedSrc} alt={image.altText} /></a> -->

<style>
	@media (max-width: 800px) {
		.album-grid-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.album-grid-img {
		display: block;
		object-fit: cover;
		width: 400px;
		height: 400px;
	}

	.event-name-div {
		display: block;
	}

	.event-name {
		display: block;
		text-align: center;
		align-self: center;
		justify-self: center;
	}

	@media (max-width: 800px) {
		.event-name {
			margin-left: 20px;
		}
	}
</style>
