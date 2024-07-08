<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import PolaroidGrid from '$lib/components/PolaroidGrid.svelte';
	export let data;
</script>

<main>
	<section>
		<NavHeader year={data.year} />
		<PolaroidGrid keyPhotos={true} images={data.images} />
	</section>
</main>
<AboutFooter />

<style>
	main {
		max-width: 800px;
	}
</style>
