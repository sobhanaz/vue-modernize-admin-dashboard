<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import AppBaseCard from '@/components/shared/AppBaseCard.vue';
// component
import NotesListing from '@/components/apps/notes/NotesListing.vue';
import NotesContent from '@/components/apps/notes/NotesContent.vue';
// theme breadcrumb
const page = ref({ title: 'Note app' });

const breadcrumbs = ref([
    {
        text: 'Add todo list',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

    <v-card elevation="10">
        <AppBaseCard>
            <template v-slot:leftpart> <NotesListing /></template>
            <template v-slot:rightpart><NotesContent /> </template>

            <template v-slot:mobileLeftContent><NotesListing /> </template>
        </AppBaseCard>
    </v-card>
</template>

<style scoped lang="scss">
@media (max-width: 1279px) {
    .v-card {
        position: unset;
    }
}
</style>