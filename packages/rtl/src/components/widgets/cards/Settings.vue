<script setup lang="ts">
import { ref } from 'vue';
/*import tabler icons*/
import { VolumeIcon,MessageIcon } from 'vue-tabler-icons';
const slider = ref(50);
const model = ref(false);
</script>
<template>
    <v-card elevation="10"  rounded="md">
        <v-card-item>
            <v-card-title class="text-h5">Settings</v-card-title>
            <div class="d-flex mt-4">
                <v-avatar class="rounded-md bg-primary" size="48">
                    <VolumeIcon size="22" />
                </v-avatar>
                <div class="pl-4 w-100">
                    <div class="d-flex align-center justify-space-between">
                        <h6 class="text-h6">Sound</h6>
                        <h5 class="text-subtitle-1 text-medium-emphasis">45%</h5>
                    </div>    
                    <v-slider v-model="slider" hide-details class="ml-0" color="primary"></v-slider>
                </div>
            </div>
            <v-divider class="mt-4"></v-divider>
            <div class="d-flex mt-4">
                <v-avatar class="rounded-md bg-secondary" size="48">
                    <MessageIcon size="22" class="text-surface"/>
                </v-avatar>
                <div class="pl-4 w-100 d-flex align-center">
                    <div class="">
                        <h6 class="text-h6 mb-1">Chat</h6>
                        <h5 class="text-subtitle-1 text-medium-emphasis">Turn on chat during call</h5>
                    </div>  
                    <div class="ml-auto">  
                        <v-switch v-model="model"  hide-details color="primary" inset ></v-switch>
                    </div>    
                </div>
            </div>
            <v-divider class="mt-4"></v-divider>
            <div class="d-flex justify-end mt-4">
                <v-btn flat color="error" variant="outlined">Cancel</v-btn>
                <v-btn flat color="primary" class="ml-4">save</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
