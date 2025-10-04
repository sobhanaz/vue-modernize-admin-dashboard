<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon, PhoneIcon, UserIcon } from "vue-tabler-icons";
const tab = ref(null);
</script>

<template>
    <v-card elevation="0">
        <v-tabs v-model="tab" bg-color="primary" centered stacked>
            <v-tab value="1">
                <PhoneIcon stroke-width="1.5" width="20" />
                Recents
            </v-tab>
            <v-tab value="2">
                <HeartIcon stroke-width="1.5" width="20" />
                Favorites
            </v-tab>
            <v-tab value="3">
                <UserIcon stroke-width="1.5" width="20" />
                Nearby
            </v-tab>
        </v-tabs>
        <v-card-text class="bg-grey100 rounded-md mt-4">
            <v-window v-model="tab">
                <v-window-item value="1">
                    Item One
                </v-window-item>
                <v-window-item value="2">
                    Item two
                </v-window-item>
                <v-window-item value="3">
                    Item three
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
