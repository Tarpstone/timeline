<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import PolaroidGrid from '$lib/components/PolaroidGrid.svelte';
	import Seo from '$lib/components/Seo.svelte';
	export let data;
</script>

<Seo
	year={data.year}
	imageUrl={data.images[data.images.length - 1].src1600}
	imageAltText={data.images[data.images.length - 1].altText}
/>
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
