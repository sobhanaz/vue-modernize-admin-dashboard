<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Heading from "@/components/style-components/typography/Heading.vue";
import Opacity from "@/components/style-components/typography/Opacity.vue";
import TextAlignment from "@/components/style-components/typography/TextAlignment.vue";
import TextDecoration from "@/components/style-components/typography/TextDecoration.vue";
import Default from "@/components/style-components/typography/DefaultText.vue";
const page = ref({ title: 'Typography' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Typography',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Basic Typography">
                <UiChildCard title="Heading">
                    <Heading/>
                </UiChildCard>
                 <UiChildCard title="Default Text" class="mt-5">
                    <Default/>
                </UiChildCard>
                <UiChildCard title="Text-alignment" class="mt-5">
                    <TextAlignment/>
                </UiChildCard>
                <UiChildCard title="Decoration" class="mt-5">
                    <TextDecoration/>
                </UiChildCard>
                <UiChildCard title="Opacity" class="mt-5">
                    <Opacity/>
                </UiChildCard>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
