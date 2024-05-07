<script lang="ts">
</script>

<div class="flex h-[640px] justify-center">
  <!-- Left Column -->
  <div class="w-1/2 bg-gray-200 p-4">
    <!-- Left content here -->
  </div>

  <!-- Right Column -->
  <div class="w-1/2 bg-gray-100 p-4">
    <form class="max-w-md items-center justify-center mt-28 ml-12">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2"
          >Name</label
        >
        <input
          type="text"
          id="name"
          name="name"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Your Name"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="example@example.com"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold mb-2"
          >Password</label
        >
        <input
          type="password"
          id="password"
          name="password"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >Submit</button
      >
    </form>
  </div>
</div>
