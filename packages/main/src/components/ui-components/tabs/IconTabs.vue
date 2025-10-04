<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon, PhoneIcon, UserIcon } from "vue-tabler-icons";
const tab3 = ref(null);
</script>
<template>
    <v-tabs v-model="tab3" color="primary">
        <v-tab value="111">
            <PhoneIcon stroke-width="1.5" width="22" />
        </v-tab>
        <v-tab value="222">
            <HeartIcon stroke-width="1.5" width="22" />
        </v-tab>
        <v-tab value="444">
            <UserIcon stroke-width="1.5" width="22" />
        </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab3">
            <v-window-item value="111">
                Item One
            </v-window-item>
            <v-window-item value="222">
               Item two
            </v-window-item>
            <v-window-item value="444">
                Item three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
