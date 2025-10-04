<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
// icons
import { AccessPointIcon } from 'vue-tabler-icons';
import BasicCheckboxes from '@/components/forms/form-elements/checkbox/BasicCheckboxes.vue';
import LabelCheckboxes from '@/components/forms/form-elements/checkbox/LabelCheckboxes.vue';
import ColorCheckboxes from '@/components/forms/form-elements/checkbox/ColorCheckboxes.vue';
import Custom from '@/components/forms/form-elements/checkbox/CustomCheckbox.vue';
// theme breadcrumb
const page = ref({ title: 'Checkboxes' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Checkboxes',
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
            <UiParentCard title="Checkbox">
                <v-row>
                    <!-- Custom checkboxes -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Custom">
                            <Custom/>
                        </UiChildCard>
                    </v-col>
                    <!-- With Colors -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Colors">
                            <ColorCheckboxes/>
                        </UiChildCard>
                    </v-col>
                    <!-- Basic checkboxes -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Default">
                            <BasicCheckboxes/>
                        </UiChildCard>
                    </v-col>
                    <!-- With label -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="States">
                            <LabelCheckboxes/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
