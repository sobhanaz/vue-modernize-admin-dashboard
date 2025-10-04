<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent class="dialog-mw">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" class="w-100" v-bind="props" flat> Open Dialog </v-btn>
      </template>
      <v-card class="pa-6">
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" variant="text" @click="dialog = false" flat>
            Disagree
          </v-btn>
          <v-btn color="green darken-1" variant="text" @click="dialog = false" flat>
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
