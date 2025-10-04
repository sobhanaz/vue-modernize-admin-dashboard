<script setup lang="ts">
import { ref,computed } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { BasicDatatables } from '@/_mockApis/components/datatable/dataTable';
const page = ref({ title: 'Data Table Pagination' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Data Table Pagination',
        disabled: true,
        href: '#'
    }
]);



/*Header Data*/
const pagination = ref(1);
const itemsPerPage = ref(5);
const headers : any = ref([
    { title: 'Name', align: 'start', key: 'name' },
    { title: 'Project Name', align: 'start', key: 'project' },
    { title: 'Post', align: 'start', key: 'post' },
    { title: 'Status', align: 'start', key: 'status' },
    { title: 'Budget', align: 'end', key: 'budget' },

])

/*page count*/
const pageCount = Math.ceil(BasicDatatables.length / itemsPerPage.value)

</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="External Pagination">
                <v-data-table :items-per-page="itemsPerPage" :headers="headers"  :items="BasicDatatables" v-model:page="pagination"
                    hide-default-footer class="border rounded-md">
                    <template v-slot:bottom>
                        <div class="text-center pt-2 mb-3 px-3">
                            <v-pagination v-model="pagination" :length="pageCount"></v-pagination>
                            <v-text-field :model-value="itemsPerPage" class="pa-2" label="Items per page" type="number"
                                min="-1" max="15" hide-details
                                @update:model-value="itemsPerPage = parseInt($event, 10)"></v-text-field>
                        </div>
                    </template>
                </v-data-table>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

