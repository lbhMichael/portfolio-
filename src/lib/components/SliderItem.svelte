<script lang="ts">
  import { images } from "./images";
  import { fade } from "svelte/transition";
  let expandedIndex = -1;
  let selected: number[];
  let isHovered = false;
  let isHoveredCards = Array(images.length).fill(false);

  function toggleSize(index: any) {
    transition(() => {
      expandedIndex = expandedIndex === index ? -1 : index;
    });
  }
  function setSelected(index: number) {
    const currentIndex = selected.indexOf(index);
    if (currentIndex === -1) {
      selected.push(index);
    } else {
      selected.splice(currentIndex, 1);
    }
  }
  function transition(action: () => void) {
    // @ts-ignore
    if (!document.startViewTransition) {
      action();
      return;
    }
    // @ts-ignore
    document.startViewTransition(action);
  }
</script>

<section class="grid gap-4 mt-24 mb-12">
  <h1 class="text-4xl">Projects</h1>
  <ul class="grid grid-cols-5 items-center justify-center gap-4">
    {#each images as item, index}
      <li class="cursor-pointer">
        {#if index < 5 && index >= 0}
          <button
            class="relative w-full h-full cursor-pointer"
            on:click={() => toggleSize(index)}
          >
            <img
              class="h-full w-full rounded-lg object-contain"
              src={item.url}
              alt={`Image ${index + 1}`}
            />
          </button>
        {/if}
      </li>
    {/each}
  </ul>
  {#if expandedIndex !== -1}
    <div class="image-container" transition:fade>
      <img
        class="cursor-pointer h-[300px] flex mx-auto max-w-full rounded-lg"
        src={images[expandedIndex]?.url}
        alt={`Selected Image ${expandedIndex + 1}`}
      />
    </div>
  {/if}
</section>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
