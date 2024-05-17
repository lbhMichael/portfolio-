<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let innerHeight = 0;
  let innerWidth = 0;
  let y = 0;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<div class="w-full overflow-hidden min-h-screen relative">
  <Navbar {y} />
  <div
    class={`fixed bottom-0 w-full duration-200 flex p-10 z-[10] ${y > 0 ? "opacity-full" : "opacity-0"}`}
  >
    <!-- <button
      on:click={() => goTop}
      class="ml-auto rounded-full px-3 sm:px-4 hover:bg-slate-800 bg-slate-500"
      ><i
        class="fa-solid fa-arrow-up grid place-items-center aspect-square"
      /></button
    > -->
  </div>

  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
