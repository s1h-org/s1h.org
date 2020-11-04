<script lang="ts">
    import { onMount } from "svelte";

    let posts = [];

    onMount(async () => {
        try {
            const res = await fetch(
                `${process.env.BLOG_URL}${process.env.POST_API}?key=${process.env.GHOST_CONTENT_KEY}&limit=${process.env.POST_LIMIT}`
            );
            posts = await res.json().then(content => content.posts);
        } catch (e) {}
    });
</script>

<ul class="pb-4">
    {#if posts.length}
    {#each posts as { title, published_at, url, excerpt }}
    <li class="bg-gray-100 rounded-sm pb-2 pl-3 pr-3 pt-2 mb-2 shadow-xs first:mt-4 last:mb-8">
        <a href="{url}"><h1 class="text-xl mb-2">{title}</h1></a>
        <p class="block text-sm">{excerpt}</p>
        <p class="block pt-1 text-xs text-gray-600">{new Date(published_at).toDateString()}</p>
    </li>
    {/each}
    {:else}
    <li class="bg-gray-100 rounded-sm pb-2 pl-3 pr-3 pt-2 mb-2 shadow-xs first:mt-4 last:mb-8">
        <h1 class="text-xl mb-2">Nothing to read here, check back later!</h1>
    </li>
    {/if}
</ul>
