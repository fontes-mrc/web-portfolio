<script>
    import { dev } from "$app/environment"
    import { inject } from "@vercel/analytics"

    inject({ mode: dev ? "development" : "production" })

    import "./styles.css"
    import { onMount } from "svelte"
    import Footer from "./footer.svelte"

    let lang = ""

    onMount(() => {
        document.addEventListener("mousemove", function (e) {
            document.documentElement.style.setProperty("--x", e.clientX.toString())
            document.documentElement.style.setProperty("--y", e.clientY.toString())
        })

        lang = document.documentElement.lang == "pt-br" ? "br" : "en"
    })
</script>

<svelte:head>
    <title>M. Fontes</title>
</svelte:head>

<div class="langs">
    <a href="/" on:click={() => (lang = "en")} class:inactive={lang !== "en"}>EN</a>
    <p>|</p>
    <a href="/br" on:click={() => (lang = "br")} class:inactive={lang !== "br"}>BR</a>
</div>

<slot />
<Footer bind:lang />
<div class="light-layer" />

<style>
    .langs {
        padding: 1rem;
        display: flex;
        color: var(--light-gray);
        font-size: 0.8rem;
        float: right;
    }

    .langs a {
        color: var(--light-gray);
        text-decoration: none;
        margin: 0 0.5rem;
        transition: all 0.2s ease-in-out;
    }

    .langs a:hover {
        color: var(--white);
        transform: translateY(-0.1rem);
        filter: blur(0);
    }

    .inactive {
        filter: blur(0.05rem);
        opacity: 0.7;
    }

    .light-layer {
        --size: 80;
        content: "";
        z-index: -1;
        position: fixed;
        left: calc(var(--x) * 1px);
        top: calc(var(--y) * 1px);
        width: calc(var(--size) * 1rem);
        height: calc(var(--size) * 1rem);
        background: radial-gradient(circle closest-side, var(--back-color-3), transparent);
        transform: translate(-50%, -50%);
    }
</style>
