import { defineStore } from "pinia";
import { ref } from "vue";

export const notifyStore = defineStore("notify", () => {
  const notifications = ref([]);

  const pushNotifications = ({ type = "danger", message }) => {
    if (!message) return;
    notifications.value.unshift({
      id: Date.now() + Math.random(),
      type,
      message,
    });
  };

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter((e) => e.id !== id);
  };

  return {
    notifications,
    pushNotifications,
    removeNotification,
  };
});
