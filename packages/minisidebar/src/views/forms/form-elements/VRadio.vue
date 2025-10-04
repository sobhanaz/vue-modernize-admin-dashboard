<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { AccessPointIcon } from 'vue-tabler-icons';
import Default from '@/components/forms/form-elements/radio/Default.vue';
import Label from '@/components/forms/form-elements/radio/Label.vue';
import DefaultDirection from '@/components/forms/form-elements/radio/DefaultDirection.vue';
import InlineDirection from '@/components/forms/form-elements/radio/InlineDirection.vue';
import Color from '@/components/forms/form-elements/radio/Color.vue';
import ColorwithLabel from '@/components/forms/form-elements/radio/LabelwithColor.vue';

// theme breadcrumb
const page = ref({ title: 'Radio' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Radio',
        disabled: true,
        href: '#'
    }
]);
</script>

// ===============================|| Ui Radio ||=============================== //
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Radio">
                <v-row>
                    <!-- Default Radio -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Default">
                            <Default/>
                        </UiChildCard>
                    </v-col>
                    <!-- Radio with Label -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Label">
                            <Label/> 
                        </UiChildCard>
                    </v-col>
                    <!-- With Colors -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Colors">
                            <Color/>
                        </UiChildCard>
                    </v-col>
                    <!-- With Colors -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Colors with Label">
                            <ColorwithLabel/>
                        </UiChildCard>
                    </v-col>
                    <!-- Default Direction -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Default Direction">
                            <DefaultDirection/>
                        </UiChildCard>
                    </v-col>
                     <!-- Inline Direction -->
                     <v-col cols="12" lg="6">
                        <UiChildCard title="Inline Direction">
                            <InlineDirection/>
                        </UiChildCard>
                    </v-col>
                    
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
