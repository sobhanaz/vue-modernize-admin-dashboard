<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import SelectDefualt from '@/components/forms/form-elements/select/SelectDefault.vue';
import SelectReadonly from '@/components/forms/form-elements/select/SelectReadOnly.vue';
import SelectMultiple from '@/components/forms/form-elements/select/SelectMultiple.vue';
import SelectChip from '@/components/forms/form-elements/select/SelectChip.vue';
import SelectDensity from '@/components/forms/form-elements/select/SelectDensity.vue';
// theme breadcrumb
const page = ref({ title: 'Select' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Select',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Select">
                <v-row>
                    <!--Select Basic-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Basic">
                            <SelectDefualt />
                        </UiChildCard>
                    </v-col>
                    <!--Select Readonly-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Read only">
                            <SelectReadonly/>
                        </UiChildCard>
                    </v-col>
                    <!--Select Multiple-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Multiple">
                            <SelectMultiple/>
                        </UiChildCard>
                    </v-col>
                    <!--Select Chip-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Chips">
                            <SelectChip/>
                        </UiChildCard>
                    </v-col>
                    <!--Select Density-->
                    <v-col cols="12" sm="12">
                        <UiChildCard title="Density">
                            <SelectDensity/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

