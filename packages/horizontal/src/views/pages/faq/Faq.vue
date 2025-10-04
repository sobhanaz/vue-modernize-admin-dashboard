<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

//FAQ components
import FaqQuestion from '@/components/pages/faq/FaqQuestion.vue';
import StillHaveQuestions from '@/components/pages/faq/StillHaveQuestions.vue';

// theme breadcrumb
const page = ref({ title: 'FAQ' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'FAQ',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    
    <v-row class="justify-center">
        <!--Questions-->
        <v-col cols="12" md="8"> 
            <FaqQuestion/>
        </v-col>
        <!--Stil Have Questions-->
        <v-col cols="12" md="10">
            <StillHaveQuestions/>
        </v-col>
    </v-row>
</template>
