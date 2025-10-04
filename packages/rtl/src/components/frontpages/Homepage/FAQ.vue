<script setup lang="ts">
import { FAQData } from '@/_mockApis/front-pages/PagesData';
</script>
<template>
    <div class="space-p-96 lp-faq">
        <v-container class="max-width-800 py-0">
            <div class="text-center mb-8">
                <h3 class="display-2 font-weight-bold textPrimary">Frequently asked questions</h3>
            </div>
            <v-expansion-panels elevation="0" class="mt-14">
                <v-expansion-panel elevation="10" class="mb-4" v-for="item in FAQData" :key="item.title">
                    <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="text-18 font-weight-normal py-4">{{
                        item.title
                    }}</v-expansion-panel-title>

                    <v-expansion-panel-text class="text-subtitle-1 text-10 text-medium-emphasis">
                        {{ item.subtitle }}
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <div class="d-flex justify-center mt-14">
                <div class="pa-2 border border-dashed rounded-md font-weight-medium text-14 opacity-70 textPrimary d-flex align-center">
                    Still have a question? <v-btn variant="text" href="https://discord.com/invite/XujgB8ww4n" target="_blank" class="text-underline text-hover-primary link-btn underline-btn mx-1">Ask on discord</v-btn> or 
                    <v-btn variant="text" href="https://adminmart.com/support/" target="_blank" class="text-hover-primary link-btn mx-1 underline-btn">submit a ticket</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>
