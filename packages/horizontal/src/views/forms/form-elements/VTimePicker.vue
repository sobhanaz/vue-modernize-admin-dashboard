<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

const picker = ref(null);
const start = ref('');
const end = ref('');

// template breadcrumb
const page = ref({ title: 'Time Picker' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Time Picker',
        disabled: true,
        href: '#'
    }
]);
</script>

// ===============================|| Ui Checkbox ||=============================== //
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Time Picker">
                <v-row>
                    <!-- Default -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Default">
                            <v-time-picker class="mx-auto" ></v-time-picker>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Format">
                            <v-time-picker format="24hr" class="mx-auto"></v-time-picker>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Scrollable">
                            <v-time-picker v-model="picker" scrollable class="mx-auto"></v-time-picker>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Use seconds">
                            <v-time-picker use-seconds class="mx-auto"></v-time-picker>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Colors">
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-time-picker color="primary" class="mx-auto"></v-time-picker>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-time-picker color="error" class="mx-auto"></v-time-picker>
                                </v-col>
                            </v-row>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Range">
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-time-picker v-model="start" :max="end" class="mx-auto"></v-time-picker>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-time-picker v-model="end" :min="start"  class="mx-auto"></v-time-picker>
                                </v-col>
                            </v-row>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
