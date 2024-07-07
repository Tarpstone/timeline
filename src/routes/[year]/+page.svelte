<script>
	export let data;
</script>

<main>
	<ul>
		{#each data.events as { name, slug }}
			<li><a href={slug}>{name}</a></li>
		{/each}
	</ul>
</main>
