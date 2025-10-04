<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';


import Basic from '@/components/forms/form-elements/treeview/Basic.vue'
import Activatable from '@/components/forms/form-elements/treeview/Activatable.vue';
import Colors from '@/components/forms/form-elements/treeview/Colors.vue';
import DenseMode from '@/components/forms/form-elements/treeview/DenseMode.vue';
import OpenAll from '@/components/forms/form-elements/treeview/OpenAll.vue';


// template breadcrumb
const page = ref({ title: 'Treeview' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Treeview',
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
            <UiParentCard title="Treeview">
                <v-row>
                    <!-- Default -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Basic">
                           <Basic/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Activatable">
                            <Activatable/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Color">
                            <Colors/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Density">
                            <DenseMode/>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="12">
                        <UiChildCard title="Open all">
                            <OpenAll/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
