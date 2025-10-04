<script setup lang="ts">
import { ref } from "vue";
const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
<template>
    <div>
        <v-select
          :items="items"
          label="Select Item"
          hide-details
        ></v-select>
    </div>
  </template>

  