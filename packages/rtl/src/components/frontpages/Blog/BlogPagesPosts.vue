<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useBlogStore } from '@/stores/apps/blog';
import BlogCardGrid from './BlogGrid.vue';

const store = useBlogStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts = computed(() => {
    return store.blogposts;
});
</script>
<template>
    <v-container class="max-width-1218 py-7">
        <v-row>
            <template v-for="(post, i) in getPosts" :key="post.id">
                <BlogCardGrid :post="post" />
            </template>
        </v-row>
    </v-container>
</template>
