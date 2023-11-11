<script>
	import './styles.css';
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('mousemove', function(e) {
			document.documentElement.style.setProperty('--x', e.clientX.toString());
			document.documentElement.style.setProperty('--y', e.clientY.toString());
		});
	});

</script>

<svelte:head>
    <title>M. Fontes</title> 
</svelte:head>

<slot></slot>
<div class="light-layer"></div>
