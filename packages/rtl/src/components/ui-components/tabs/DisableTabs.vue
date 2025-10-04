<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon, PhoneIcon, UserIcon } from "vue-tabler-icons";
const tab4 = ref(null);
</script>
<template>
    <v-tabs v-model="tab4" color="primary">
        <v-tab value="1111"> <PhoneIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item One </v-tab>
        <v-tab value="2222" disabled> <HeartIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item Two </v-tab>
        <v-tab value="4444"> <UserIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item Three </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab4">
            <v-window-item value="1111">
              item one
            </v-window-item>
            <v-window-item value="2222">
               item two
            </v-window-item>
            <v-window-item value="4444">
               item three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
