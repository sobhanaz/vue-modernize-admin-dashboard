<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { darkTableData } from '@/_mockApis/components/table/basicTables';
// theme breadcrumb
const page = ref({ title: 'Dark Table' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Dark Table',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Dark -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Dark Table">
                <v-card class="border" elevation="0">
                    <v-table theme="dark" class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">Users</th>
                                <th class="text-h6">Project Name</th>
                                <th class="text-h6">Team</th>
                                <th class="text-h6">Status</th>
                                <th class="text-h6">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in darkTableData" :key="item.name" class="month-item">
                                <td>
                                    <div class="d-flex align-center">
                                        <v-avatar size="40">
                                            <img :src="item.avatar" alt="avatar" height="40" />
                                        </v-avatar>
                                        <div class="ml-4">
                                            <h6 class="text-h6">{{ item.name }}</h6>
                                            <div class="text-subtitle-1 text-medium-emphasis">{{ item.post }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-h6 font-weight-medium text-medium-emphasis">{{ item.pname }}</h6>
                                </td>
                                <td>
                                    <div class="d-flex align-center">
                                        <div class="ml-2 d-flex flex-row-reverse">
                                            <v-avatar v-for="team in item.teams" :key="team.id" size="35"
                                                :class="'ml-n2 avtar-border bg-' + team.color">
                                                {{ team.text }}
                                            </v-avatar>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <v-chip rounded="md" class="font-weight-bold" :color="item.statuscolor" size="small"
                                        label>{{
                                            item.status
                                        }}</v-chip>
                                </td>
                                <td>
                                    <h6 class="text-h6">{{ item.budget }}</h6>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
