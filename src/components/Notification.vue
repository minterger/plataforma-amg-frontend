<script setup>
import { defineProps, onBeforeUnmount } from "vue";
import { notifyStore } from "../stores/notify.store";

const props = defineProps(["notification"]);
const notify = notifyStore();

console.log(props.notification);

const time = setTimeout(() => {
  notify.removeNotification(props.notification?.id);
}, 3000);

onBeforeUnmount(() => {
  clearTimeout(time);
});
</script>

<template>
  <div
    :class="{
      'bg-green-700': notification.type === 'success',
      'bg-red-700': notification.type === 'danger',
    }"
    class="p-4 rounded-md text-white"
  >
    {{ notification.message }}
  </div>
</template>
