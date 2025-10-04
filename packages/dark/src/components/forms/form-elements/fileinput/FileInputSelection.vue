<script setup lang="ts">
import { ref } from "vue";
const files = ref([]);
</script>
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- FileInputs Selection Slot -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-file-input
          v-model="files"
          placeholder="Upload your documents"
          label="File input"
          multiple
          variant="outlined"
          hide-details="auto"
          prepend-icon="mdi-paperclip"
        >
          <template v-slot:selection="{ fileNames }">
            <template v-for="fileName in fileNames" :key="fileName">
              <v-chip size="small" label color="primary" class="mr-2">
                {{ fileName }}
              </v-chip>
            </template>
          </template>
        </v-file-input>
      </div>
  </template>
  
 
  