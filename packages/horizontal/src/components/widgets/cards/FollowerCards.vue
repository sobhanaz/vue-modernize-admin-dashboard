<script setup lang="ts">
import {followerCard} from '@/_mockApis/components/widget/card';
</script>
<template>
    <v-row class="pt-3">
        <v-col cols="12" md="4" v-for="card in followerCard" :key="card.title">
            <v-card elevation="10"  rounded="md">
                <v-card-item>
                    <div class="d-flex align-center">
                        <v-avatar size="40" rounded="xl">    
                            <img :src="card.avatar" :alt="card.avatar" width="40"/>
                        </v-avatar>
                        <div class="pl-4 mt-n1">
                            <h5 class="text-h6" v-text="card.title"></h5>
                            <h6 class="text-subtitle-1 text-medium-emphasis d-flex align-center"><MapPinIcon size="18" class="mr-1"/>{{card.location}}</h6>
                        </div>
                        <v-btn class="ml-auto" color="primary" flat>Follow</v-btn>
                    </div>    
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>
