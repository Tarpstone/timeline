<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo urlOverride={'about'} />
<main>
	<section>
		<NavHeader about={true} />
		<p>
			I've lost count of how many times I've heard some variation of "you have a picture of that???"
			or "I wish I had documented more of our childhood." Thank you to every friend who ever
			expressed this idea to me and kept me going; happy to be that guy.
		</p>
	</section>
</main>
<AboutFooter />

<style>
	main {
		max-width: 800px;
	}
	p {
		margin: 10px;
	}
	@media (max-width: 800px) {
		p {
			font-size: 1rem;
		}
	}
</style>
