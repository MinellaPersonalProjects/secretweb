<script setup>
import {Icon} from "@iconify/vue";

defineProps({
    avatar: String,
    name: String,
    comment: String
})
</script>
<template>
    <v-card
        class="mx-auto rounded-lg"
        max-width="100%"
        :title="name"
      >
        <template v-slot:prepend>
          <v-avatar >
            <Icon :icon="avatar" style="font-size: 24px;" />
          </v-avatar>
        </template>
        <v-card-text class="text-size">{{ comment }}</v-card-text>
      </v-card>
</template>
<style lang="scss" scoped>
.text-size{
    font-size: 18px;
}

</style>