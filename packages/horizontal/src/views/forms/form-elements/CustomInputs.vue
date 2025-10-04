<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import InputError from '@/components/forms/form-elements/custominput/InputError.vue';
import InputLoading from '@/components/forms/form-elements/custominput/InputLoading.vue';
import InputMultipleError from '@/components/forms/form-elements/custominput/InputMultipleError.vue';
import InputPrepandAppend from '@/components/forms/form-elements/custominput/InputAppendPrepend.vue';
import InputHideDetails from '@/components/forms/form-elements/custominput/InputHideDetails.vue';
import InputRules from '@/components/forms/form-elements/custominput/InputRules.vue';
// theme breadcrumb
const page = ref({ title: 'Custom Inputs' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Custom Inputs',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Custom Inputs">
                <v-row>
                    <!-- Input error-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Error">
                            <InputError />
                        </UiChildCard>
                    </v-col>
                    <!-- Multiple Input error-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Multiple Error">
                            <InputMultipleError />
                        </UiChildCard>
                    </v-col>
                    <!-- Input loading-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Loading">
                            <InputLoading />
                        </UiChildCard>
                    </v-col>
                    <!-- Input Append and prepend-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Append and Prepend">
                            <InputPrepandAppend />
                        </UiChildCard>
                    </v-col>
                     <!-- Input Hide Details-->
                     <v-col cols="12" sm="6">
                        <UiChildCard title="Hide Details">
                            <InputHideDetails />
                        </UiChildCard>
                    </v-col>
                     <!-- Input Rules-->
                     <v-col cols="12" sm="6">
                        <UiChildCard title="Rules">
                            <InputRules />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

