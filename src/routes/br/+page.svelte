<script>
    // @ts-nocheck
    import corpus from "$lib/lang/home/br.json"
    import Hero from "$lib/home/hero/hero.svelte"
    import Content from "$lib/home/content/content.svelte"
    import ContentModal from "$lib/home/content/modal/modal.svelte"

    let modalProps = { isActive: false, tools: [] }
</script>

<Hero {corpus} />
<Content {corpus} bind:modalProps />
<ContentModal bind:modalProps />
