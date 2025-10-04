<script setup lang="ts">
import { ref } from 'vue';
import img1 from '@/assets/images/products/s1.jpg';
import img2 from '@/assets/images/products/s2.jpg';
/*import tabler icons*/
import { GiftIcon } from 'vue-tabler-icons';
const gift = [
    {
        title: 'Andrew Grant',
        avatar: img1
    },
    {
        title: 'Leo Pratt',
        avatar: img2
    }
];
</script>
<template>
    <v-row>
        <v-col cols="12" md="6" v-for="card in gift" :key="card.title">
            <v-card elevation="10"  rounded="md">
                <v-card-item>
                    <div class="d-flex align-center justify-space-between">
                        <h5 class="text-h6" v-text="card.title"></h5>
                        <v-btn size="30" icon variant="flat" class="mx-1 textSecondary">
                            <v-avatar size="25">
                                <GiftIcon class="textSecondary" size="20" />
                            </v-avatar>
                        </v-btn>
                    </div>
                    <v-avatar rounded="lg" class="w-100 mt-2 mb-6" size="160" cla>
                        <img :src="card.avatar" :alt="card.avatar" class="w-100"/>
                    </v-avatar>
                    <v-btn  color="primary" block flat>Gift to Friend ($50.00)</v-btn>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>
