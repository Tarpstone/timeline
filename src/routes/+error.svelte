<script lang="ts">
    import { page } from '$app/stores';
	import AboutFooter from '$lib/components/AboutFooter.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo />
<main>
    <h1>{$page.status} {$page.error?.message ?? "Unknown error..."}</h1>
</main>
<AboutFooter />