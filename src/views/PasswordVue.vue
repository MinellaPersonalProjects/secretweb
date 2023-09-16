<script setup>

import EnterPassword from "@/components/EnterPassword.vue";
</script>

<template>
  <v-container fluid class="overall" style="height: 100vh; background-color: black">
    <section id="password" >
      <enter-password />
    </section>
  </v-container>
</template>

<style scoped>
.overall{
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
