<script lang="ts">
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    { name: "Contact Me", link: "#contact-me" },
  ];
</script>

<header
  class={`sticky z-[10] w-[100vw] left-0 top-0 duration-200 px-24 flex items-center justify-between ${y > 0 ? " bg-slate-500 rounded-sm border-violet-200" : "py-6 bg-transparent border-transparent"}`}
>
  <div class="flex-1">
    <h2 class={`cursor-pointer ${y > 0 ? "text-[#35d399]" : ""}`}>
      <a href="/"
        >Michael
        <span class={`${y > 0 ? "text-[#d926a9]" : ""}`}> Ndukwe </span>
      </a>
    </h2>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal">
      {#each tabs as item, index}
        <li class="cursor-pointer hover:text-pink-500">
          <a href={item.link}>
            <p>
              {item.name}
            </p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>
