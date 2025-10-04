<script setup lang="ts">
import { listFeature } from '@/_mockApis/landingpage/lpPage';
</script>
<template>
    <div class="py-sm-12 py-10">
        <v-container class="">
            <v-row class="justify-center" >
                <v-col cols="12" sm="6">
                    <p class="text-body-1 text-primary text-center font-weight-medium">ALMOST COVERED EVERYTHING</p>
                    <h2 class="sectionTitle text-center font-weight-bold">Other Amazing Features & Flexibility Provided</h2>
                </v-col>
            </v-row>
            <v-row class="mt-10">
                <v-col cols="12" md="3" sm="4" class="pl-sm-3 pt-sm-6 pr-sm-2"  v-for="list in listFeature" :key="list.title">
                    <div class="text-center">
                        <component :is="list.icon" stroke-width="1.5" class="text-primary" size="40" />
                        <h5 class="text-h5 mt-6">{{list.title}}</h5>
                        <h6 class="text-body-1 mt-3 mb-6 text-13">{{list.subtitle}}</h6>
                    </div>    
                </v-col>
            </v-row>
        </v-container>
    </div>        
</template>
<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}
</style>