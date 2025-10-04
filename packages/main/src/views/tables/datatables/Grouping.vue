<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import {BasicDatatables} from '@/_mockApis/components/datatable/dataTable';
const page = ref({ title: 'Data Tables Grouping' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Data Tables Grouping',
        disabled: true,
        href: '#'
    }
]);

/*Header Data*/
const sortBy : any = ref([
    { key: 'name', order: 'asc' }
])
const groupBy : any = ref([
    { key: 'status', order: 'asc' }
])


</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Grouping">
                <v-data-table items-per-page="5"  :items="BasicDatatables" item-value="name"
                    :group-by="groupBy" :sort-by="sortBy"
                    class="border rounded-md">
                </v-data-table>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

