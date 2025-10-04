<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { AccessPointIcon, MailIcon } from 'vue-tabler-icons';
import ComboBox from '@/components/forms/form-elements/autocomplete/ComboBox.vue';
import WithCaption from '@/components/forms/form-elements/autocomplete/WithCaption.vue';
import MultipleOptions from '@/components/forms/form-elements/autocomplete/MultipleOptions.vue';

// theme breadcrumb
const page = ref({ title: 'Autocomplete' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Autocomplete',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Autocomplete">
                <v-row>
                    <!-- Combo Box -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Combo Box">
                            <ComboBox />
                        </UiChildCard>
                    </v-col>
                    <!-- With Caption -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="With Caption">
                            <WithCaption />
                        </UiChildCard>
                    </v-col>
                    <!-- Combo with Multiple Options -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Combo with Multiple Options">
                            <MultipleOptions />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
