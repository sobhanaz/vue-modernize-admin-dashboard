<script lang="ts" setup>
import { ref } from 'vue';
const skill1 = ref(55);
const skill2 = ref(20);
</script>
<template>
    <v-card elevation="10" class="bg-primary">
        <v-card-item>
            <v-card-title class="text-h5">Best selling products</v-card-title>
            <div class="text-subtitle-1 mt-1">Overview 2024</div>
            <div class="d-flex justify-center pt-sm-5 pt-5 mt-n2">
                <img src="@/assets/images/backgrounds/piggy.png" alt="image" width="300" />
            </div>
        </v-card-item>
        <div class="ma-2 mt-0 pb-2 mt-n16">
            <v-card elevation="10" rounded="md">
                <v-card-item class="py-sm-7 py-5">
                    <div>
                        <div class="mb-3 d-flex justify-space-between align-center">
                            <div>
                                <h5 class="text-h6">MaterialPro</h5>
                                <h6 class="text-subtitle-1 textSecondary mt-1">$23,568</h6>
                            </div>
                            <v-chip rounded="sm" color="primary" class="text-subtitle-2 font-weight-semibold px-4" size="small">55%</v-chip>
                        </div>
                        <v-progress-linear
                            bg-color="lightprimary"
                            height="4"
                            class="mb-4"
                            color="primary"
                            rounded
                            v-model="skill1"
                        ></v-progress-linear>
                    </div>
                    <div>
                        <div class="mb-3 d-flex justify-space-between align-center">
                            <div>
                                <h5 class="text-h6">Flexy Admin</h5>
                                <h6 class="text-subtitle-1 textSecondary mt-1">$23,568</h6>
                            </div>
                            <v-chip rounded="sm" color="secondary" class="text-subtitle-2 font-weight-semibold px-4" size="small"
                                >20%</v-chip
                            >
                        </div>
                        <v-progress-linear v-model="skill2" color="secondary" bg-color="lightsecondary" rounded> </v-progress-linear>
                    </div>
                </v-card-item>
            </v-card>
        </div>
    </v-card>
</template>
