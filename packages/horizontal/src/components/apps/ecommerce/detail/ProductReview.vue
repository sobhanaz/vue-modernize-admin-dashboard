<script setup lang="ts">
import { ref } from 'vue';
const rating = ref(4);

</script>

<template>
    <v-row>
        <v-col lg="4" class="align-streach">
            <v-card variant="outlined" elevation="0" class="text-center h-100 d-flex align-center justify-center">
                <div class="pa-7 py-9">
                    <h6 class="text-subtitle-1 font-weight-regular">Average Rating</h6>
                    <h1 class="text-primary text-h1 my-4">4/5</h1>
                    <div class="text-medium-emphasis align-center justify-center d-flex mb-3 gap-2">
                        <v-rating color="warning" half-increments v-model="rating" density="compact"> </v-rating>
                    </div>
                </div>
            </v-card>
        </v-col>
        <v-col lg="4" class="align-streach justify-center">
            <v-card variant="outlined" elevation="0" class="text-center justify-center h-100">
                <div class="pa-7">
                    <div class="d-flex align-center gap-4 mb-5">
                        <div class="text-no-wrap text-subtitle-2">1 Stars</div>
                        <v-progress-linear model-value="15" color="primary" bg-color="lightprimary"
 rounded="md"></v-progress-linear>
                        <span class="text-subtitle-1">(125)</span>
                    </div>
                    <div class="d-flex align-center gap-4 my-5">
                        <div class="text-no-wrap text-subtitle-2">2 Stars</div>
                        <v-progress-linear model-value="15" color="primary"bg-color="lightprimary"
 rounded="md"></v-progress-linear>
                        <span class="text-subtitle-1">(125)</span>
                    </div>
                    <div class="d-flex align-center gap-4 my-5">
                        <div class="text-no-wrap text-subtitle-2">3 Stars</div>
                        <v-progress-linear model-value="35" color="primary"bg-color="lightprimary"
 rounded="md"></v-progress-linear>
                        <span class="text-subtitle-1">(160)</span>
                    </div>
                    <div class="d-flex align-center gap-4 my-5">
                        <div class="text-no-wrap text-subtitle-2">4 Stars</div>
                        <v-progress-linear model-value="12" color="primary"bg-color="lightprimary"
 rounded="md"></v-progress-linear>
                        <span class="text-subtitle-1">(105)</span>
                    </div>
                    <div class="d-flex align-center gap-4 mt-5">
                        <div class="text-no-wrap text-subtitle-2">5 Stars</div>
                        <v-progress-linear model-value="55" color="primary"bg-color="lightprimary"
 rounded="md"></v-progress-linear>
                        <span class="text-subtitle-1">(325)</span>
                    </div>
                </div>
            </v-card>
        </v-col>
        <v-col lg="4" class="align-streach">
            <v-card variant="outlined" elevation="0" class="d-flex align-center justify-center h-100">
                <div class="pa-7 py-9">
                    <v-btn variant="outlined" size="large" color="primary"><PencilIcon size="20" class="mr-1" /> Write a Review</v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
