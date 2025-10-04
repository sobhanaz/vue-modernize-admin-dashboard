<script setup lang="ts">
import { ThemeFeature1, ThemeFeature2, ThemeFeature3 } from '@/_mockApis/front-pages/PagesData';
</script>

<template>
    <div class="space-p-96 px-lg-0 px-4" id="features">
        <v-container class="max-content bg-lightprimary rounded-xl space-p-96 overflow-hidden">
            <v-row class="d-flex justify-center text-center">
                <v-col cols="12" lg="5" md="10">
                    <h2 class="display-2 font-weight-bold textPrimary">Enjoy unparalleled features & exceptional flexibility.</h2>
                </v-col>
            </v-row>
            <div class="d-flex ga-6 marquee1-group  pt-sm-16 pt-8">
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature1" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature1" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
            </div>
            <div class="d-flex ga-6 marquee2-group pt-6">
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature2" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature2" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature2" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
            </div>
            <div class="d-flex ga-6 marquee1-group  pt-6">
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature3" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
                <div class="flex-grow-0 flex-shrink-0" v-for="item in ThemeFeature3" :key="item.title">
                    <v-card elevation="1" class="d-flex align-center justify-center py-6 px-16 ga-3 rounded-16">
                        <component :is="item.icon" stroke-width="1.5" class="text-primary" size="24" />
                        <h5 class="text-15 textPrimary font-weight-semibold">{{ item.title }}</h5>
                    </v-card>
                </div>
            </div>
        </v-container>
    </div>
</template>
