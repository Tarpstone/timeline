<script lang="ts">
	export let year: string = '';
	export let summary: string = '';
</script>

<a href={year}>
	<li class="year-link">
		<span class="year-number">{year}</span>
		<span class="event-list">{summary}</span>
	</li>
</a>

<style>
	.year-link {
		display: grid;
		grid-template-columns: 1fr 3fr;
		color: #000000;
		background-color: #ffffff;
		padding: 10px 0;
		margin-bottom: 20px;
		justify-items: left;
		align-items: center;
	}
	.year-link:hover {
		background-color: #ffcc99;
	}

	.year-number {
		align-self: center;
		justify-self: center;
	}

	.event-list {
		font-size: 1rem;
	}
</style>
