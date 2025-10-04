<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { userReview } from '@/_mockApis/landingpage/lpPage';

import { ChevronLeftIcon, ChevronRightIcon } from 'vue-tabler-icons';
import { userReviewBreakpoints, userReviewSettings } from '@/_mockApis/front-pages/CuroselData';

// Counter tracking
const currentSlide = ref(0); // Start from the first slide
const totalSlides = userReview.length; // Total number of slides

// Method to update the current slide on manual change
const goToNextSlide = () => {
  if (currentSlide.value < totalSlides - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to the first slide
  }
};

const goToPrevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = totalSlides - 1; // Loop back to the last slide
  }
};
</script>

<template>
    <v-container class="max-width-1218" id="reviews">
        <v-row class="d-flex align-center">
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12" lg="9">
                        <h2 class="display-2 font-weight-bold textPrimary">
                            What our clients<br />
                            think <img src="@/assets/images/logos/logo-icon.svg" height="24" class="mx-2" alt="logo" /> about us?
                        </h2>
                        <p class="text-subtitle-1 opacity-70 lh-28 mt-4">
                            Our users' feedback is a testament to our commitment to quality and user satisfaction. Read what they have to
                            say about their journey with us.
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6">
                <div class="testimonials position-relative border rounded-xl px-md-12 pt-12 pb-0 px-6">
                    <h3 class="text-h3 textPrimary pb-8">Features availability</h3>
                    
                    <!-- Add slider counter above the carousel -->
                    

                    <carousel 
                        :settings="userReviewSettings" 
                        :breakpoints="userReviewBreakpoints" 
                        class="overflow-hidden"
            
                        :current-slide="currentSlide" 
                    >
                        <slide v-for="(card, index) in userReview" :key="card.img">
                            <v-card elevation="0">
                                <div class="text-left">
                                    <div class="d-flex ga-4 align-center rtl-reviews">
                                        <v-avatar size="56">
                                            <img :src="card.img" :alt="card.img" width="56" />
                                        </v-avatar>
                                        <h6 class="text-h6 font-semibold textPrimary">{{ card.title }}</h6>
                                    </div>
                                    <div class="border-b mb-16">
                                        <p class="text-18 mt-6 opacity-70 lh-28 clamped-text mb-6">{{ card.review }}</p>
                                    </div>
                                </div>
                            </v-card>
                        </slide>

                        <template #addons>
                            <navigation class="navarrow">
                                <template #next>
                                    <span @click="goToNextSlide">
                                        <ChevronRightIcon class="textPrimary" size="20" stroke-width="1.5" />
                                    </span>
                                </template>
                                <template #prev>
                                    <span @click="goToPrevSlide">
                                        <ChevronLeftIcon class="textPrimary" size="20" stroke-width="1.5" />
                                    </span>
                                </template>
                            </navigation>
                        </template>
                    </carousel>
                    <div class="slide-counter">
                        {{ currentSlide + 1 }} / {{ totalSlides }}
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
