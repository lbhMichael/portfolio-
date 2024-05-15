<script lang="ts">
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    { name: "Contact Me", link: "#contact-me" },
  ];
</script>

<header
  class={`sticky z-[120] left-0 top-0 duration-200 px-6 md:px-48 flex items-center justify-between ${y > 0 ? "backdrop-blur-md rounded-sm  [&_h2]:text-[var(--primary-cyan)] [&_a]:text-[var(--primary-orange)] [&_a]:hover:text-[var(--primary-cyan)] bg-transparent " : "py-8 bg-transparent [&_h2]:text-[var(--primary-orange)] "}`}
>
  <div class="flex-1">
    <a href="/">
      <h2 class="cursor-pointer transition-colors duration-200">
        Michael Ndukwe
      </h2>
    </a>
  </div>
  <div class="flex-none">
    <ul class="flex gap-12">
      {#each tabs as item, index}
        <li class="cursor-pointer">
          <a href={item.link}>
            <p class="nav-link text-3xl font-semibold tracking-wide">
              {item.name}
            </p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  /* Define CSS transitions */
  .nav-link {
    transition:
      color 0.3s ease,
      transform 0.3s ease;
  }
  .nav-link:hover {
    color: var(--primary-orange);
    transform: scale(110%); /* Slight upward translation */
  }
  .filter-blur {
    filter: blur(5px); /* Adjust the blur value as needed */
  }
</style>
