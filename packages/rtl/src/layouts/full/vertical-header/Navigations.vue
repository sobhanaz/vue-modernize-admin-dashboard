<script setup lang="ts">
import { ref } from 'vue';
import QuickLinks from './QuickLinks.vue';
import AppsLink from './AppsLink.vue';
import { HelpIcon, ChevronDownIcon } from 'vue-tabler-icons';
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- mega menu DD -->
    <!-- ---------------------------------------------- -->
    <v-menu open-on-hover :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down" rounded="sm" variant="text" color="primary" v-bind="props">
                Apps <ChevronDownIcon size="16" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet width="900" height="382" elevation="10" rounded="md" class="pa-4 pb-0">
            <div>
                <v-row>
                    <v-col cols="12" lg="8" class="d-flex py-0">
                        <div class="pa-4 pb-0 pr-0">
                            <AppsLink />
                            <v-divider class="mt-6"></v-divider>
                            <div class="pa-5 pl-0">
                                <div class="d-flex align-center justify-space-between">
                                    <router-link to="/" class="text-decoration-none d-flex align-center">
                                        <HelpIcon size="20" stroke-width="1.5" class="text-hover-primary" />
                                        <h6 class="text-subtitle-1 font-weight-bold text-hover-primary ml-2">Frequently Asked Questions</h6>
                                    </router-link>
                                    <v-btn color="primary" variant="flat">Check</v-btn>
                                </div>
                            </div>
                        </div>

                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12" lg="4" class="py-0">
                        <div class="pa-4">
                            <h5 class="text-h5">Quick Links</h5>
                            <QuickLinks />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-sheet>
    </v-menu>
    <router-link to="/apps/chats" class="text-decoration-none">
        <v-btn variant="text" color="primary">Chat </v-btn>
    </router-link>
    <router-link to="/apps/calendar" class="text-decoration-none">
        <v-btn variant="text" color="primary">Calendar </v-btn>
    </router-link>
    <router-link to="/apps/notes" class="text-decoration-none">
        <v-btn variant="text" color="primary">Notes </v-btn>
    </router-link>
</template>
