<script>
  import { images } from "./images";
</script>

<main>
  <!-- Portfolio -->
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container mx-auto grid gap-12 px-4 md:px-6">
      <div class="space-y-4 text-center">
        <h2 class="text-5xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
          Portfolio
        </h2>
        <p class="text-2xl md:text-3xl/relaxed">
          Check out some of my recent projects and the technologies I used to
          build them.
        </p>
      </div>
      <div class="[&_h3]:text-red-400 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each images as image, index}
          <div
            class="rounded-lg z-50 border bg-card text-card-foreground shadow-sm"
          >
            <img
              src={image.url}
              width="600"
              height="400"
              alt={image.title}
              class="aspect-video overflow-hidden rounded-t-lg object-cover"
            />
            <div
              class="space-y-6 p-6 [&_h3]:text-4xl text-[var(--primary-orange)]"
            >
              <h3 class="text-lg font-semibold">{image.title}</h3>
              <p
                class="text-sm md:text-3xl/tight text-white-500 dark:text-white-400"
              >
                {image.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Key Skills and Technologies -->
  <section class=" py-12 md:py-24 lg:py-32">
    <div class="container mx-auto grid gap-12">
      <div class="space-y-4">
        <h2 class="font-bold tracking-tighter sm:text-2xl md:text-5xl">
          Key Skills &amp; Technologies
        </h2>
        <p
          class="max-w-[700px] text-2xl md:text-3xl/tight text-white-500 dark:text-white-400"
        >
          I'm proficient in a wide range of technologies and tools, enabling me
          to deliver high-quality, scalable, and maintainable solutions.
        </p>
      </div>
      <!-- Frontend -->
      <div
        class="[&_h3]:text-3xl [&_h3]:underline [&_p]:text-2xl [&_h3]:text-[var(--primary-orange)] grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Front-End</h3>
          <ul class="space-y-1 text-sm text-white-500 dark:text-white-400">
            <li><p>React</p></li>
            <li>
              <p>Next.js</p>
            </li>
            <li>
              <p>Svelte</p>
            </li>
            <li>
              <p>Tailwind CSS</p>
            </li>
            <li>
              <p>HTML5 & CSS3</p>
            </li>
          </ul>
        </div>
        <!-- Backend -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Back-End</h3>
          <ul class="space-y-1 text-sm text-white-500 dark:text-white-400">
            <li><p>Node.js</p></li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>PostgreSQL</p>
            </li>
            <li>
              <p>RESTful APIs</p>
            </li>
          </ul>
        </div>
        <!-- Other -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Other Tools &amp; Skills</h3>
          <ul class="space-y-1 text-sm text-white-500 dark:text-white-400">
            <li><p>Git &amp; GitHub</p></li>
            <li>
              <p>Docker</p>
            </li>
            <li>
              <p>AWS (EC2, S3, Lambda)</p>
            </li>
            <li>
              <p>Agile Methodologies</p>
            </li>
            <li>
              <p>Unit Testing</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
