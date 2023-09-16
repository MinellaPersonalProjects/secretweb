<script setup>

import ChatLayout from "@/components/ChatLayout.vue";
import {ref} from "vue";

const dancing = new URL('@/assets/avengertyn.gif', import.meta.url).href

const canchat = ref(false)
</script>

<template>
  <v-container fluid style="height: 100vh; background-color: black">
    <section v-show="!canchat">
      <v-container>
        <v-col justify="center">
          <v-img :src="dancing"></v-img>
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn
                class="button_leave"
                variant="outlined"
                color="white"
                @click="canchat = !canchat"
              >Leave Comment</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </section>
    <section id="chat-box" v-if="canchat">
      <chat-layout />
    </section>
  </v-container>
</template>

<style scoped>
.button_leave{
  margin-top: 10px;
}
.container {
  height: 100vh; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}
</style>
