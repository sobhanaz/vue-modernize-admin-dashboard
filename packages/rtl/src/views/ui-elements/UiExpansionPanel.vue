<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

import Basic from '@/components/ui-components/expansionpanel/Basic.vue';
import DefaultExpand from '@/components/ui-components/expansionpanel/DefaultExpand.vue';
import Inset from '@/components/ui-components/expansionpanel/Inset.vue';
import Popout from '@/components/ui-components/expansionpanel/Popout.vue';
import CustomizedIcon from '@/components/ui-components/expansionpanel/CustomizedIcon.vue';
import Advance from '@/components/ui-components/expansionpanel/Advance.vue';
// theme breadcrumb
const page = ref({ title: 'Accordian' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Accordian',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Accordian">
                <v-row>
                    <!-- Basic -->
                    <v-col cols="12" >
                        <UiChildCard title="Basic">
                            <Basic/>
                        </UiChildCard>
                    </v-col>
                    <!-- Default Expand -->
                    <v-col cols="12" lg="12">
                        <UiChildCard title="Default Expand">
                            <DefaultExpand/>
                        </UiChildCard>
                    </v-col>
                    <!-- Inset -->
                    <v-col cols="12" lg="12">
                        <UiChildCard title="Inset">
                            <Inset/>
                        </UiChildCard>
                    </v-col>
                    <!-- Popout -->
                    <v-col cols="12" lg="12">
                        <UiChildCard title="Popout">
                            <Popout/>
                        </UiChildCard>
                    </v-col>
                    <!-- Advance -->
                    <v-col cols="12" lg="12">
                        <UiChildCard title="Advance">
                            <Advance/>
                        </UiChildCard>
                    </v-col>
                    
                    <!-- Customized Icon -->
                    <v-col cols="12">
                        <UiChildCard title="Customized Icon">
                            <CustomizedIcon/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
