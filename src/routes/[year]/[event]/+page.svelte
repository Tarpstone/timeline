<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import PolaroidGrid from '$lib/components/PolaroidGrid.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	export let data;
</script>

<Seo
	year={data.year}
	eventSlug={data.event}
	imageUrl={data.images[data.images.length - 1].enhancedSrc.img.src}
	imageAltText={data.images[data.images.length - 1].altText}
/>
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
