<script setup lang="ts">
import { ref} from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiParentCardLogo from '@/components/shared/UiParentCardLogo.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import VeeValidation from '@/components/forms/form-validation/VeeValidation.vue'
import MailValidation from '@/components/forms/form-validation/MailValidation.vue'
import OnType from '@/components/forms/form-validation/OnType.vue'
import Radio from '@/components/forms/form-validation/Radio.vue'
import CheckBox from '@/components/forms/form-validation/CheckBox.vue'
import SelectBox from '@/components/forms/form-validation/Select.vue'
import { Form } from 'vee-validate';
// theme breadcrumb
const page = ref({ title: 'Form Validation' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Form Validation',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
   <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
   <v-row>
        <v-col cols="12" lg="6" class="mb-0">
            <UiParentCardLogo>
                <VeeValidation/>
            </UiParentCardLogo>           
        </v-col>
        <v-col cols="12" lg="6" class="mb-0">
            <UiParentCardLogo>
                <MailValidation/>
            </UiParentCardLogo>   
            <UiParentCard title="Select" class="mt-6">
                <SelectBox/>
            </UiParentCard>        
        </v-col>
        <v-col cols="12" lg="6" class="">
            <UiParentCard title="On Leave">
                <OnType/>
            </UiParentCard>           
        </v-col>
        <v-col cols="12" lg="6" class="">
            <UiParentCard title="Checkboxes">
                <CheckBox/>
            </UiParentCard>           
        </v-col>
        <v-col cols="12" lg="6" class="">
            <UiParentCard title="Radio">
                <Radio/>
            </UiParentCard>           
        </v-col>
        
   </v-row>           
</template>