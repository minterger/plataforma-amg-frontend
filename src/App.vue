<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import TopNav from "./components/TopNav.vue";

const navMenu = ref(false);

const toggleNav = (value) => {
  console.log(value);
  navMenu.value = value;
};
</script>

<template>
  <div class="w-screen max-w-full h-screen max-h-screen overflow-hidden flex">
    <Navbar :menu="navMenu" @toggleNav="toggleNav" />
    <div
      :class="navMenu ? 'lg:w-4/5' : 'lg:w-full'"
      class="w-full h-screen 2xl:w-full relative transition-all"
    >
      <TopNav />
      <div
        class="w-full h-full p-4 pt-20 md:p-8 md:pt-24 overflow-y-auto bg-gray-100"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
