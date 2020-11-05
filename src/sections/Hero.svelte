<script lang="ts">
    import TypedJs from "@loscrackitos/svelte-typed-js";
    import Icon from "svelte-awesome";
    import { angleDoubleDown } from "svelte-awesome/icons";

    function scrollToAbout(e) {
        const aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
</script>

<style>
    .overlay {
        position: relative;
        width: 100%;
        height: calc(100vh - 4rem);
        background: url("/assets/img/me.jpg") top center no-repeat;
        background-size: cover;
    }

    .overlay::before {
        content: "";
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .typewriter {
        position: absolute;
        top: 50%;
        left: 50%;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10%);
        }
    }

    .arrow {
        position: absolute;
        bottom: 2%;
        margin-left: 50%;
        margin-right: 50%;
        animation: bounce 0.8s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
</style>

<section id="hero" class="w-full h-full">
    <div class="overlay" />
    <div class="typewriter">
        <TypedJs
            strings={['.org', 'ofmann', 'appy', 'elpful', 'ilarious', 'onest', 'opeful', 'umble', 'umorous']}
            loop={true}
            typeSpeed={130}
            backSpeed={150}
            startDelay={1000}
            backDelay={1000}>
            <span
                class="font-alt text-3xl md:text-6xl text-black font-extrabold">s1h<span
                    class="typing font-alt text-3xl md:text-6xl text-teal-600 font-extrabold" /></span>
        </TypedJs>
    </div>
    <a class="arrow" href="#about" on:click={scrollToAbout}><Icon data={angleDoubleDown} scale={3} /></a>
</section>
