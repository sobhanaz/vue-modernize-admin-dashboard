<script setup lang="ts">
import { ref } from 'vue';
import QuickLinks from '@/components/landingpage/layout/PageMenuQuicklinks.vue';
import AppsLink from '@/components/landingpage/layout/PageMegamenu.vue';
import { demosMegamenu, appsMegamenu, FrontPageMenu } from '@/_mockApis/landingpage/lpPage';
import { HelpIcon, ChevronDownIcon } from 'vue-tabler-icons';
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- mega menu DD -->
    <!-- ---------------------------------------------- -->
    <v-menu open-on-hover :close-on-content-click="false" class="lp_wrapper position-relative">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down nav-links custom-hover-primary" rounded="sm" variant="text" color="primary" v-bind="props"
                >Demos<ChevronDownIcon size="18" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet max-width="100%" width="1150" height="100%" elevation="10" rounded="md" class="pa-8 mx-auto">
            <h5 class="text-h5">Different Demos</h5>
            <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
            <div class="v-row mt-3">
                <v-col v-for="demo in demosMegamenu" :key="demo.img">
                    <v-sheet class="text-center position-relative">
                        <div class="overflow-hidden rounded-md">
                            <div class="megamenu">
                                <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                <v-btn class="bg-primary text-white position-absolute mx-sm-12 pr-3" flat target="_blank" :href="demo.link"
                                    >Live Preview</v-btn
                                >
                            </div>
                        </div>
                    </v-sheet>
                    <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                </v-col>
            </div>
            <div class="mt-8">
                <h5 class="text-h5">Different Apps</h5>
                <div class="v-row mt-3">
                    <v-col v-for="demo in appsMegamenu" :key="demo.img">
                        <v-sheet class="text-center position-relative">
                            <div class="overflow-hidden rounded-md">
                                <div class="megamenu">
                                    <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                    <v-btn
                                        class="bg-primary text-white position-absolute mx-sm-12 pr-3"
                                        flat
                                        target="_blank"
                                        :href="demo.link"
                                        >Live Preview</v-btn
                                    >
                                </div>
                            </div>
                        </v-sheet>
                        <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                    </v-col>
                </div>
            </div>
        </v-sheet>
    </v-menu>

    <!-- Frontend Pages -->
    <v-menu open-on-hover :close-on-content-click="false" class="lp_wrapper position-relative">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down nav-links custom-hover-primary" rounded="sm" variant="text" color="primary" v-bind="props"
                >Frontend Pages<ChevronDownIcon size="18" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet max-width="100%" width="1150" height="100%" elevation="10" rounded="md" class="pa-8 mx-auto">
            <h5 class="text-h5">Different Front Pages</h5>
            <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
            <div class="v-row mt-3">
                <v-col v-for="demo in FrontPageMenu.slice(0, 5)" :key="demo.img" >
                    <v-sheet class="text-center position-relative">
                        <div class="overflow-hidden rounded-md">
                            <div class="megamenu">
                                <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                <v-btn class="bg-primary text-white position-absolute mx-sm-12 pr-3" flat target="_blank" :href="demo.link"
                                    >Live Preview</v-btn
                                >
                            </div>
                        </div>
                    </v-sheet>
                    <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                </v-col>
            </div>
        </v-sheet>
    </v-menu>

    <v-menu open-on-hover :close-on-content-click="false" class="lp_wrapper position-relative">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down custom-hover-primary nav-links" rounded="sm" variant="text" color="primary" v-bind="props"
                >Pages<ChevronDownIcon size="18" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet width="900" height="400" elevation="10" rounded="md" class="pa-4 pb-0 mx-auto">
            <div>
                <v-row>
                    <v-col cols="12" lg="8" class="d-flex py-0">
                        <div class="pa-4 pb-0 pr-0">
                            <AppsLink />
                        </div>
                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12" lg="4" class="py-0">
                        <div class="pa-4">
                            <h5 class="text-h5 mb-4">Quick Links</h5>
                            <QuickLinks />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-sheet>
    </v-menu>
    <v-btn
        variant="text"
        color="primary"
        class="custom-hover-primary nav-links"
        href="https://demos.adminmart.com/premium/vue/modernize-vuejs/docs/index.html"
        target="_blank"
        >Documentation</v-btn
    >
    <v-btn variant="text" color="primary" class="custom-hover-primary nav-links" href="https://adminmart.com/support/" target="_blank"
        >Support</v-btn
    >
    <v-btn class="custom-hover-primary bg-primary ml-2 text-white" flat href="/auth/login" target="_blank"
        ><span class="text-white">Login</span></v-btn
    >
</template>
