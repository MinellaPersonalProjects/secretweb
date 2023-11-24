<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAppStore} from "@/store/app";

const password = ref("")
const mypass = 'NKEMISAWESOME'
const route = useRouter()
const store = useAppStore()
const incorrect = ref(false)

function checkPassword () {
  if (password.value === mypass) {
    // Password is correct, navigate to another route
    route.push('/granted');
  } else {
    console.log("Incorrect password");
    store.addTry()
    incorrect.value = true

    if (store.number_of_tries < 3){
      password.value = ""
      incorrect.value = false
    } else {
      route.push('/')
      store.resetTries()
    }
  }
}
</script>

<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="auto">
            <h1 class="text_theme">Enter Password [<input type="password" v-model="password" size="12" @keyup.enter="checkPassword"/>]</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <h2 class="incorrect_theme" v-show="incorrect">Incorrect Password. {{store.number_of_tries}}/3 Tries .</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
input[type="password"] {
  color: chartreuse; /* Change to the color you desire */
}

input[type="password"]:focus {
  outline: none; /* Remove the default blue outline */
}

.text_theme{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
  color: chartreuse;
}

.incorrect_theme{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 400;
  font-size: medium;
  line-height: 1.25;
  color: chartreuse;
}

.container {
  height: 100vh; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}
</style>
