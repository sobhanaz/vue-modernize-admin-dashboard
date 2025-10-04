<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
const items = ref([
  {
    title: "Click Me",
  },
  {
    title: "Click Me",
  },
  {
    title: "Click Me",
  },
  {
    title: "Click Me 2",
  },
]);
const select = ref([
  { text: "State 1" },
  { text: "State 2" },
  { text: "State 3" },
  { text: "State 4" },
  { text: "State 5" },
  { text: "State 6" },
  { text: "State 7" },
]);
</script>

<template>
  <div class="text-center">
    <v-btn color="secondary" class=" w-100" @click="dialog = true" flat>
      Open Dialog 1
    </v-btn>
    <v-dialog v-model="dialog" class="dialog-mw">
      <v-card class="pa-6">
        <v-card-title> Dialog 1 </v-card-title>
        <v-card-text>
          <v-btn color="primary" class="" @click="dialog2 = true" flat>
            Open Dialog 2
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" variant="text" @click="dialog = false" flat> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" class="dialog-mw">
      <v-card class="pa-6">
        <v-card-title> Dialog 2 </v-card-title>
        <v-card-text>
          <v-btn color="secondary" @click="dialog3 = !dialog3" flat>
            Open Dialog 3
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" variant="text" @click="dialog2 = false" flat> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" class="dialog-mw">
      <v-card class="pa-6">
        <v-card-title>
          <span>Dialog 3</span>
        </v-card-title>
        <v-card-actions>
          <v-btn color="error" variant="text" @click="dialog3 = false" flat> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
