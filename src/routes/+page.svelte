<script>
  import Skills from "$lib/components/Skills.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import About from '$lib/components/About.svelte';
  import SliderItem from "$lib/components/SliderItem.svelte";
</script>

<main class="max-w-screen-2xl px-2 md:px-4 mx-auto">


<section class="w-full py-12 md:py-24 lg:py-32">
  <div class="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
    <div class="space-y-4 place-content-center border">
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Michael Ndukwe</h1>
      <h2 class="text-2xl font-semibold text-red-500">Fullstack Developer </h2>
      <p class="max-w-[600px] text-white md:text-xl/tight">
       A developer dedicated to creating intuitive and fun applications for the
      world
      </p>
    </div>
    <div class="grid gap-6">
      <img
        src="/assets/Buddha.png"
        width="550"
        height="310"
        alt="John Doe"
        class="mx-auto aspect-square rounded-xl object-cover object-center sm:w-full"
      />
    </div>
  </div>
</section>
  <About/>
  <Skills />
</main>
