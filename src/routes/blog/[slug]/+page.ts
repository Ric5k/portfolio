// src/routes/blog/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

export const load: PageLoad = async ({ params }) => {
    try {
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            content: post.default as ComponentType,
            meta: post.metadata as { title: string; date: string }
        };
    } catch {
        throw error(404, `Could not find ${params.slug}`);
    }
};