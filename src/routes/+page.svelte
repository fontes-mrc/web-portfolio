<script>
	// @ts-nocheck
	import corpus from '$lib/lang/home/en.json';
	import Hero from '$lib/home/hero/hero.svelte';
	import Content from '$lib/home/content/content.svelte';
</script>

<Hero {corpus} />
<Content {corpus} />
