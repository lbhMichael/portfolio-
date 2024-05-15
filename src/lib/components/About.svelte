<script lang="ts">
  import { browser } from "$app/environment";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
  let cards;
  if (browser) {
    cards = document.querySelectorAll(".card");
    console.log(cards);
  }

  if (cards) {
    cards.forEach((card, index) => {
      const delay = index * 0.2; // Adjust delay based on card index
      gsap.from(card, {
        y: 50, // Move the card slightly down initially
        scale: 0.95, // Start slightly scaled down
        duration: 1,
        delay: delay,
        scrollTrigger: {
          trigger: card,
          start: "top center", // Trigger when the top of the card hits the center of the viewport
          end: "bottom center", // End when the bottom of the card hits the center of the viewport
          scrub: true, // Smooth scrubbing effect
          markers: false, // Optional: Disable ScrollTrigger markers
        },
        ease: "power1.out", // Easing function for the animation
        opacity: 0, // Start invisible
        stagger: 0.4 * index, // Add a stagger effect between cards
        onComplete: () => {
          gsap.to(card, {
            scale: 1, // Return to original size
            opacity: 1, // Fade in
            duration: 1,
            y: 0,
            ease: "power1.inOut", // Easing function for the return animation
          });
        },
      });
    });
  }
</script>

<section class="w-full py-12 md:py-24 lg:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <div class="text-center">
      <h2 class="text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
        What I Offer
      </h2>
      <p class="text-2xl md:text-3xl/relaxed">
        Here are some of the key services and skills I can provide.
      </p>
    </div>
    <div
      class=" grid [&_div]:z-[100] [&_h3]:text-3xl [&_p]:md:text-3xl [&_p]:text-gray-900 [&_h3]:md:text-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"
    >
      <!-- Card 1 -->
      <div
        class="card flex z-[100] flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
      >
        <div
          class="flex items-center justify-center bg-gray-700 rounded-md w-20 h-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-red-500">Web Development</h3>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Expertise in building modern, responsive web applications using the
          latest technologies.
        </p>
      </div>
      <!-- Card 2 -->
      <div
        class="card flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
      >
        <div
          class="flex items-center justify-center bg-gray-700 rounded-md w-20 h-20 dark:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-red-500">Mobile Development</h3>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Experience in building mobile-first web applications using React
          Native.
        </p>
      </div>
      <!-- Card 3 -->
      <div
        class="card flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
      >
        <div
          class="flex items-center justify-center bg-gray-700 rounded-md w-20 h-20 dark:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-red-500">Backend Development</h3>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Proficient in building scalable and secure backend infrastructure
          using Node.js and databases like MongoDB and PostgreSQL.
        </p>
      </div>
      <!-- Card 4 -->
      <div
        class="card flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
      >
        <div
          class="flex items-center justify-center bg-gray-700 rounded-md w-20 h-20 dark:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8"
          >
            <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
            ></path>
            <path
              d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
            ></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-red-500">UI/UX Design</h3>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Expertise in creating intuitive and visually appealing user interfaces
          using tools like Figma and Sketch.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
</style>
