<script setup lang="ts">
import { userCards } from '@/_mockApis/components/widget/card';
</script>
<template>
    <v-row>
        <v-col cols="12" md="3" sm="6" v-for="card in userCards" :key="card.title">
            <v-card elevation="10"  rounded="md">
                <v-card-item>
                    <v-avatar size="80" rounded="xl">    
                        <img :src="card.avatar" :alt="card.avatar" width="80"/>
                    </v-avatar>
                    <div class="mt-6">
                        <h5 class="text-h6 mb-2" v-text="card.title"></h5>
                        <div class="d-flex align-center justify-space-between">
                            <div class="ml-2 d-flex flex-row-reverse">
                                <v-avatar size="28" class="ml-n2 avtar-border" v-for="user in card.userGroup" :key="user.icon">
                                    <img :src="user.icon" alt="avatar" height="28"/>
                                </v-avatar>
                            </div>
                            <h6 class="text-subtitle-1 text-medium-emphasis">{{card.subtitle}}</h6>
                        </div>    
                    </div>
                    <div class="mt-6">
                        <v-btn class="bg-lightprimary text-primary" block flat>Add friend</v-btn>
                        <v-btn class="mt-3 bg-lightsecondary textSecondary" block flat>Remove</v-btn>
                    </div>    
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>
