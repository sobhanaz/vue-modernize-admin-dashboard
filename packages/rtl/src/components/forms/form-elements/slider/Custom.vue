<script setup lang="ts">
import { ref } from 'vue';
const slider1 = ref(50);
const slider2 = ref(70);
const slider3 = ref(80);
const thumb = ref(30);
const tickLabels = ref({
  0: "Figs",
  1: "Lemon",
  2: "Pear",
  3: "Apple",
});
const satisfactionEmojis = ref([
  "😭",
  "😢",
  "☹️",
  "🙁",
  "😐",
  "🙂",
  "😊",
  "😁",
  "😄",
  "😍",
]);

const slider = ref(45);
</script>
<template>
  <div>
    <v-slider step="10" v-model="thumb" :thumb-size="30" color="primary"></v-slider>

    <v-slider v-model="slider1" color="secondary"></v-slider>

    <v-slider v-model="slider2" color="primary" track-color="secondary"></v-slider>

    <v-slider v-model="slider3" color="primary" thumb-color="secondary"></v-slider>

    <v-slider :ticks="tickLabels" :max="3" step="1" color="primary" show-ticks="always" tick-size="4"></v-slider>

    <v-slider v-model="slider" color="primary" thumb-label="always" class="mt-6" hide-details>
      <template v-slot:thumb-label="{ modelValue }">
        {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
      </template>
    </v-slider>
  </div>
</template>