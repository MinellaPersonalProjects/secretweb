<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useRouter} from "vue-router";

const percentage = ref(0)
const route = useRouter()

let percent;

function counter(){
  percent = setInterval(() => {
    if (percentage.value < 100) {
      percentage.value++;
    } else {
      // If counter reaches 50 or more, clear the interval
      clearInterval(percent);
      route.push('/chat')
    }
  }, 100);
}

onMounted(() => {
  counter() // Runs every 1 second
})

onUnmounted(() => {
    clearInterval(percent);
  }
)

</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="6">
          <div class="border-box">
            <div class="title">
              <h2 class="title_theme">Accessing the file</h2>
            </div>
            <div class="line-space"></div>
            <div class="content">
              <div class="content_number">
                <h1 class="percent_theme">{{percentage}}%</h1>
              </div>
              <div>
                <v-progress-linear
                  v-model="percentage"
                  color="#7FFF00FF"
                  height="25"
                ></v-progress-linear>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;
}

.title_theme{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
  color: white;
}

.content{
  margin: 10px 10px 30px;
}

.percent_theme{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: x-large;
  line-height: 1.25;
  color: chartreuse;
}

.content_number{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.border-box {
  border: 1px solid chartreuse; /* Border properties (width, style, and color) */
  padding: 10px;
  margin: 10px;
}

.line-space {
  height: 2px;
  background-color: chartreuse;
  margin: 0 -10px;
  padding-left: 0;
  padding-right: 0;
}
</style>
