<script setup>

import {ref} from "vue";
// import RealTimeChat from "@/components/RealTimeChat.vue";
import axios from "axios";
import Pusher from "pusher-js";
import {useAppStore} from "@/store/app";
import CommentLayout from "./CommentLayout.vue";

const comment = ref("")
const name = ref("")
const commented = ref(false)
let comments;
const app_key = process.env.PUSHER_NUMBER

const store = useAppStore()

// function fillComment(){
//   commented.value = true
//   printed.value = name.value + " commented : " + comment.value
// }

const pusher = new Pusher(`${app_key}`, {
  cluster: 'us2',
  encrypted: true
});

const channel = pusher.subscribe('comment-channel');

channel.bind('new-comment', data => {
  console.log(data)
});

// dev test
// axios.get('http://localhost:9000/comments').then(response => {
//   comments = response.data.items ? response.data.items : []
// })

axios.get('https://secretweb-mrgb.onrender.com/comments').then(response => {
  comments = response.data.items ? response.data.items : []
})

function sendComment() {
  let commenti = {
    name: store.secret_name,
    comment: comment.value
  }

  // dev test
  // axios.post('http://localhost:9000/comment', commenti).then(response => {
  //   store.clearName()
  //   comment.value = ''
  //   console.log(response)
  // })
  
  axios.post('https://secretweb-mrgb.onrender.com/comment', commenti).then(response => {
    store.clearName()
    comment.value = ''
    console.log(response)
  })

  commented.value = true
}

const animal_avatars = [
        'fluent:animal-cat-16-regular',
        'cil:animal',
        'fluent:animal-dog-24-regular',
        'healthicons:animal-cow-outline',
        'healthicons:animal-tick-outline',
        'fluent:animal-rabbit-16-regular',
        'fluent:animal-turtle-20-regular',
        'healthicons:animal-spider-outline',
        'healthicons:animal-chicken-outline',
        'emojione-v1:fish',
        'emojione-v1:elephant',
        'emojione-v1:ewe',
        'emojione-v1:ant',
        'emojione-v1:boar',
        'emojione-v1:chipmunk'
    ]

function getRandomAnimal(){
      const randomIndex = Math.floor(Math.random() * animal_avatars.length);
      return animal_avatars[randomIndex];
}


</script>
<!--TODO can also add fun 2d dance to the side -->
<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="6">
          <div>
            <h2 class="head2">Leave Comment</h2>
            <div>
<!--              <input type="text" v-model="comment">-->
              <v-text-field
                v-model="store.secret_name"
                label="name"
                variant="outlined"
                class="my-custom-text-color"
                density="comfortable"
              ></v-text-field>
              <v-textarea
                v-model="comment"
                variant="outlined"
                class="my-custom-text-color"
                density="comfortable"
                placeholder="Enter Comment Here"
              ></v-textarea>
            </div>
            <v-btn
              class="submitbtn"
              variant="outlined"
              color="#7FFF00FF"
              @click="sendComment"
            >Submit</v-btn>
          </div>
          <!-- <h2 class="note">Note : You can leave a comment </h2> -->
          <div class="comment_section">
<!--            <real-time-chat :commented="commented"/>-->
            <v-card
              v-show="commented"
              class="comment_text"
              variant="outlined"
              color="black"
              height="500"
              style="overflow-y: auto;" 
            >
              <v-card-text v-for="item in comments" :key="item">
                  <comment-layout 
                    :avatar="getRandomAnimal()"
                    :name="item.name"
                    :comment="item.comment"
                  />
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.head2{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
  color: white;
}

.note{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 300;
  font-size: small;
  line-height: 1.25;
  color: white;
  padding-top: 10px;
  margin-top: 10px;
}

.submitbtn{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
}

.comment_text{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
}

.comment_section{
  padding-top: 10px;
  margin-top: 10px;
}

.my-custom-text-color {
  color: chartreuse !important; /* Specify the desired text color here */
  margin-top: 10px;
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
}

input[type="text"] {
  color: white; /* Change to the color you desire */
}

input[type="text"]:focus {
  outline: none; /* Remove the default blue outline */
}
</style>
