<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1 class="text-7xl font-black mb-3 mt-10 ml-10">Blog</h1>

<div class="flex flex-col gap-6 p-10">
    {#each data.posts as post}
        <a href="/blog/{post.slug}" class="group block">
            <article class="flex items-baseline gap-4  rounded-xl p-6 hover:bg-yellow-50 border-2 hover:border-yellow-50">
                
                <time class="text-sm font-mono text-gray-400 shrink-0 group-hover:text-black transition-colors w-[100px]">
                    {post.date}
                </time>

                <h2 class="text-lg font-bold text-gray-800 group-hover:text-black leading-tight transition-colors line-clamp-2">
                    {post.title}
                </h2>

            </article>
        </a>
    {/each}
</div>