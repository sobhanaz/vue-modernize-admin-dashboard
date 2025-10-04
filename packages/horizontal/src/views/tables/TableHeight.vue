<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { heightTableData, tableActionData} from '@/_mockApis/components/table/basicTables';
// theme breadcrumb
const page = ref({ title: 'Height Table' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Height Table',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Height -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Height Table">
                <v-card class="border" elevation="0">
                    <v-table class="month-table" height="400px">
                        <thead>
                            <tr>
                                <th class="text-h6">Authors</th>
                                <th class="text-h6">Courses</th>
                                <th class="text-h6">Users</th>
                                <th class="text-h6"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in heightTableData" :key="item.name" class="month-item">
                                <td>
                                    <div class="d-flex align-center">
                                        <v-avatar size="42" rounded="md">
                                            <img :src="item.avatar" alt="avatar" height="42" />
                                        </v-avatar>
                                        <div class="ml-4">
                                            <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                                            <div class="text-subtitle-1 text-medium-emphasis mt-1">{{ item.handle }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-center">
                                        <div class="d-flex">
                                            <v-chip v-for="course in item.courses" :key="course.status" rounded="lg"
                                                class="mr-2" :color="course.statuscolor" size="small">
                                                {{ course.status }}
                                            </v-chip>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-subtitle-1 text-medium-emphasis">{{ item.users }}</div>
                                </td>
                                <td>
                                    <v-btn size="30" icon variant="flat" class="grey100">
                                        <v-avatar size="22">
                                            <DotsIcon size="20" color="grey100" />
                                        </v-avatar>
                                        <v-menu activator="parent">
                                            <v-list>
                                                <v-list-item value="action" v-for="list in tableActionData" :key="list.listtitle"
                                                    hide-details min-height="38">
                                                    <v-list-item-title>
                                                        <v-avatar size="20" class="mr-2">
                                                            <component :is="list.icon" stroke-width="2" size="20" />
                                                        </v-avatar>
                                                        {{ list.listtitle }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
