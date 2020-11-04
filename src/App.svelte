<script lang="ts">
	import Navbar from "./Navbar.svelte";
	import Main from "./Main.svelte";
	import Footer from "./Footer.svelte";
</script>

<style global>
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
	@tailwind utilities;
	/* purgecss start ignore */
	a {
		text-decoration: underline;
	}
	/* purgecss end ignore */
</style>

<Navbar />
<Main />
<Footer />
