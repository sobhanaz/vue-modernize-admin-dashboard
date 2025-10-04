<script setup lang="ts">
import BlogGrid from './blogCardGrid.vue';
import FeatuteBlogCard from './featureBlogCard.vue';
import { ref, onMounted, computed } from 'vue';
import { useBlogStore } from '@/stores/apps/blog';

const store = useBlogStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts = computed(() => {
    return store.blogposts;
});

const filterFeaturedpost = computed(() => {
    return getPosts.value.filter((post) => {
        return post.featured;
    });
});
</script>
<template>
    <v-row>
        <template v-for="(post, i) in filterFeaturedpost" :key="post.id">
            <FeatuteBlogCard :post="post" :index="i" />
        </template>
        <template v-for="(post, i) in getPosts" :key="post.id">
            <BlogGrid :post="post" />
        </template>
    </v-row>
</template>
