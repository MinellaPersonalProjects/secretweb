<script setup>

import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

onMounted(() => {
  let chinese = "0110010011";
  const font_size = 14;

  const c = document.getElementById("c");
  const ctx = c.getContext("2d");


//making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

//converting the string into an array of single characters
  chinese = chinese.split("");

  const columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
  const drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
  for(let x = 0; x < columns; x++)
    drops[x] = 1;

  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
      //a random chinese character to print
      var text = chinese[Math.floor(Math.random()*chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }

  //drawing the characters
  setInterval(draw, 33);

  setTimeout(() => {
    router.push('/secret'); // Navigate to ComponentB route
  }, 5000); // 10 seconds in milliseconds
})
</script>

<template>
  <canvas id="c"></canvas>
</template>

<style scoped>
/*basic reset*/
* {margin: 0; padding: 0;}
/*adding a black bg to the body to make things clearer*/
body {background: black;}
canvas {display: block;}
</style>

<!-- Gotten from :
  code : https://jsfiddle.net/8fryjvec/2/
  question : https://stackoverflow.com/questions/66949736/javascript-pulsing-binary-digit-background-effect-best-implementation-method
-->
