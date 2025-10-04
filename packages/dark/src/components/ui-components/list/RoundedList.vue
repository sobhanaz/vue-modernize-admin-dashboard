<script setup lang="ts">
import { shallowRef } from 'vue';
import {AppsIcon} from 'vue-tabler-icons';
const props = defineProps(['icon']);
const component = props.icon;
// List 1,3 Data
const list1 = shallowRef([
    {
        name: 'Sample Page',
        icon: AppsIcon,
        id: 1,
        link: '/'
    },
    {
        name: 'Elements',
        icon: AppsIcon,
        id: 2,
        link: ''
    },
    {
        name: 'Page Layouts',
        icon: AppsIcon,
        id: 3,
        link: ''
    }
]);
</script>
<template>
    <v-list>
        <v-list-item class="mb-1" v-for="(list, i) in list1" :value="list" rounded="xl" :key="i" color="primary">
            <template v-slot:prepend>
                <component :is="list.icon" size="20" stroke-width="1.5" class="mr-2" />
            </template>
            <v-list-item-title v-text="list.name"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>
