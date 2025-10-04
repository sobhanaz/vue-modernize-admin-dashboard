<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-btn color="secondary" class="w-100" @click="dialog = true" flat> Open Dialog </v-btn>
    <v-dialog v-model="dialog" class="dialog-mw">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" block @click="dialog = false" flat
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
