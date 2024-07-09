<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import PolaroidGrid from '$lib/components/PolaroidGrid.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	export let data;
</script>

<main>
	<section>
		<NavHeader year={data.year} event={data.event} />
		<PolaroidGrid keyPhotos={false} images={data.images} />
	</section>
</main>
<AboutFooter />

<style>
	main {
		max-width: 800px;
	}
</style>
