<script lang="ts">
  import { browser } from "$app/environment";

  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    { name: "Contact Me", link: "#contact-me" },
  ];
  if (browser) {
    const menu = document.getElementById("menuToggle");
    menu?.addEventListener("click", () => {
      const mobile = document.getElementById("mobileMenu");
      mobile?.classList.toggle("hidden");
    });
  }
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
  <button id="menuToggle" class="md:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
  <ul id="mobileMenu" class="md:flex gap-12 hidden">
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
</style>
