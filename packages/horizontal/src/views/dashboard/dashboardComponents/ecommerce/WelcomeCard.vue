<script setup lang="ts">
import { ArrowUpRightIcon, type ArrowRightIcon } from 'vue-tabler-icons';

</script>
<template>
    <v-card elevation="0" rounded="md" class="bg-lightprimary border-0">
        <v-card-item class="pt-3 pb-0">
            <v-row>
                <v-col cols="12" sm="6" class="pt-sm-10 pt-5">
                    <div class="d-flex align-center">
                        <v-avatar size="40"><img src="@/assets/images/profile/user-1.jpg" height="40"
                                alt="icon" /></v-avatar>
                        <h5 class="text-h5 ml-4">Welcome back Mathew Anderson!</h5>
                    </div>
                    <div class="mt-8">
                        <div class="d-flex">
                            <div>
                                <div class="d-flex">
                                    <h2 class="text-h2 textPrimary">$2,340 </h2>
                                    <div class="mt-1 ml-1">
                                        <ArrowUpRightIcon stroke-width="1.5" size="22" class="text-success" />
                                    </div>
                                </div>
                                <div class="text-subtitle-1 textPrimary mt-1">Today’s Sales</div>
                            </div>
                            <v-divider vertical class="mx-5"></v-divider>
                            <div>
                                <div class="d-flex">
                                    <h2 class="text-h2 textPrimary">35%</h2>
                                    <div class="mt-1 ml-1">
                                        <ArrowUpRightIcon stroke-width="1.5" size="22" class="text-success" />
                                    </div>
                                </div>
                                <div class="text-subtitle-1 textPrimary mt-1">Performance</div>
                            </div>
                        </div>
                    </div>

                </v-col>
                <v-col cols="12" sm="6" class="text-sm-right">
                    <div class="mb-n6 me-n5">
                        <img src="@/assets/images/backgrounds/welcome-bg2.png" class="rtlImg pt-8" alt="image" height="220" />
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
