<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import { OurTemplateSettings, OurTemplateBreakpoints } from '@/_mockApis/front-pages/CuroselData';
import demo1 from '@/assets/images/landingpage/demos/demo-main.jpg';
import demo2 from '@/assets/images/landingpage/demos/demo-dark.jpg';
import demo3 from '@/assets/images/landingpage/demos/demo-horizontal.jpg';
import demo4 from '@/assets/images/landingpage/demos/demo-mini.jpg';
import demo5 from '@/assets/images/landingpage/demos/demo-rtl.jpg';
import { templateText } from '@/_mockApis/front-pages/PagesData';
import { RouterLink } from 'vue-router';
const Temp = ref([
    {
        demo: demo1,
        link: 'https://modernize-vuejs.adminmart.com/dashboards/modern'
    },
    {
        demo: demo2,
        link: 'https://modernize-vue3-dark.netlify.app/dashboards/modern'
    },
    {
        demo: demo3,
        link: 'https://modernize-vue3-horizontal.netlify.app/dashboards/modern'
    },
    {
        demo: demo4,
        link: 'https://modernize-vue3-minisidebar.netlify.app/dashboards/modern'
    },
    {
        demo: demo5,
        link: 'https://modernize-vue3-rtl.netlify.app/dashboards/modern'
    }
]);
</script>
<template>
    <div class="space-p-96 px-lg-0 px-4">
        <v-container class="max-content bg-lightprimary rounded-xl pa-0 overflow-hidden">
            <div class="our-template pb-6">
                <v-container class="max-width-1218 pt-sm-16 pt-10 pb-sm-14 pb-8">
                    <v-row class="d-flex justify-center">
                        <v-col cols="12" md="6">
                            <h2 class="display-2 font-weight-bold textPrimary text-center">
                                Discover Powerful Dozens of Purpose-Fit Templates
                            </h2>
                        </v-col>
                    </v-row>
                </v-container>
                <carousel :items-to-show="3.5" :wrap-around="true" :autoplay="5000" :transition="500" :breakpoints="OurTemplateBreakpoints">
                    <slide v-for="item in Temp" :key="item.demo">
                        <a :href="item.link" target="_blank">
                            <img :src="item.demo" alt="template" class="w-100 rounded-md overflow-hidden custom-shadow" />
                        </a>
                    </slide>
                </carousel>
                <v-container class="max-width-1218 py-12">
                    <v-row>
                        <v-col cols="12" md="4" class="text-center px-sm-6" v-for="item in templateText" :key="item.title">
                            <h5 class="text-h5 font-weight-bold textPrimary pb-4">{{ item.title }}</h5>
                            <p class="text-subtitle-1 opacity-70 lh-28">{{ item.subtitle }}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-container>
    </div>
</template>
