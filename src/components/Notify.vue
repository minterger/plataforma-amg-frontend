<script setup>
import Notification from "./Notification.vue";
import { notifyStore } from "../stores/notify.store";

const notify = notifyStore();
</script>

<template>
  <TransitionGroup
    class="fixed p-4 top-0 right-0 flex flex-col gap-2 z-50"
    name="notify"
    tag="div"
    v-show="notify.notifications.length"
  >
    <Notification
      v-for="item of notify.notifications"
      :key="item.id"
      :notification="item"
    />
  </TransitionGroup>
</template>

<style scoped>
.notify-enter-active,
.notify-leave-active {
  transition: opacity 0.5s ease;
}

.notify-enter-from,
.notify-leave-to {
  opacity: 0;
}
</style>
