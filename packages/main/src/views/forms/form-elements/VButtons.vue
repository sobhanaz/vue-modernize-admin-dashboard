<script setup lang="ts">
import { ref } from 'vue';
/*import tabler icons*/
import { TrashIcon, SendIcon, BellIcon } from 'vue-tabler-icons';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { AccessPointIcon } from 'vue-tabler-icons';
import BaseButtons from '@/components/forms/form-elements/button/BaseButtons.vue';
import ColorsButtons from '@/components/forms/form-elements/button/ColorsButtons.vue';
import OutlinedButtons from '@/components/forms/form-elements/button/OutlinedButtons.vue';
import IconsButtons from '@/components/forms/form-elements/button/IconsButtons.vue';
import SizeButtons from '@/components/forms/form-elements/button/SizeButtons.vue';
import TextButtons from '@/components/forms/form-elements/button/TextButtons.vue';
import OutlineIconColor from '@/components/forms/form-elements/button/OutlineIconColor.vue';
import OutlineSizes from '@/components/forms/form-elements/button/OutlineSizes.vue';
import OutlinedIconSize from '@/components/forms/form-elements/button/OutlinedIconSize.vue';
import IconColor from '@/components/forms/form-elements/button/IconColor.vue';
import IconColorSizes from '@/components/forms/form-elements/button/IconColorSizes.vue';
import Default from '@/components/forms/form-elements/button/buttonGroup/Default.vue';
import Text from '@/components/forms/form-elements/button/buttonGroup/Text.vue';
import Plain from '@/components/forms/form-elements/button/buttonGroup/Plain.vue';
import Outlined from '@/components/forms/form-elements/button/buttonGroup/Outlined.vue';

// theme breadcrumb
const page = ref({ title: 'Buttons' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Buttons',
        disabled: true,
        href: '#'
    }
]);

// buttons color data
const btnsColor = ref(['primary', 'secondary', 'success', 'error', 'warning']);

</script>

// ===============================|| Ui Buttons ||=============================== //
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Buttons">
                <v-row>
                    <!-- Base Buttons -->
                    <v-col cols="12" sm="12">
                        <UiChildCard title="Base">
                            <BaseButtons />
                        </UiChildCard>
                    </v-col>
                    <!-- Color Buttons -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Colors">
                            <ColorsButtons />
                        </UiChildCard>
                    </v-col>
                    <!-- Sizes -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Size">
                            <SizeButtons />
                        </UiChildCard>
                    </v-col>
                    <!-- Outlined Buttons -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Outlined">
                            <OutlinedButtons />
                        </UiChildCard>
                    </v-col>
                    <!-- With Icons -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Outlined Icon">
                            <IconsButtons />
                        </UiChildCard>
                    </v-col>

                    <!-- OutlineSizes -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Outline Size">
                            <OutlineSizes />
                        </UiChildCard>
                    </v-col>
                    <!-- Text Buttons -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Text Color">
                            <TextButtons />
                        </UiChildCard>
                    </v-col>
                    <!-- Icon Color -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Icon Color">
                            <IconColor />
                        </UiChildCard>
                    </v-col>
                    <!-- Outllined Icon Button -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Outlined Icon Color">
                            <OutlineIconColor />
                        </UiChildCard>
                    </v-col>
                    <!-- Icon Color Sizes -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Icon Size">
                            <IconColorSizes />
                        </UiChildCard>
                    </v-col>
                    <!-- Outllined Icon Button -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Outlined Icon Size">
                            <OutlinedIconSize />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>

        <v-col cols="12">
            <UiParentCard title="Button Group">
                <v-row>
                    <!-- Default -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Default">
                            <Default />
                        </UiChildCard>
                    </v-col>
                    <!-- Text -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Text">
                            <Text />
                        </UiChildCard>
                    </v-col>
                    <!-- Plain -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Plain">
                            <Plain />
                        </UiChildCard>
                    </v-col>
                     <!-- Outlined -->
                     <v-col cols="12" lg="6">
                        <UiChildCard title="Outlined">
                            <Outlined />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
