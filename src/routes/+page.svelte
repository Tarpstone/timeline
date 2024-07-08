<script>
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import YearSelect from '$lib/components/YearSelect.svelte';

	export let data;
</script>

<main>
	<section>
		<NavHeader />
		<ul>
			{#each data.years as { year, summary }}
				<YearSelect {year} {summary} />
			{/each}
		</ul>
	</section>
</main>
<AboutFooter home={true}/>

<style>
	main {
		max-width: 800px;
	}
</style>
