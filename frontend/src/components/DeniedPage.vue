<script setup>

</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="auto">
          <h1 class="granted">Access Denied</h1>
          <!-- TODO add page melting animation/laughing sounds
                when denied and return to a different home page where you
                have to guess where to click to get into site -->
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.granted{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
  color: #f50238;
  border: 1px solid #ff0000; /* Border properties (width, style, and color) */
  padding: 10px;
  margin: 10px;
}
</style>
