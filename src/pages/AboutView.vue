<template>
  <div class="about">
    <h1>This is an about page from FE-Store with Actions in Github</h1>
    <h2>Profile: {{ store.state.user.userData }}</h2>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "AboutView",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>
