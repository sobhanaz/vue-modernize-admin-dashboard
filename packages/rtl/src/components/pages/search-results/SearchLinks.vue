<script setup lang="ts">
import { SearchLinkData } from '@/_mockApis/components/pages/searchLinks';
import { RouterLink } from 'vue-router';
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <h5 class="text-h5">Search Result For "Angular Js"</h5>
            <p class="textSecondary text-subtitle-1" >About 14,700 result ( 0.10 seconds)</p>
            <div class="mt-4">
                <div class="border-b py-5" v-for="item in SearchLinkData" :key="item.title">
                    <h6 class="text-h5">{{ item.title }}</h6>
                    <RouterLink class="text-primary text-decoration-none text-subtitle-1" :to="item.url">{{ item.linktitle }}</RouterLink>
                    <p class="text-textSecondary text-subtitle-1" >{{ item.subtitle }}</p>
                </div>
                <div class="mt-6 d-flex justify-start">
                    <v-pagination :length="4"></v-pagination>
                </div>
                
            </div>
        </v-card-item>
    </v-card>
</template>
