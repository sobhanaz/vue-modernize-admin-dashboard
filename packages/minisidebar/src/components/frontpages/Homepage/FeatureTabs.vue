<script setup lang="ts">
import { ref } from 'vue';
import { CreditCardIcon, Hierarchy2Icon, LayoutSidebarIcon, UserCircleIcon } from 'vue-tabler-icons';
import { QA1, QA2, QA3, QA4 } from '@/_mockApis/front-pages/PagesData';
const tab = ref(null);
const panel = ref([0]);
</script>
<template>
    <div class="border-t mt-12">
        <div class="pa-0 custom-shadow">
            <v-container class="max-width-1218 pa-0">
                <v-row>
                    <v-col cols="12" class="pb-0">
                        <v-tabs v-model="tab" grow align-tabs="center" class="feature-tabs" color="primary">
                            <v-tab value="1" class="text-h5 font-weight-semibold py-7 border-e textPrimary"
                                ><UserCircleIcon size="24" class="me-2" />Team Scheduling</v-tab
                            >
                            <v-tab value="2" class="text-h5 font-weight-semibold py-7 border-e textPrimary"
                                ><CreditCardIcon size="24" class="me-2" />Payments</v-tab
                            >
                            <v-tab value="3" class="text-h5 font-weight-semibold py-7 border-e textPrimary"
                                ><LayoutSidebarIcon size="24" class="me-2" />Embedding</v-tab
                            >
                            <v-tab value="4" class="text-h5 font-weight-semibold py-7 textPrimary"
                                ><Hierarchy2Icon size="24" class="me-2" />Workflows</v-tab
                            >
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    <v-container class="max-width-1218 pt-sm-16 pt-10" id="solution">
        <v-row class="flex align-center">
            <v-col cols="12" lg="6" md="12">
                <img src="@/assets/images/front-pages/background/feature-bg.jpg" alt="image" class="w-100" />
            </v-col>
            <v-col cols="12" lg="6" md="12">
                <v-tabs-window v-model="tab">
                    <v-window-item value="1">
                        <div class="ps-sm-10">
                            <h2 class="display-2 mb-6 font-weight-bold">Defend your focus</h2>
                            <v-expansion-panels elevation="0" v-model="panel" class="feature-tabs-expansion">
                                <v-expansion-panel elevation="0" v-for="item in QA1" :key="item.question">
                                    <v-expansion-panel-title
                                        class="text-17 font-weight-semibold textPrimary"
                                        collapse-icon="mdi-minus"
                                        expand-icon="mdi-plus"
                                        >{{ item.question }}</v-expansion-panel-title
                                    >

                                    <v-expansion-panel-text class="text-16 opacity-70 pa-0">
                                        {{ item.answer }}
                                    </v-expansion-panel-text>
                                    <v-divider></v-divider>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <v-btn color="primary" class="h-43 px-5 mt-6" flat href="" target="_blank">Learn More</v-btn>
                        </div>
                    </v-window-item>
                    <v-window-item value="2">
                        <div class="ps-sm-10">
                            <h2 class="display-2 mb-6 font-weight-bold">Defend your focus</h2>
                            <v-expansion-panels elevation="0" v-model="panel" class="feature-tabs-expansion">
                                <v-expansion-panel elevation="0" v-for="item in QA2" :key="item.question">
                                    <v-expansion-panel-title
                                        class="text-17 font-weight-semibold textPrimary"
                                        collapse-icon="mdi-minus"
                                        expand-icon="mdi-plus"
                                        >{{ item.question }}</v-expansion-panel-title
                                    >

                                    <v-expansion-panel-text class="text-16 opacity-70 pa-0">
                                        {{ item.answer }}
                                    </v-expansion-panel-text>
                                    <v-divider></v-divider>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <v-btn color="primary" class="h-43 px-5 mt-6" flat href="" target="_blank">Learn More</v-btn>
                        </div>
                    </v-window-item>
                    <v-window-item value="3">
                        <div class="ps-sm-10">
                            <h2 class="display-2 mb-6 font-weight-bold">Defend your focus</h2>
                            <v-expansion-panels elevation="0" v-model="panel" class="feature-tabs-expansion">
                                <v-expansion-panel elevation="0" v-for="item in QA3" :key="item.question">
                                    <v-expansion-panel-title
                                        class="text-17 font-weight-semibold textPrimary"
                                        collapse-icon="mdi-minus"
                                        expand-icon="mdi-plus"
                                        >{{ item.question }}</v-expansion-panel-title
                                    >

                                    <v-expansion-panel-text class="text-16 opacity-70 pa-0">
                                        {{ item.answer }}
                                    </v-expansion-panel-text>
                                    <v-divider></v-divider>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <v-btn color="primary" class="h-43 px-5 mt-6" flat href="" target="_blank">Learn More</v-btn>
                        </div>
                    </v-window-item>
                    <v-window-item value="4">
                        <div class="ps-sm-10">
                            <h2 class="display-2 mb-6 font-weight-bold">Defend your focus</h2>
                            <v-expansion-panels elevation="0" v-model="panel" class="feature-tabs-expansion">
                                <v-expansion-panel elevation="0" v-for="item in QA4" :key="item.question">
                                    <v-expansion-panel-title
                                        class="text-17 font-weight-semibold textPrimary"
                                        collapse-icon="mdi-minus"
                                        expand-icon="mdi-plus"
                                        >{{ item.question }}</v-expansion-panel-title
                                    >

                                    <v-expansion-panel-text class="text-16 opacity-70 pa-0">
                                        {{ item.answer }}
                                    </v-expansion-panel-text>
                                    <v-divider></v-divider>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <v-btn color="primary" class="h-43 px-5 mt-6" flat href="" target="_blank">Learn More</v-btn>
                        </div>
                    </v-window-item>
                </v-tabs-window>
            </v-col>
        </v-row>
    </v-container>
</template>
