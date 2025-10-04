<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import FileAccept from '@/components/forms/form-elements/fileinput/FileInputAccept.vue';
import FileChips from '@/components/forms/form-elements/fileinput/FileInputChips.vue';
import FileCounter from '@/components/forms/form-elements/fileinput/FileInputCounter.vue';
import FileDensity from '@/components/forms/form-elements/fileinput/FileInputDensity.vue';
import FileMultiple from '@/components/forms/form-elements/fileinput/FileInputMultiple.vue';
import FilePrepand from '@/components/forms/form-elements/fileinput/FileInputPrepand.vue';
import FileValidation from '@/components/forms/form-elements/fileinput/FileInputValidation.vue';
import FileSelection from '@/components/forms/form-elements/fileinput/FileInputSelection.vue';
// theme breadcrumb
const page = ref({ title: 'File Inputs' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'File Inputs',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="File Inputs">
                <v-row>
                    <!-- File accept-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Accept">
                            <FileAccept />
                        </UiChildCard>
                    </v-col>
                    <!-- File chips-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Chips">
                            <FileChips />
                        </UiChildCard>
                    </v-col>
                    <!-- File counter-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Counter">
                            <FileCounter />
                        </UiChildCard>
                    </v-col>
                    <!-- File density-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Density">
                            <FileDensity />
                        </UiChildCard>
                    </v-col>
                    <!-- File multiple-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Multiple">
                            <FileMultiple />
                        </UiChildCard>
                    </v-col>
                    <!-- File prepend icon-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Prepend Icon">
                            <FilePrepand/>
                        </UiChildCard>
                    </v-col>
                    <!-- File validation-->
                    <v-col cols="12" sm="6">
                        <UiChildCard title="Validation">
                            <FileValidation/>
                        </UiChildCard>
                    </v-col>
                      <!-- File selection slots-->
                      <v-col cols="12" sm="6">
                        <UiChildCard title="Complex selection slots">
                            <FileSelection/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

