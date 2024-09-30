<script lang="ts">
	import { type EnhancedImageData } from '../db';
	import PolaroidWrapper from './PolaroidWrapper.svelte';
	export let image: EnhancedImageData;
	export let keyPhoto: boolean;
	export let heroImage: boolean = false;
	// figure out the href and name for this polaroid. if it's a key photo,
	// it should link to the entire event. otherwise it should
	// link to a specific image page (the full href field)
	const href = keyPhoto ? `/${image.year}/${image.eventSlug}` : image.href;
	const polaroidName = keyPhoto ? image.eventName : image.imageSlug;
</script>

<PolaroidWrapper href={heroImage ? '' : href}>
	<div class="event-name-div">
		<span class="event-name">{polaroidName}</span>
	</div>
	<div class="img-container">
		<img class="album-grid-img"
			src={image.src}
			srcset={heroImage ? image.srcsetHero : image.srcset}
			alt={image.altText}
		/>
		<!-- <enhanced:img
			class="album-grid-img"
			src={image.enhancedSrc}
			alt={image.altText}
		/> -->
	</div>
</PolaroidWrapper>

<style>
	.img-container {
		overflow: hidden;
	}
	.album-grid-img {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.event-name-div {
		display: flex;
	}

	.event-name {
		color: #000000;
		display: block;
		text-align: left;
		align-self: center;
		justify-self: center;
	}

	@media (max-width: 800px) {
		.event-name {
			font-size: 1.5rem;
		}
		.album-grid-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
