<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { usePostsStore } from '@/stores/apps/userprofile/posts';
import PostItem from './posts/PostItem.vue';

const store = usePostsStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts: any = computed(() => {
    return store.posts;
});
</script>

<template>
    <v-row class="mt-4">
        <v-col cols="12" v-for="post in getPosts" :key="post.id">
            <PostItem :post="post" />
        </v-col>
    </v-row>
</template>
