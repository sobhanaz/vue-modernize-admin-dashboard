<script setup lang="ts">
import { shallowRef } from 'vue';
import { FolderIcon,BriefcaseIcon,BeachIcon } from 'vue-tabler-icons';
const props = defineProps(['icon']);
const folders = shallowRef([
    {
        subtitle: 'Jan 9, 2024',
        title: 'Photos',
        icon:FolderIcon,
    },
    {
        subtitle: 'Jan 17, 2024',
        title: 'Works',
        icon:BriefcaseIcon
    },
    {
        subtitle: 'Jan 18, 2024',
        title: 'Vacation',
        icon:BeachIcon
    }
]);
</script>
<template>
    <v-list lines="two">
        <v-card variant="outlined">
        <v-list-item v-for="folder in folders" :key="folder.title" :subtitle="folder.subtitle">
            <template v-slot:prepend>
                <v-avatar color="grey400">
                    <component :is="folder.icon" size="20" stroke-width="1.5"  />
                </v-avatar>
            </template>

            <template v-slot:title>
                <h5 class="text-subtitle-1">{{ folder.title }}</h5>
            </template>
            <template v-slot:subtitle>
                <span class="text-subtitle-2">{{ folder.subtitle }}</span>
            </template>
        </v-list-item>
    </v-card>
    </v-list>
</template>
