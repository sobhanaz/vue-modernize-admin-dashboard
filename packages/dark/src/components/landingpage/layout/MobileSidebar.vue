<script setup lang="ts">
import { ref } from 'vue';
import { AppsIcon, CalendarIcon, MailIcon, MessagesIcon } from 'vue-tabler-icons';
import QuickLinks from '@/components/landingpage/layout/PageMenuQuicklinks.vue';
import AppsLink from '@/components/landingpage/layout/PageMegamenu.vue';
import { demosMegamenu, appsMegamenu, FrontPageMenu } from '@/_mockApis/landingpage/lpPage';
import { useCustomizerStore } from '@/stores/customizer';
import Logo from '@/layouts/full/logo/Logo.vue';
import RtlLogo from '@/layouts/full/logo/RtlLogo.vue';
const customizer = useCustomizerStore();
</script>

<template>
    <div class="pt-6 lp-mobile-sidebar">
        <div class="ml-6 mb-3">
            <div v-if="customizer.setRTLLayout" rtl>
                <RtlLogo />
            </div>
            <div v-else>
                <Logo />
            </div>
        </div>
        <v-list class="right-sidebar py-0 px-2">
            <v-list-group value="Apps">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" rounded="md">
                        <h5 class="text-subtitle-1">Demos</h5>
                    </v-list-item>
                </template>
                <v-list-item class="px-6 pb-6 lp_wrapper">
                    <div class="mt-4">
                        <h5 class="text-h5">Different Demos</h5>
                        <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
                        <v-row class="mt-3">
                            <v-col cols="12" lg="12" v-for="demo in demosMegamenu" :key="demo.img">
                                <div class="text-center position-relative">
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
                                </div>
                                <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                            </v-col>
                        </v-row>
                        <div class="mt-8">
                            <h5 class="text-h5">Different Apps</h5>
                            <v-row class="mt-3">
                                <v-col cols="12" v-for="demo in appsMegamenu" :key="demo.img">
                                    <div class="text-center position-relative">
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
                                    </div>
                                    <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-list-item>
            </v-list-group>
        </v-list>

        <v-list class="right-sidebar py-0 px-2">
            <v-list-group value="Apps">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" rounded="md">
                        <h5 class="text-subtitle-1">Frontend Pages</h5>
                    </v-list-item>
                </template>
                <v-list-item class="px-6 pb-6 lp_wrapper">
                    <div class="mt-4">
                        <h5 class="text-h5">Different Front Pages</h5>
                        <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
                        <v-row class="mt-3">
                            <v-col cols="12" lg="12" v-for="demo in FrontPageMenu" :key="demo.img">
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
                        </v-row>
                    </div>
                </v-list-item>
            </v-list-group>
        </v-list>

        <v-list class="right-sidebar py-0 px-2">
            <v-list-group value="Apps">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" rounded="md">
                        <h5 class="text-subtitle-1">Pages</h5>
                    </v-list-item>
                </template>
                <v-list-item class="pl-6 pb-6">
                    <div class="mt-4">
                        <AppsLink />
                    </div>
                    <div class="mt-8">
                        <h5 class="text-h5 mb-3">Quick Links</h5>
                        <QuickLinks />
                    </div>
                </v-list-item>
            </v-list-group>
        </v-list>
        <v-list class="py-0 px-2">
            <v-list-item rounded="md">
                <v-btn
                    variant="text"
                    class="custom-hover-primary px-0 text-left"
                    flat
                    href="https://demos.adminmart.com/premium/vue/modernize-vuejs/docs/index.html"
                    target="_blank"
                >
                    <h5 class="text-subtitle-1">Documentation</h5>
                </v-btn>
            </v-list-item>
            <v-list-item class="mt-2" rounded="md">
                <v-btn class="custom-hover-primary bg-primary" block flat href="/auth/login" target="_blank">Login</v-btn>
            </v-list-item>
        </v-list>
    </div>
</template>
