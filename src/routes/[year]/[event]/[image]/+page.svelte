<script>

	import AboutFooter from "$lib/components/AboutFooter.svelte";
	import NavHeader from "$lib/components/NavHeader.svelte";
	export let data;
</script>
<main>
	<section>
		<NavHeader year={data.year} event={data.event} image={data.image} />
		<enhanced:img
			class="hero-img"
			src={data.imageData.enhancedSrc}
			sizes="max(800px, 100vw)"
			alt={data.imageData.altText}
		/>
	</section>
</main>
<AboutFooter/>

<style>
	main {
		max-width: 800px;
	}

	section {
		margin-bottom: 20px;
	}

	.hero-img {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
