<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-dialog transition="dialog-bottom-transition" class="dialog-mw">
      <template v-slot:activator="{ props }">
        <v-btn color="success" class="w-100" v-bind="props" flat>Open Transition Dialog</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="primary" class="px-4">Opening from the bottom</v-toolbar>
          <v-card-item>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-item>
          <v-card-actions class="justify-end">
            <v-btn variant="flat" @click="isActive.value = false" flat>Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
