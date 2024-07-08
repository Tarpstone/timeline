<script lang="ts">
	import type { EnhancedImageData } from '$lib/db';
	import Polaroid from './Polaroid.svelte';
	export let images: EnhancedImageData[] = [];
	export let keyPhotos: boolean;
</script>

<div class="polaroid-grid">
	{#each images as image}
		<Polaroid keyPhoto={keyPhotos} {image} />
	{/each}
</div>

<style>
	.polaroid-grid {
		display: flex;
		flex-wrap: wrap;
	}
</style>
