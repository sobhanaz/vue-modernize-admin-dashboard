<script setup lang="ts">
import { ref } from 'vue';
/*Call Components*/
import Banner1 from "../../dashboard/dashboardComponents/ecommerce/WelcomeCard.vue";
import Banner2 from "@/components/widgets/banners/Banner2.vue";
import Banner3 from "@/components/widgets/banners/Banner3.vue";
import Banner4 from "@/components/widgets/banners/Banner4.vue";
import Banner5 from "@/components/widgets/banners/Banner5.vue";
import Banner6 from "@/components/widgets/banners/Banner6.vue";
/* Breadcrumb component */
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
// theme breadcrumb
const page = ref({ title: 'Banner' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        href: '#'
    },
    {
        text: 'Banner',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
 <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>       
    <v-row>
        <v-col cols="12" lg="8">
            <!--Banner 1-->
            <Banner1/>
            <!--Banner 2-->
            <Banner2/>
            <v-row>
                <!--Banner 3-->
                <v-col cols="12" sm="6">
                    <Banner3/>
                </v-col>
                <!--Banner 4-->
                 <v-col cols="12" sm="6">
                     <Banner4/>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" lg="4">
            <!--Banner 5-->
            <Banner5/>
            <!--Banner 6-->
            <Banner6/>
        </v-col>
    </v-row>
</template>
