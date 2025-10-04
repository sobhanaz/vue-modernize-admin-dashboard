<script setup lang="ts">
import { format } from 'date-fns';

const props = defineProps({ post: Object, index: Number });
const mainPost = props.index === 0;

const linkTo = props.post?.title
    ?.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
</script>
<template>
    <v-col cols="12" sm="12" md="12" :lg="mainPost ? 8 : 4">
        <v-card elevation="10" class="overflow-hidden card-hover" rounded="md">
            <div class="position-relative feature-card">
                <v-img
                    class="align-start text-white"
                    height="400"
                    :src="post?.coverImg"
                    :alt="post?.coverImg"
                    cover
                    gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                >
                    <div class="pa-6 d-flex justify-space-between flex-column h-100 position-relative">
                        <div class="d-flex justify-space-between align-center">
                            <v-avatar size="40">
                                <img :src="post?.author.avatar" alt="icon" height="40" />
                            </v-avatar>
                            <v-chip class="text-body-2 font-weight-medium bg-primary" size="small" v-text="post?.category"></v-chip>
                        </div>
                        <div>
                            <h3 class="text-h3 text-20 my-6">
                                <RouterLink class="text-decoration-none color-inherits" :to="linkTo">{{ post?.title }}</RouterLink>
                            </h3>
                            <div class="d-flex align-center justify-space-between">
                                <div class="d-flex align-center">
                                    <div class="d-flex align-center">
                                        <v-avatar class="text-surface" size="18">
                                            <EyeIcon />
                                        </v-avatar>
                                        <span class="text-subtitle-1 ml-2" v-text="post?.view"></span>
                                    </div>
                                    <div class="d-flex align-center">
                                        <v-avatar class="ml-6 text-surface" size="18">
                                            <Message2Icon />
                                        </v-avatar>
                                        <span class="text-subtitle-1 ml-2" v-text="post?.comments.length"></span>
                                    </div>
                                </div>
                                <div>
                                    <v-avatar size="10" class="text-surface">
                                        <CircleIcon />
                                    </v-avatar>
                                    <span class="text-subtitle-2 ml-2" v-text="format(new Date(post?.createdAt), 'E, MMM d')"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-img>
            </div>
        </v-card>
    </v-col>
</template>
