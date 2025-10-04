<script setup lang="ts">
import { ref, computed } from "vue";
const rules = ref([
  (value: any) => !!value || "Required.",
  (value: string | any[]) => (value && value.length >= 3) || "Min 3 characters",
  (value: any) => (value || "").length <= 20 || "Max 20 characters",
  (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
]);
</script>
<template>
        <div>
            <v-text-field :rules="rules"  label="Enter Email" hide-details="auto"></v-text-field>
        </div>
  </template>
  

  