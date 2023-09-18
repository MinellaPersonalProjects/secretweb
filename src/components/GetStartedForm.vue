<script setup>
import {useAppStore} from "@/store/app";

const store = useAppStore()

const emits = defineEmits(['dialog'])

function makeSubmission(){
  store.createSecretName()
  emits('dialog',false)
}
</script>

<template>
  <v-card>
    <v-card-text>
      <v-form @submit.prevent="makeSubmission">
        <v-row>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              v-model="store.username"
              label="UserName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              v-model="store.animal"
              label="Favourite Animal"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
