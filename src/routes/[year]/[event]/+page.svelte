<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import PolaroidGrid from '$lib/components/PolaroidGrid.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { getEventKeyImage } from '$lib/db';
	export let data;
	const coverImage = getEventKeyImage(data.year, data.event);
</script>

<Seo
	year={data.year}
	eventSlug={data.event}
	imageUrl={coverImage.src1600}
	imageAltText={coverImage.altText}
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
