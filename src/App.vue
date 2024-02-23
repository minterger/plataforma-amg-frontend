<script setup>
import Nav from "./components/Navbar.vue";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <div class="w-screen max-w-full h-screen max-h-screen overflow-hidden flex">
    <Nav />
    <div class="w-full h-screen lg:w-4/5 2xl:w-full relative">
      <TopNav />
      <div
        class="w-full h-full p-4 pt-20 md:p-8 md:pt-24 overflow-y-auto bg-gray-100"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
