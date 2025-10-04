<script setup lang="ts">
import { ref } from 'vue';
import { Packages } from '@/_mockApis/front-pages/PagesData';
import { CircleCheckIcon, CircleXIcon } from 'vue-tabler-icons';
</script>

<template>
    <v-container class="max-width-1218 package" id="pricing">
        <v-row class="d-flex justify-center text-center pb-12">
            <v-col cols="12" md="7">
                <h2 class="display-2 font-weight-bold textPrimary">111,476+ Trusted developers & many tech giants as well</h2>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="3" md="6" v-for="card in Packages" :key="card.caption">
                <v-card elevation="0"  class="rounded-16 pa-sm-7 pa-6 border">
                    <div class="">
                        <div class="d-flex ga-2 align-center">
                            <h4 class="text-20 textPrimary mb-4" v-text="card.caption"></h4>
                            <v-chip v-if="card.tagtext" size="small" class="mt-sm-n4 font-weight-bold" rounded="md" color="primary"
                                >Popular</v-chip
                            >
                        </div>

                        <p class="text-13 opacity-80 font-weight-medium">{{ card.subtext }}</p>
                    </div>

                    <v-divider class="my-8"></v-divider>

                    <div class="d-flex align-center mt-4">
                        <h2 class="display-2 font-weight-bold">${{ card.price }}</h2>
                        <span class="text-medium-emphasis font-weight-medium mt-4 ms-2 text-14">/{{ card.period }}</span>
                    </div>
                    <v-list class="mb-0 pl-0 bg-transparent pt-5">
                        <v-list-item class="pa-0" v-for="desc in card.list" :key="desc.listtitle">
                            <v-list-item-title v-if="desc.status" :class="{'opacity-50': desc.disable}" class="text-body-1 d-flex align-center font-weight-medium ">
                                <CircleXIcon v-if="desc.icon" stroke-width="1.5" size="20" class="mr-2 " />
                                <span v-html="desc.listtitle"></span>
                            </v-list-item-title>
                            <v-list-item-title v-else :class="{'opacity-50': desc.disable}" class="text-body-1 d-flex align-center font-weight-medium">
                                <CircleCheckIcon v-if="desc.icon" stroke-width="1.5" size="20" class="mr-2 text-secondary" />
                                <span v-html="desc.listtitle"></span>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <v-btn color="primary" size="large" class="mt-6 font-weight-medium" :href=card.url target="_blank" flat block>{{ card.buttontext }}</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
