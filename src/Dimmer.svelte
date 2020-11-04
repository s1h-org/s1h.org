<script>
    import { fade } from "svelte/transition";
    export let visible = true;

    function toggleMenu() {
        visible = !visible;
    }
</script>

{#if visible}
    <div class="z-10 top-0 right-0 bottom-0 left-0 fixed bg-opacity-75 bg-black" transition:fade on:click={(e) => toggleMenu()} />
{/if}
