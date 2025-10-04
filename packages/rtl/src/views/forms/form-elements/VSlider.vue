<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

 import Default from '@/components/forms/form-elements/slider/Default.vue';
 import Disabled from '@/components/forms/form-elements/slider/Disabled.vue';
 import Volume from '@/components/forms/form-elements/slider/Volume.vue';
 import TickSize from '@/components/forms/form-elements/slider/TickSize.vue';
 import Steps from '@/components/forms/form-elements/slider/Steps.vue';
 import Ticks from '@/components/forms/form-elements/slider/Ticks.vue';
 import Vertical from '@/components/forms/form-elements/slider/Vertical.vue';
 import Custom from '@/components/forms/form-elements/slider/Custom.vue';

// theme breadcrumb
const page = ref({ title: 'Slider' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Slider',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Slider">
                <v-row>
                    <!-- Default Slider -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Default">
                            <Default/>
                        </UiChildCard>
                    </v-col>
                     <!-- Volume -->
                     <v-col cols="12" lg="4">
                        <UiChildCard title="Icon">
                            <Volume/>
                        </UiChildCard>
                    </v-col>
                    <!-- Disabled -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Disabled">
                             <Disabled/>
                        </UiChildCard>
                    </v-col>
                    <!-- Steps -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Steps">
                            <Steps/>
                        </UiChildCard>
                    </v-col>
                    <!-- Ticks -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Ticks">
                            <Ticks/>
                        </UiChildCard>
                    </v-col>
                    <!-- Tick Size-->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Tick Size">
                            <TickSize/>
                        </UiChildCard>
                    </v-col>
                    <!-- Custom-->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Custom">
                            <Custom/>
                        </UiChildCard>
                    </v-col>
                    <!-- Vertical Slider -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Vertical">
                            <Vertical/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
