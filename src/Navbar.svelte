<script>
    import Burger from "./Burger.svelte";
    const pageTitle = "s1h.org";
</script>

<style>
.page-title {
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: .5px;
}
</style>

<header class="flex justify-between bg-white items-center text-black h-16 pl-8 pr-8">
    <div class="navbar-left"><h1 class="page-title">{pageTitle}</h1></div>
    <nav class="main-menu invisible lg:visible">
        <!-- <a href="https://s1h.org">{pageTitle}</a> -->
    </nav>
    <div class="navbar-right">
        <Burger />
    </div>
</header>
