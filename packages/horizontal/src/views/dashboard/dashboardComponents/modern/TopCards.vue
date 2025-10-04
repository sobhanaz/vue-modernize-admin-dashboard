<script setup lang="ts">
import { topCardsData } from '@/_mockApis/components/dashboard/modernData';
</script>
<template>
    <v-row>
        <v-col cols="12" lg="2" md="4" sm="4" v-for="card in topCardsData" :key="card.title">
            <div
                :class="'text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6  bg-' + card.bgcolor"
            >
                <div :class="'bg-' + card.bgcolor">
                    <img :src="card.img" alt="icon" />
                    <div :class="'text-subtitle-1 text-capitalize font-weight-bold mt-3 text-' + card.textcolor" v-text="card.title"></div>
                    <h4 :class="'text-h4 mt-1 text-' + card.textcolor" v-text="card.number"></h4>
                </div>
            </div>
        </v-col>
    </v-row>
</template>
