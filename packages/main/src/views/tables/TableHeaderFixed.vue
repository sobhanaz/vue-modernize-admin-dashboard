<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import {tableFixedHeaderData} from '@/_mockApis/components/table/basicTables';
// theme breadcrumb
const page = ref({ title: 'Fixed Header Table' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Fixed Header Table',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Header Fixed -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Header Fixed Table">
                <v-card class="border" elevation="0">
                <v-table class="month-table" fixed-header height="400px">
                    <thead>
                <tr>
                    <th class="text-h6">Customer</th>
                    <th class="text-h6">Status</th>
                    <th class="text-h6">Email Address</th>
                    <th class="text-h6">Teams</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableFixedHeaderData" :key="item.name" class="month-item">
                    <td>
                        <div class="d-flex align-center">
                            <v-avatar size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-h6">{{ item.name }}</h6>
                                <div class="text-subtitle-1 text-medium-emphasis">{{ item.handle }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-chip rounded="lg"  v-if="item.statusoffline" class="font-weight-bold pl-1 pr-2" :color="item.statuscolor" size="small">
                            <ClockHour4Icon size="15" class="mr-1" />
                            {{ item.status }}
                        </v-chip>

                        <v-chip rounded="lg" v-else class="font-weight-bold pl-1 pr-2" :color="item.statuscolor" size="small">
                            <CircleIcon size="15" class="mr-1" />
                            {{ item.status }}
                        </v-chip>
                    </td>
                    <td>
                        <div class="text-subtitle-1 text-medium-emphasis">{{ item.email }}</div>
                    </td>
                    <td>
                        <div class="d-flex align-center">
                            <div class="d-flex">
                                <v-chip
                                    v-for="team in item.teams"
                                    :key="team.status"
                                    rounded="lg"
                                    :class="'font-weight-bold px-2 mr-2 bg-' + team.statuscolor"
                                    size="small"
                                >
                                    {{ team.status }}
                                </v-chip>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
                </v-table>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
