<script>
	export let data;
</script>

<main>
	<section>
		<header>
			<h1>timeline</h1>
		</header>

		<ul>
			{#each data.years as { year, summary }}
				<a href={year}>
					<li class="year-link">
						<span class="year-number">{year}</span>
						<span>{summary}</span>
					</li>
				</a>
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

	.year-link {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.year-number {
		align-self: center;
		justify-self: center;
	}
</style>
