<script lang="ts">
	import { getImageBuildPaths } from '$lib/db';

	export let year: string = '';
	export let eventSlug: string = '';
	export let imageSlug: string = '';
	export let urlOverride: string = '';
	export let imageUrl: string = '';
	export let imageAltText: string = '';
	const basePageUrl = 'https://timeline.tarpey.dev';
	const basePageTitle = 'a tarpey timeline';
	const basePageDescription = 'A selection of the memories I carry around.';
	let fullPageUrl = basePageUrl;
	let fullPageTitle = basePageTitle;
	if (year) {
		fullPageUrl = `${basePageUrl}/${year}`;
		fullPageTitle = `${basePageTitle} / ${year}`;
	}
	if (year && eventSlug) {
		fullPageUrl = `${basePageUrl}/${year}/${eventSlug}`;
		fullPageTitle = `${basePageTitle} / ${eventSlug}`;
	}
	if (year && eventSlug && imageSlug) {
		fullPageUrl = `${basePageUrl}/${year}/${eventSlug}/${imageSlug}`;
		fullPageTitle = `${basePageTitle} / ${imageSlug}`;
	}
	// manual override for url
	if (urlOverride) {
		fullPageUrl = `${basePageUrl}/${urlOverride}`;
	}
	// fallback to default SEO if something is messed up
	const finalImageUrl = `${imageUrl ? imageUrl : getImageBuildPaths('1992', 'life', 'van').src1600}`;
	const defaultAltText =
		'Cindy Tarpey in the early 90s, crouched down on the front lawn of her house in Central Florida, holding her toddler aged son Mike Tarpey (owner of this website). The shadows indicate high noon, and their blocky brown Chrysler minivan is in the background.';
	// imageUrl is the condition here to ensure that if an image is missing alt text, it just won't get any
	const finalAltText = `${imageUrl ? imageAltText : defaultAltText}`;
</script>

<svelte:head>
	<title>{fullPageTitle}</title>
	<link rel="canonical" href={fullPageUrl} />
	<meta name="author" content="Mike Tarpey" />
	<meta name="description" content={basePageDescription} />
	<meta property="og:title" content={fullPageTitle} />
	<meta property="og:site_name" content={fullPageTitle} />
	<meta property="og:description" content={basePageDescription} />
	<meta property="og:url" content={fullPageUrl} />
	<meta property="og:image" content={finalImageUrl} />
	<meta property="og:image:alt" content={finalAltText} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site:id" content="16149065" />
	<meta name="twitter:creator" content="@Tarpstone" />
	<meta name="twitter:creator:id" content="16149065" />
	<meta property="twitter:title" content={fullPageTitle} />
	<meta property="twitter:description" content={basePageDescription} />
	<meta name="twitter:image" content={finalImageUrl} />
	<meta property="twitter:image:alt" content={finalAltText} />
</svelte:head>
