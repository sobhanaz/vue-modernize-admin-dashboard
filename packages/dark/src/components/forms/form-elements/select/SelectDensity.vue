<script setup lang="ts">
import { ref } from "vue";
const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
<template>
        <div>
      <v-select
        :items="items"
        label="Compact"
        density="compact"
      ></v-select>
  
      <v-select
        :items="items"
        label="Comfortable"
        density="comfortable"
      ></v-select>
  
      <v-select
        :items="items"
        label="Default"
        hide-details
      ></v-select>
    </div>
  </template>
  

  