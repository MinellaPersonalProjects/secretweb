<script setup>
// import axios from 'axios';
import Pusher from 'pusher-js';

const c = defineProps(['commented'])
let comments;

const pusher = new Pusher('9a3d43bc8c2567c1818f', {
  cluster: 'us2',
  encrypted: true
});

const channel = pusher.subscribe('comment-channel');

channel.bind('new-comment', data => {
  comments.push(data)
});

// axios.get('https://localhost:9000/comments').then(response => {
//     comments = response.data.items ? response.data.items : []
//   })

</script>

<template>
  <v-card
    v-show="c.commented"
    class="comment_text"
    variant="tonal"
    color="white"
    height="400"
  >
    <v-card-text>
      {{comments}}
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
