<script lang="ts">
	import type { EnhancedImageData } from '$lib/db';
	import Polaroid from './Polaroid.svelte';
	export let images: EnhancedImageData[] = [];
	export let keyPhotos: boolean;
</script>

<div class="polaroid-grid">
	{#each images as image}
		<div class="polaroid-container"><Polaroid keyPhoto={keyPhotos} {image} /></div>
	{/each}
</div>

<style>
	.polaroid-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.polaroid-container {
		margin: 10px;
	}

	@media (max-width: 800px) {
		.polaroid-grid {
			grid-template-columns: 50vw 50vw;
		}
	}
</style>
