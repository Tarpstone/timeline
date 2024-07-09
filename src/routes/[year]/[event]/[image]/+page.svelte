<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Polaroid from '$lib/components/Polaroid.svelte';
	export let data;
</script>

<main>
	<section>
		<NavHeader year={data.imageData.year} event={data.imageData.eventSlug} />
		<Polaroid keyPhoto={false} heroImage={true} image={data.imageData}/>
	</section>
</main>
<AboutFooter />

<style>
	main {
		max-width: 800px;
	}
</style>
