<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import NoEditable from '@/components/forms/form-elements/stepper/NoEditable.vue';
import EditableStepper from '@/components/forms/form-elements/stepper/EditableStepper.vue';
import Alternatelabel from '@/components/forms/form-elements/stepper/Alternatelabel.vue';
import LinearSteppers from '@/components/forms/form-elements/stepper/LinearSteppers.vue';
import OptionalSteps from '@/components/forms/form-elements/stepper/OptionalSteps.vue';
import ItemStepper from '@/components/forms/form-elements/stepper/ItemStepper.vue';
import AlternativeErrors from '@/components/forms/form-elements/stepper/AlternativeErrors.vue';

// template breadcrumb
const page = ref({ title: 'Stepper' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Stepper',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Stepper">
                <v-row>
                    <v-col cols="12">
                        <UiChildCard title="Non editable steps  " >
                          <NoEditable/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Editable steps  " >
                          <EditableStepper/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Alternate label" >
                          <Alternatelabel/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Linear steppers" >
                          <LinearSteppers/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Optional steps" >
                          <OptionalSteps/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Alternative label with errors" >
                          <AlternativeErrors/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <UiChildCard title="Items steps" >
                          <ItemStepper/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
