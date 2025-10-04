<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import OrdinaryForm from "@/components/forms/form-layouts/OrdinaryForm.vue";
import InputVarients from "@/components/forms/form-layouts/InputVarients.vue";
import DefaultForm from "@/components/forms/form-layouts/DefaultForm.vue";
import BasicHeaderForm from "@/components/forms/form-layouts/BasicHeaderForm.vue";
import DisabledForm from "@/components/forms/form-layouts/DisabledForm.vue";
import FormLeftIcon from "@/components/forms/form-layouts/FormLeftIcon.vue";
import FormRightIcon from "@/components/forms/form-layouts/FormRightIcon.vue";
// theme breadcrumb
const page = ref({ title: 'Form Layouts' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Form Layouts',
        disabled: true,
        href: '#'
    }
]);

</script>
<template>
   <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
   <v-row>
        <v-col cols="12">
            <UiParentCard title="Ordinary Form">
                 <OrdinaryForm/>
            </UiParentCard>
            <UiParentCard title="Input Variants" class="mt-6">
                <InputVarients/>
            </UiParentCard>
            <UiParentCard title="Default Form" class="mt-6">
                <DefaultForm/>
            </UiParentCard>
            <UiParentCard title="Basic Header Form" class="mt-6">
                <BasicHeaderForm/>
            </UiParentCard>
             <UiParentCard title="Disabled Form" class="mt-6">
                <DisabledForm/>
             </UiParentCard>
        </v-col>
        <!----input with icon----->
        <v-col cols="12" md="6">
            <UiParentCard title="Form with Left Icon" >
                <FormLeftIcon/> 
            </UiParentCard>           
        </v-col>
         <v-col cols="12" md="6">
            <UiParentCard title="Form with Right Icon" >
                <FormRightIcon/> 
            </UiParentCard>           
        </v-col>
   </v-row>           
</template>