<script setup>

import {ref} from "vue";
// import RealTimeChat from "@/components/RealTimeChat.vue";
import axios from "axios";
import Pusher from "pusher-js";

const comment = ref("")
const name = ref("")
const commented = ref(false)
let comments;


// function fillComment(){
//   commented.value = true
//   printed.value = name.value + " commented : " + comment.value
// }

const pusher = new Pusher('9a3d43bc8c2567c1818f', {
  cluster: 'us2',
  encrypted: true
});

const channel = pusher.subscribe('comment-channel');

channel.bind('new-comment', data => {
  console.log(data)
});

axios.get('/api/comments').then(response => {
  comments = response.data.items ? response.data.items : []
})

function sendComment() {
  let commenti = {
    name: name.value,
    comm: comment.value
  }

  axios.post('/api/comment', commenti).then(response => {
    name.value = ''
    comment.value = ''
    console.log(response)
  })

  commented.value = true
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
                v-model="name"
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
          <h2 class="note">Note : You can only initiate one comment and can reply to any comments</h2>
          <div class="comment_section">
<!--            <real-time-chat :commented="commented"/>-->
            <v-card
              v-show="commented"
              class="comment_text"
              variant="tonal"
              color="white"
              height="400"
            >
              <v-card-text>
                {{comments}}
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

.comment {
  border: 1px solid chartreuse; /* Border properties (width, style, and color) */
  padding: 10px;
  margin: 10px;
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
