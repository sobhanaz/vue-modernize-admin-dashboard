<script setup lang="ts">
import AddComment from './addCommnet.vue';
import { format } from 'date-fns';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/apps/blog';

const title = useRoute();
const getTitle = title.path.split('/').pop();

onMounted(() => {
    store.fetchPost(`${getTitle}`);
    store.fetchPosts();
});
const store = useBlogStore();

const post = computed(() => {
    return store.selectedPost;
});
</script>
<template>
    <v-row v-if="post">
        <v-col cols="12">
            <v-card elevation="10"  rounded="md">
                <v-img :src="post.coverImg" height="440" cover class="rounded-t-md align-end text-right">
                    <v-card-item
                        ><v-chip class="bg-surface text-body-2 font-weight-medium" size="small" v-text="post.view"></v-chip
                    ></v-card-item>
                </v-img>
                <v-avatar size="40" class="mt-n7 mx-6">
                    <img :src="post.author?.avatar" alt="icon" height="40" />
                </v-avatar>
                <v-card-item class="pt-4">
                    <v-chip class="text-body-2 font-weight-medium bg-grey100" size="small" v-text="post.category"></v-chip>
                    <h1 class="text-h1 text-13 my-6">{{ post.title }}</h1>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <v-avatar class="" size="18">
                                <EyeIcon size="18" />
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2" v-text="post.view"></span>
                            <v-avatar class="ml-4" size="18">
                                <Message2Icon size="18" />
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2" v-text="post.comments?.length"></span>
                        </div>
                        <div v-if="post.createdAt">
                            <v-avatar size="10">
                                <CircleIcon size="10" />
                            </v-avatar>
                            <span class="text-subtitle-2 ml-2" v-text="format(new Date(post.createdAt), 'E, MMM d')"></span>
                        </div>
                    </div>
                </v-card-item>
                <v-divider></v-divider>
                <div class="pa-6">
                    <h2 class="text-h2">Title of the paragraph</h2>
                    <p class="my-4 text-body-1 text-10">
                        But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid
                        on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently
                        has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if
                        it is something specific and they do not want to go through all the other sites and links as well. It allows you to
                        start your bid at the bottom and slowly work your way to the top of the list.
                    </p>
                    <p class="my-4 text-body-1 text-10">
                        Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a
                        few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so
                        in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something
                        specific and they do not want to go through all the other sites and links as well. It allows you to start your bid
                        at the bottom and slowly work your way to the top of the
                    </p>
                    <p class="text-subtitle-1 font-weight-bold text-10">This is strong text.</p>
                    <p class="text-subtitle-1 font-italic text-10">This is italic text.</p>
                    <v-divider class="my-8"></v-divider>
                    <h3 class="text-h3">Unorder list.</h3>
                    <ul class="ml-10 mt-3">
                        <li class="text-body-1">Gigure out what it is or</li>
                        <li class="text-body-1">The links it currently</li>
                        <li class="text-body-1">It allows you to start your bid</li>
                        <li class="text-body-1">Gigure out what it is or</li>
                        <li class="text-body-1">The links it currently</li>
                        <li class="text-body-1">It allows you to start your bid</li>
                    </ul>
                    <v-divider class="my-8"></v-divider>
                    <h3 class="text-h3">Order list.</h3>
                    <ol class="ml-10 mt-3">
                        <li class="text-body-1">Gigure out what it is or</li>
                        <li class="text-body-1">The links it currently</li>
                        <li class="text-body-1">It allows you to start your bid</li>
                        <li class="text-body-1">Gigure out what it is or</li>
                        <li class="text-body-1">The links it currently</li>
                        <li class="text-body-1">It allows you to start your bid</li>
                    </ol>
                    <v-divider class="my-8"></v-divider>
                    <h3 class="text-h3">Quotes</h3>
                    <div class="d-flex mt-8 font-weight-bold ml-4">
                        <QuoteIcon class="mt-n2" /> Life is short, Smile while you still have teeth!
                    </div>
                </div>
            </v-card>
            <v-card elevation="10" class=" pa-6 mt-6" rounded="md">
                <h3 class="text-h4 mb-6">Comments <v-chip class="bg-primary" size="small" v-text="post.comments?.length"></v-chip></h3>
                <template v-for="(comments, i) in post.comments" :key="post.id">
                    <AddComment :comments="comments" />
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>
