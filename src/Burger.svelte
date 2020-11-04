<script lang="ts">
    export let open: boolean = false;

    function toggleMenu() {
        open = !open;
    }

    import Dimmer from "./Dimmer.svelte";
    import Menu from "./Menu.svelte";
</script>

<style>
    .burger {
        position: relative;
        z-index: 10;
        right: 15%;
        margin-top: 18px;
        margin-left: -8px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: right 0.3s ease-in-out;
    }

    .burger.open {
        right: -85%;
        transition: right 0.3s ease-in-out;
    }

    .burger-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
    }

    .burger-bar::before {
        content: "";
        position: absolute;
        left: 7px;
        width: 16px;
        height: 2px;
        background-color: var(--dark-gray-color);
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
    }

    .burger-bar:first-child::before {
        top: 14px;
        transform: translateY(-3px);
    }

    .burger-bar:last-child::before {
        bottom: 14px;
        transform: translateY(3px);
    }

    .burger.open .burger-bar {
        transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
    }

    .burger.open .burger-bar:first-child {
        transform: rotate(45deg);
    }

    .burger.open .burger-bar:last-child {
        transform: rotate(-45deg);
    }

    .burger.open .burger-bar::before {
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        transform: none;
    }

    .burger-menu {
        width: min(80%, 320px);
        left: 100%;
        transition: left 0.3s ease-in-out;
    }

    .burger-menu.open {
        left: max(20%, calc(100% - 320px));
    }
</style>

<Dimmer bind:visible={open} />
<aside class="burger-menu fixed z-10 h-full top-0 bg-white" class:open>
    <div class="burger" class:open on:click={(e) => toggleMenu()}>
        <div class="burger-bar" />
        <div class="burger-bar" />
    </div>
    <Menu />
</aside>
