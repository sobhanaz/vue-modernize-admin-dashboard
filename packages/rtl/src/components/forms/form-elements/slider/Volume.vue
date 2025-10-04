
<script setup lang="ts">
import { ref } from 'vue';
// icons
import {Volume2Icon, VolumeIcon } from 'vue-tabler-icons';
const volume = ref(40);
</script>
<template>
    <v-slider v-model="volume" hide-details color="primary" >
        <template v-slot:prepend>
            
                <Volume2Icon stroke-width="1.5" size="20" />
      
        </template>
        <template v-slot:append>
           
                <VolumeIcon stroke-width="1.5" size="20" />
         
        </template>
    </v-slider>
</template>
