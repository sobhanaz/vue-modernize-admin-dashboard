<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ourLeadersBreakpoints, ourLeadersSettings } from '@/_mockApis/front-pages/CuroselData';
import { OurLeaders } from '@/_mockApis/front-pages/PagesData';
</script>
<template>
    <v-container class="max-width-1218 py-sm-16 py-10" id="team">
        <div class="pt-10">
            <div class="d-md-flex d-block">
                <div>
                    <h2 class="display-2 font-weight-bold">Our leadership</h2>
                    <p class="text-16 font-medium opacity-70 mt-4">
                        Our robust analytics offer rich insights into the <br />
                        information buyers want, informing where teams
                    </p>
                </div>
            </div>
            <div class="leader-slider pt-8">
                <carousel :settings="ourLeadersSettings" :breakpoints="ourLeadersBreakpoints" >
                    <slide v-for="card in OurLeaders" :key="card.img">
                        <div class="position-relative rounded-16">
                            <img :src="card.img" alt="leader" class="w-100" />
                            <div class="bg-surface position-relative py-4 px-3 text-center custom-shadow2 mt-n12 mx-6 rounded-10">
                                <h5 class="text-h5 textPrimary">{{ card.name }}</h5>
                                <p class="text-subtitle-1 opacity-70 mt-1">{{ card.position }}</p>
                            </div>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation class="navarrow mt-md-n3 d-sm-block d-none">
                            <template #next>
                                <span class="mt-sm-0 mt-16">
                                    <ArrowRightIcon
                                        class="textPrimary op-03 mt-sm-0 mt-7 pa-sm-0 pa-2"
                                        size="24"
                                        stroke-width="1.5"
                                    />
                                </span>
                            </template>
                            <template #prev>
                                <span class="mt-sm-0 mt-16">
                                    <ArrowLeftIcon
                                        class="textPrimary op-03 mt-sm-0 mt-7 pa-sm-0 pa-2"
                                        size="24"
                                        stroke-width="1.5"
                                    />
                                </span>
                            </template>
                        </navigation>

                        <pagination class=" d-sm-none d-flex" />
                    </template>
                </carousel>
            </div>
        </div>
    </v-container>
</template>
