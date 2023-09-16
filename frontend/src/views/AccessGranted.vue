<script setup>

import GrantedPage from "@/components/GrantedPage.vue";
import {onMounted, ref} from "vue";
import AccessFilePage from "@/components/AccessFilePage.vue";

const access_file = ref(false)

onMounted(() => {
  setTimeout(() => {
    access_file.value = true
  }, 3000);
})

</script>

<template>
  <v-container class="container" fluid style="height: 100vh; background-color: black">
    <granted-page v-if="!access_file"/>
    <access-file-page v-else />
  </v-container>
</template>

<style scoped>


.container {
  height: 100vh; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}
</style>
