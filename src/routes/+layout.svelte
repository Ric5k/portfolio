<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Header from '$lib/components/Header.svelte';
	import "../app.css"

	let { children } = $props();
</script>
<Header />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
