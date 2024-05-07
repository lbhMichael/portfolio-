<script lang="ts">
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    { name: "Contact Me", link: "#contact-me" },
  ];
</script>

<header
  class={`sticky z-[10] left-0 top-0 duration-200 px-6 flex items-center justify-between ${ y > 0 ? "rounded-sm border-violet-200" : "py-6 bg-transparent border-transparent"}`}
>
  <div class="flex-1 ">

    <h2 class="cursor-pointer"><a href="/">Michael Ndukwe</a></h2>
  </div>
  <div class="flex-none">
    <ul class="flex gap-4">
      {#each tabs as item, index}
        <li class="cursor-pointer">
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
