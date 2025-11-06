<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	type Theme = 'light' | 'dark';

	let theme: Theme = 'light';

	const applyTheme = (value: Theme) => {
		if (!browser) return;
		document.documentElement.classList.toggle('dark', value === 'dark');
	};

	onMount(() => {
		if (!browser) return;
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'dark' || stored === 'light') {
			theme = stored;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		applyTheme(theme);
	});

	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
		if (!browser) return;
		localStorage.setItem('theme', theme);
		applyTheme(theme);
	};
</script>

<header class="header">
    <nav class="nav">
        <a href="/" class="home-btn">Home</a>
        <a href="/Project">Project</a>
        <a href="/Skill">Skill</a>
        <button class="theme-btn" type="button" aria-label="Toggle theme" on:click={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    </nav>
</header>

<style>
  .header {
    font-weight: 900;
    position: fixed;  /* 画面に固定 */
    top: 40px;           /* 上端に固定 */
    right: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--text);
    z-index: 10;
  }
  .nav {
    margin-left: auto; /* 右寄せポイント */
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .nav a {
    font-size: 25px;
  }

  .nav a:hover {
    color: #F14E32;
  }

  .theme-btn {
    background: none;
    border: none;
    color: inherit;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .theme-btn:hover {
    transform: scale(1.1);
  }
</style>
