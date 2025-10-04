<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { PlayerPlayFilledIcon } from 'vue-tabler-icons';
import icon1 from '@/assets/images/front-pages/technology/Vuejs.svg';
import icon2 from '@/assets/images/front-pages/technology/Vuetify.svg';
import icon3 from '@/assets/images/front-pages/technology/Vite.svg';
import icon4 from '@/assets/images/front-pages/technology/Typescript.svg';
import icon5 from '@/assets/images/front-pages/technology/Pinia.svg';
import icon6 from '@/assets/images/front-pages/technology/Apexchart.svg';

const technology = ref([
    {
        img: icon1,
        name: 'Vue.js'
    },
    {
        img: icon2,
        name: 'Vuetify'
    },
    {
        img: icon3,
        name: 'Vite'
    },
    {
        img: icon4,
        name: 'Typescript'
    },
    {
        img: icon5,
        name: 'Pinia'
    },
    {
        img: icon6,
        name: 'ApexChart'
    }
]);

const dialog = ref(false);
</script>
<template>
    <div class="pt-6 overflow-hidden bg-lightprimary">
        <v-container class="max-content pb-0">
            <v-row class="d-flex justify-center">
                <v-col cols="12" lg="8" md="8" class="text-center">
                    <h1 class="bannerTitle pt-5 font-weight-bold textPrimary">
                        Most powerful & <span class="text-primary">Developer friendly</span> dashboard
                    </h1>
                    <div class="d-sm-flex align-center text-center justify-center pt-5 gap-4">
                        <div class="d-flex flex-row-reverse justify-sm-start justify-center ml-0">
                            <v-avatar class="ml-n2 avtar-border" size="40">
                                <img src="@/assets/images/profile/user-3.jpg" height="40" alt="usericon" />
                            </v-avatar>
                            <v-avatar class="ml-n2 avtar-border" size="40">
                                <img src="@/assets/images/profile/user-2.jpg" height="40" alt="usericon" />
                            </v-avatar>
                            <v-avatar class="ml-n2 avtar-border" size="40">
                                <img src="@/assets/images/profile/user-1.jpg" height="40" alt="usericon" />
                            </v-avatar>
                        </div>
                        <div class="d-sm-flex opacity-70">
                            <h6 class="text-17 font-weight-medium mt-sm-0 mt-2">52,589+</h6>
                            <h6 class="text-17 font-weight-medium ml-2">developers & agencies using our templates</h6>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex position-relative">
                <v-col cols="12" lg="3" md="12" class="d-lg-block d-none">
                    <img
                        src="@/assets/images/front-pages/background/banner-left-widget.jpg"
                        alt="banner-left-image"
                        class="rounded-16 custom-shadow animted-img d-lg-block d-none"
                    />
                </v-col>
                <v-col cols="12" lg="6" md="12">
                    <div class="d-flex justify-center ga-5">
                        <v-btn color="primary" class="h-43 px-5 transform-none" flat href="/auth/login" target="_blank">Log in</v-btn>
                        <div class="d-flex ga-3">
                            <RouterLink
                                to=""
                                @click="dialog = true"
                                class="text-15 d-flex align-center ga-3 font-weight-medium text-decoration-none text-hover-primary"
                            >
                                <span
                                    class="round-40 border-md border-primary text-primary d-flex align-center justify-center rounded-circle w-40"
                                >
                                    <PlayerPlayFilledIcon size="16" />
                                </span>
                                See how it works
                            </RouterLink>
                        </div>
                    </div>

                    <div class="d-flex ga-sm-6 ga-3 pt-9 pb-sm-9 justify-center align-center technology">
                        <div v-for="(item, i) in technology" :key="i">
                            <div class="d-flex justify-center align-center round-54 rounded-16 bg-surface custom-shadow">
                                <img :src="item.img" alt="technology" height="30" />
                            </div>
                            <v-tooltip activator="parent" location="bottom">{{ item.name }}</v-tooltip>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" md="12" class="position-relative d-lg-block d-none">
                    <img
                        src="@/assets/images/front-pages/background/banner-right-widget.jpg"
                        alt="banner-right-image"
                        class="rounded-16 custom-shadow animted-img-2 d-lg-block d-none"
                    />
                </v-col>
                <v-col cols="12" class="pb-0">
                    <img
                        src="@/assets/images/front-pages/background/banner-bottom.png"
                        alt="banner-bottom-image"
                        class="rounded-16 w-100"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>

    <!---Modal Video--->
    <v-dialog v-model="dialog" max-width="800">
        <v-card>

            <XIcon size="30" class="position-absolute right-0  rounded-circle text-white pa-1 z-1 cursor-pointer" @click="dialog = false"/>

            <div class="lh-0">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/ejqFyft90zQ"
                    title="How to Get Started with our VueJs Admin Template? | Vue.Js Dashboard Template Installation Guide"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </v-card>
    </v-dialog>
</template>
