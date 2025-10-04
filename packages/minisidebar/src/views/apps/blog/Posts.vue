<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import BlogPosts from '@/components/apps/blog/blogPosts.vue';

// theme breadcrumb
const page = ref({ title: 'Blog app' });
const breadcrumbs = ref([
    {
        text: 'Get the latest news',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
          <BlogPosts/>
        </v-col>
    </v-row>
</template>
