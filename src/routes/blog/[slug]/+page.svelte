<script lang="ts">
  import type { ComponentType } from 'svelte';
  import type { PageData as GeneratedPageData } from './$types';

  // 1. 本来来るべき型を定義
  interface PageData extends GeneratedPageData {
    content: ComponentType;
    meta: {
      title: string;
      date: string;
      [key: string]: any;
    };
  }

  // 2. data に型を適用
  export let data: PageData;
</script>

<article class="max-w-2xl mx-auto px-6 py-10 md:py-20">
  <div class="mt-10 ">
		<a href="/blog" class="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
			← Back to blog
		</a>
	</div>
	<h1 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight mb-2 mt-10">
		{data.meta.title}
	</h1>
	
	<time class="text-xs font-mono text-gray-400 block mb-12">
		ric5kdev・{data.meta.date}
	</time>

	<div class="prose prose-neutral prose-lg max-w-none 
		prose-headings:text-black prose-headings:font-black
		prose-p:text-gray-700 prose-p:leading-relaxed
		prose-img:rounded-xl">
		
		<svelte:component this={data.content} />
	</div>

</article>

<style>
  article {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    line-height: 1.6;
  }
</style>