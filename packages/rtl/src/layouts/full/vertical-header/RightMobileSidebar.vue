<script setup lang="ts">
import { ref } from 'vue';
import { AppsIcon, CalendarIcon, MailIcon, MessagesIcon } from 'vue-tabler-icons';
import AppsLink from './AppsLink.vue';
import QuickLinks from './QuickLinks.vue';

const open = ref(['Apps']);
</script>

<template>
    <div class="pt-6">
        <h5 class="text-h5 mb-4 px-5">Navigation</h5>
        <v-list v-model:opened="open" class="right-sidebar">
            <v-list-group value="Apps">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <template v-slot:prepend>
                            <AppsIcon width="21" stroke-width="1.5" />
                        </template>
                        <h5 class="text-subtitle-1 ml-2">Apps</h5>
                    </v-list-item>
                </template>
                <v-list-item class="pl-6 pb-6">
                    <div>
                        <AppsLink />
                    </div>
                </v-list-item>
            </v-list-group>
            <v-list-item>
                <template v-slot:prepend>
                    <MessagesIcon width="21" stroke-width="1.5" />
                </template>
                <h5 class="text-subtitle-1 ml-2">Chats</h5>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <CalendarIcon width="21" stroke-width="1.5" />
                </template>
                <h5 class="text-subtitle-1 ml-2">Calendar</h5>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <MailIcon width="21" stroke-width="1.5" />
                </template>
                <h5 class="text-subtitle-1 ml-2">Mail</h5>
            </v-list-item>
        </v-list>
        <div class="px-5">
            <h5 class="text-h5 my-4">Quick Links</h5>
            <QuickLinks />
        </div>
    </div>
</template>

<style scoped>
.right-sidebar .v-list-group__items .v-list-item {
    padding-inline-start: 26px !important;
}
</style>
