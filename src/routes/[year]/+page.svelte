<script>
	export let data;
</script>

<main>
	<ul>
		{#each data.events as { name, slug }}
			<li><a href="{data.year}/{slug}">{name}</a></li>
		{/each}
	</ul>
</main>
