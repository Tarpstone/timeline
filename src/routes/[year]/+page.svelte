<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import EventSelect from '$lib/components/EventSelect.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	export let data;
</script>

<main>
	<section>
		<NavHeader year={data.year} />
		<ul>
			{#each data.events as { name, slug }}
				<EventSelect year={data.year} {name} {slug} />
			{/each}
		</ul>
	</section>
</main>
<AboutFooter/>

<style>
	main {
		max-width: 800px;
	}
</style>