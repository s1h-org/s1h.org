<script>
    import Blog from "./Blog.svelte";
    import Icon from "svelte-awesome";
    import {
        envelope,
        xing,
        linkedin,
        github,
        twitter,
    } from "svelte-awesome/icons";
</script>

<style>
    .contact-icon {
        position: relative;
        top: 0.2rem;
    }
</style>

<nav class="z-10 h-full p-4 text-xl overflow-y-scroll">
    <div class="mb-3">
        <p
            class="font-heading text-center text-gray-600 border-gray-600 border-b-2 text-sm">
            Meet me somewhere else
        </p>
        <ul>
            <li>
                <a href="mailto:kontakt@s1h.org">
                    <Icon data={envelope} class="w-5 h-5 text-lg" /><span
                        class="contact-icon pl-2">Mail</span></a>
            </li>
            <li>
                <a href="https://twitter.com/s1hofmann">
                    <Icon
                        data={twitter}
                        class="w-5 h-5 text-blue-600 text-lg" /><span
                        class="contact-icon pl-2">Twitter</span></a>
            </li>
            <li>
                <a href="https://github.com/s1hofmann">
                    <Icon data={github} class="w-5 h-5 text-lg" /><span
                        class="contact-icon pl-2">GitHub</span></a>
            </li>
            <li>
                <a href="https://www.xing.com/profile/Simon_Hofmann29/">
                    <Icon
                        data={xing}
                        class="w-5 h-5 bg-teal-700 text-white text-lg" /><span
                        class="contact-icon pl-2">Xing</span></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/simon-hofmann-959230119/">
                    <Icon
                        data={linkedin}
                        class="w-5 h-5 bg-blue-700 text-white text-lg" /><span
                        class="contact-icon pl-2">LinkedIn</span></a>
            </li>
        </ul>
    </div>

    <div class="mb-3">
        <p class="text-center text-gray-600 border-gray-600 border-b-2 text-sm">
            Read my blog
        </p>
        <Blog />
    </div>
</nav>
