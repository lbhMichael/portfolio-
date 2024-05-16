<script>
  import Skills from "$lib/components/Skills.svelte";
  import About from "$lib/components/About.svelte";
</script>

<main class="w-screen px-2 md:px-4 mx-auto">
  <section class="relative w-full py-12 md:py-24 lg:py-32">
    <div class="absolute watermark">Ndukwe</div>
    <div class="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
      <div class="space-y-4 place-content-center w-fitborder">
        <h2 class="text-2xl font-semibold text-[var(--primary-blue)]">
          Fullstack Developer
        </h2>
        <svg
          class="start"
          xmlns="http://www.w3.org/2000/svg"
          width="850"
          height="100"
          viewBox="0 0 850 100"
        >
          <text
            x="0"
            y="90"
            font-family="pt-sans"
            font-size="100"
            font-weight="bold"
            stroke-width="1.5"
          >
            Michael Ndukwe
          </text>
        </svg>

        <p class="md:text-3xl/tight">
          A developer dedicated to creating intuitive and fun applications for
          the world.
        </p>
      </div>
      <div class="md:grid hidden">
        <img
          src="/assets/Buddha.png"
          alt="Buddha"
          class="mx-auto aspect-square object-contain z-[10] object-right max-w-full h-auto"
        />
      </div>
    </div>
  </section>
  <About />
  <Skills />
</main>

<style>
  /* Define the start class for the stroke animation */
  .start {
    height: auto;
    stroke: var(--primary-orange);
    stroke-dasharray: 650; /* Adjust based on the SVG's width */
    stroke-dashoffset: 650; /* Adjust based on the SVG's width */
    stroke-width: 1;
    fill: transparent;
    animation: line 4s linear forwards; /* Smooth animation */
  }

  /* Keyframes for the stroke animation */
  @keyframes line {
    90% {
      stroke-dashoffset: 0;
      fill: transparent; /* Start the stroke as hidden */
    }
    to {
      stroke-dashoffset: 0;
      fill: var(--primary-orange); /* Reveal the stroke */
    }
  }

  /* Responsive adjustments for the SVG width */
  @media (max-width: 768px) {
    .start {
      width: 600px !important; /* Adjust the width for smaller screens */
      stroke-dasharray: 480; /* Adjust dasharray for the new width */
      stroke-dashoffset: 480; /* Adjust offset for the new width */
    }
  }
</style>
