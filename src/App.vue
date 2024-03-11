<script setup>
import { ref, computed } from "vue";
import Navbar from "./components/Navbar.vue";
import TopNav from "./components/TopNav.vue";
import Notify from "./components/Notify.vue";
import { userStore } from "./stores/user.store";
import { useRoute } from "vue-router";

const user = userStore();
const route = useRoute();

user.getTokenLocalStorage();

const isLogin = computed(() => route.name === "Login");

const navMenu = ref(false);

const toggleNav = (value) => {
  navMenu.value = value;
};
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <router-view v-if="isLogin"></router-view>
    <div v-if="user.userToken" class="flex">
      <Navbar :menu="navMenu" @toggleNav="toggleNav" />
      <div class="w-full relative transition-all">
        <TopNav />

        <div
          class="w-full absolute h-screen p-4 pt-20 md:p-8 md:pt-24 overflow-y-auto bg-gray-100"
        >
          <router-view v-slot="{ Component, route }">
            <transition name="view">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
    <Notify />
  </div>
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  transition: all 0.5s ease;
  width: 100%;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
  position: fixed;
}

.view-enter-from {
  translate: -25%;
}

.view-leave-to {
  translate: 25%;
}
</style>
