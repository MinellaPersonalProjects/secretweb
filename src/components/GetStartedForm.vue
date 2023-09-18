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
          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
            <v-text-field
              v-model="store.username"
              label="UserName"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
            <v-text-field
              v-model="store.animal"
              label="Favourite Animal"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="2" lg="2" xl="2">
            <v-btn type="submit" block class="mt-2" size="large" rounded="lg" variant="tonal" color="green">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
