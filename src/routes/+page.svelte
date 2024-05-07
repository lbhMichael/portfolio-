<script>
  import Skills from "$lib/components/Skills.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import SliderItem from "$lib/components/SliderItem.svelte";
</script>

<main class="max-w-screen-2xl px-2 md:px-4 mx-auto">
  <section
    id="main"
    class="flex h-[80vh] w-full flex-col space-y-8 pt-24 md:pt-56 items-center"
  >
    <h1 class="text-6xl w-full items-start">Hi, My Name is Michael E Ndukwe</h1>
    <p class="text-lg items-start mr-auto md:text-md">
      A developer dedicated to creating intuitive and fun applications for the
      world
    </p>
    <div class="flex w-full items-start gap-4">
      <a href="/contact-me" class="btn btn-success btn-outline">Contact Me</a>
      <a href="/" class="btn btn-secondary btn-outline">Resumé</a>
    </div>
  </section>
  <Skills />
</main>
