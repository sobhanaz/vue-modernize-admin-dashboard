<script setup lang="ts">
import {musicCard} from '@/_mockApis/components/widget/card';
</script>
<template>
    <v-row class="pt-3">
        <v-col cols="12" md="4" v-for="card in musicCard" :key="card.title">
            <v-card elevation="10"  rounded="md">
                <v-row class="mt-md-0 mt-sm-3 mt-3">
                    <v-col cols="6" sm="6">
                        <v-card-item>
                            <h5 class="text-h5" v-text="card.title"></h5>
                            <div class="text-subtitle-1 text-medium-emphasis mt-1" v-text="card.subheader"></div>
                        </v-card-item>
                        <div class="d-flex align-center justify-center mt-9 pa-4 pt-0">
                            <v-btn size="30" icon variant="flat" class="grey100">
                                <v-avatar size="22">
                                    <PlayerSkipBackIcon size="20" color="grey100" />
                                </v-avatar>
                            </v-btn>
                            <v-btn size="30" icon variant="flat" class="mx-6 text-error">
                                <v-avatar size="22">
                                    <PlayerPlayIcon size="20" class="text-error" />
                                </v-avatar>
                            </v-btn>
                            <v-btn size="30" icon variant="flat" class="grey100">
                                <v-avatar size="22">
                                    <PlayerSkipForwardIcon size="20" />
                                </v-avatar>
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="6" sm="6" class="py-0 pl-0">
                        <v-img :src="card.img" height="100%" cover class="rounded-e-md"></v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
