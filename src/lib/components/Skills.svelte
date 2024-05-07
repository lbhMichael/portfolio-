<script>
  import { images } from "./images";
  import { fade } from "svelte/transition";
</script>

<main>
  <section class="max-w-screen-xl py-12 md:py-24 lg:py-32">
    <div class="container grid gap-12 px-4 md:px-6">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Portfolio
        </h2>
        <p class="max-w-[700px] text-gray-500 dark:text-gray-400">
          Check out some of my recent projects and the technologies I used to
          build them.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each images as image, index}
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
            key={index}
          >
            <img
              src={image.url}
              width="600"
              height="400"
              alt={image.title}
              class="aspect-video overflow-hidden rounded-t-lg object-cover"
            />
            <div class="space-y-2 p-4">
              <h3 class="text-lg font-semibold">{image.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {image.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container grid gap-12">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Key Skills &amp; Technologies
        </h2>
        <p class="max-w-[700px] text-gray-500 dark:text-gray-400">
          I'm proficient in a wide range of technologies and tools, enabling me
          to deliver high-quality, scalable, and maintainable solutions.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Front-End</h3>
          <ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>React</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>HTML5 &amp; CSS3</li>
          </ul>
        </div>
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Back-End</h3>
          <ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Other Tools &amp; Skills</h3>
          <ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>Git &amp; GitHub</li>
            <li>Docker</li>
            <li>AWS (EC2, S3, Lambda)</li>
            <li>Agile Methodologies</li>
            <li>Unit Testing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
