<script>

	import AboutFooter from "$lib/components/AboutFooter.svelte";
import NavHeader from "$lib/components/NavHeader.svelte";

</script>
<main>
	<NavHeader about={true}/>
	<p>
		I've lost count of how many times I've heard some variation of "you have a picture of that???"
		or "I wish I had documented more of our childhood." Thank you to every friend who ever expressed
		this idea to me and kept me going; happy to be that guy.
	</p>
</main>
<AboutFooter about={true}/>

<style>
	@media (max-width: 800px) {
		p {
			margin: 0 20px 20px 20px;
			font-size: 1rem;
		}
	}
</style>
