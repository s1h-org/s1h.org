<script lang="ts">
    export let heading: string;
</script>

<style>
    h2::before {
        position: absolute;
        display: block;
        content: "";
        width: 8rem;
        height: 0.1rem;
        background: darkgray;
        left: calc(50% - 4rem);
        bottom: -1rem;
    }

    h2::after {
        position: absolute;
        display: block;
        content: "";
        width: 4rem;
        height: 0.25rem;
        background: rgba(49, 151, 149, 1);
        left: calc(50% - 2rem);
        bottom: -1.05rem;
    }
</style>

<h2 class="relative text-4xl lg:text-5xl text-center uppercase mt-2 mb-8">{heading}</h2>
