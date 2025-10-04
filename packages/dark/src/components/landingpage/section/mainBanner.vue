<script setup lang="ts"></script>
<template>
    <div class="py-16 overflow-hidden">
        <v-container>
            <v-row>
                <v-col cols="12" lg="6" md="12" class="d-flex align-center">
                    <div class="mt-8 mt-lg-0">
                        <span class="text-h6 d-flex align-center gap-2" data-aos="fade-up" data-aos-duration="400"
                            ><RocketIcon size="18" class="text-secondary" /> Kick start your project with</span
                        >
                        <h1 class="bannerTitle pt-5 font-weight-bold" data-aos="fade-up" data-aos-duration="500">
                            Most powerful & <span class="text-primary">Developer friendly</span> VueJs dashboard
                        </h1>
                        <p class="pt-8 pb-6 text-h5 font-weight-regular" data-aos="fade-up" data-aos-duration="800">
                            Modernize comes with light & dark color skins, well designed dashboards, applications and pages.
                        </p>
                        <div class="mt-6 d-sm-flex gap-3" data-aos="fade-up" data-aos-duration="1000">
                            <v-btn target="_blank" href="/auth/login" color="primary" size="large" class="m-btn-full btn-custom-lg" flat
                                >Login</v-btn
                            >
                            <v-btn
                                to=""
                                v-scroll-to="'#demos'"
                                color="primary"
                                variant="outlined"
                                class="mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg"
                                size="large"
                                >Live Preview</v-btn
                            >
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="d-none d-lg-block">
                    <div class="bannerSlider bg-lightprimary">
                        <div class="d-flex flex-row">
                            <div class="rounded-md">
                                <div class="animateUp">
                                    <img src="@/assets/images/landingpage/bannerimg1.svg" />
                                </div>
                                <div class="animateUp">
                                    <img src="@/assets/images/landingpage/bannerimg1.svg" />
                                </div>
                            </div>
                            <div class="rounded-md">
                                <div class="animateDown">
                                    <img src="@/assets/images/landingpage/bannerimg2.svg" />
                                </div>
                                <div class="animateDown">
                                    <img src="@/assets/images/landingpage/bannerimg2.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}
</style>
