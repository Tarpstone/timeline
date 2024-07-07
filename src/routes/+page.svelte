<script>
	import YearSelect from '$lib/components/YearSelect.svelte';

	export let data;
</script>

<main>
	<section>
		<header>
			<h1>timeline</h1>
		</header>

		<ul>
			{#each data.years as { year, summary }}
				<YearSelect {year} {summary} />
			{/each}
		</ul>
	</section>
</main>
<footer>
	<a href="/about">about</a>
</footer>

<style>
	main {
		max-width: 800px;
	}
</style>
