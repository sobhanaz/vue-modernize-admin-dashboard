<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

import Basic from '@/components/ui-components/alert/Basic.vue';
import Filled from '@/components/ui-components/alert/Filled.vue';
import Description from '@/components/ui-components/alert/Description.vue';
import Action from '@/components/ui-components/alert/Action.vue';
import Icons from '@/components/ui-components/alert/Icons.vue';
import Outlined from '@/components/ui-components/alert/Outlined.vue';
import Closable from '@/components/ui-components/alert/Closable.vue';


// theme breadcrumb
const page = ref({ title: 'Alert' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Alert',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Alert">
                <v-row>
                    <!-- Basic -->
                    <v-col cols="12">
                        <UiChildCard title="Basic">
                            <Basic/>
                        </UiChildCard>
                    </v-col>
                    <!-- Filled -->
                    <v-col cols="12">
                        <UiChildCard title="Filled">
                            <Filled/>
                        </UiChildCard>
                    </v-col>
                    <!-- Outlined -->
                    <v-col cols="12">
                        <UiChildCard title="Outlined">
                            <Outlined/>
                        </UiChildCard>
                    </v-col>
                    
                    <!-- Description -->
                    <v-col cols="12">
                        <UiChildCard title="Description">
                            <Description/>
                        </UiChildCard>
                    </v-col>
                    <!-- With Action -->
                    <v-col cols="12">
                        <UiChildCard title="Action">
                            <Action/>
                        </UiChildCard>
                    </v-col>
                    <!-- With Icons -->
                    <v-col cols="12">
                        <UiChildCard title="With Icons">
                            <Icons/>
                        </UiChildCard>
                    </v-col>
                    
                    <!-- Closable -->
                    <v-col cols="12">
                        <UiChildCard title="Closable">
                            <Closable/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
