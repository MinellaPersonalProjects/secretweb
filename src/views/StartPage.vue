<script setup>
import GetStartedForm from "@/components/GetStartedForm.vue";

import {ref} from "vue";

const dialog = ref(false)

function setDialog(value){
  dialog.value = value
}

</script>

<template>
  <v-container fluid class="fill-height backy">
    <v-responsive class="align-center text-center fill-height">
<!--      <v-img height="300" src="@/assets/logo.svg" />-->

      <div class="text-body-2 font-weight-light mb-n1" style="color: white">Welcome to</div>

      <h1 class="text-h2 font-weight-bold" style="color: white">Donuts</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            color="white"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            min-width="228"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started

            <v-dialog
              v-model="dialog"
              activator="parent"
              width="40%"
            >
              <get-started-form @dialog="setDialog"/>
            </v-dialog>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="/entrance"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            color="white"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
<style>
.backy{
  background-image: url('/src/assets/pinkdonut.jpg');
  background-size: 150%; /* Maintain the original image size */
  background-position: center center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image from repeating */
  background-color: #C7B0B9FF;
}
</style>

