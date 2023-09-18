// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    number_of_tries : 0,
    tries_exceeded : false,
    username : "",
    animal: "",
    secret_name: "",
  }),
  getters: {
    getTries(){
      return this.number_of_tries
    },
    getName(){
      return this.name
    },
    getAnimal(){
      return this.animal
    },
    areTriesExceeded(){
      return this.tries_exceeded
    },
    getSecretName(){
      return this.secret_name
    },
    isUsernameEmpty(){
      return this.username === ""
    }
  },
  actions: {
    addTry() {
      this.number_of_tries+=1
      console.log(this.number_of_tries)
    },
    resetTries(){
      this.number_of_tries = 0
    },
    createSecretName(){

      // Split the username and favoriteAnimal into arrays of characters
      const usernameChars = this.username.split('');
      const animalChars = this.animal.split('');

      // Create a cool name by alternating characters from the username and animal
      let coolName = '';
      for (let i = 0; i < Math.max(usernameChars.length, animalChars.length); i++) {
        if (usernameChars[i]) {
          coolName += usernameChars[i];
        }
        if (animalChars[i]) {
          coolName += animalChars[i];
        }
      }

      this.secret_name = coolName
    }
  }
})
