<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Polaroid from '$lib/components/Polaroid.svelte';
	import Seo from '$lib/components/Seo.svelte';
	export let data;
</script>

<Seo
	year={data.imageData.year}
	eventSlug={data.imageData.eventSlug}
	imageSlug={data.imageData.imageSlug}
	imageUrl={data.imageData.src}
	imageAltText={data.imageData.altText}
/>
<main>
	<section>
		<NavHeader year={data.imageData.year} event={data.imageData.eventSlug} />
		<Polaroid keyPhoto={false} heroImage={true} image={data.imageData} />
	</section>
</main>
<AboutFooter />

<style>
	main {
		max-width: 800px;
	}
</style>
