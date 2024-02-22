<script setup>
import Nav from "./components/Navbar.vue";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <div class="w-screen max-w-full h-screen max-h-screen flex">
    <Nav />
    <div class="w-full h-screen relative">
      <TopNav />
      <div class="w-full h-full p-8 pt-24"><router-view></router-view></div>
    </div>
  </div>
</template>
