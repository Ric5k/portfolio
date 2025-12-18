<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css"
	let { children } = $props();
</script>
<Header/>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
<Footer/>