<script setup lang="ts">
import { ref } from 'vue';
import { usePostsStore } from '@/stores/apps/userprofile/posts';
import Comments from './Comments.vue';
import uniqueId from 'lodash/uniqueId';
import { ShareIcon, UsersIcon, Message2Icon, ClipboardIcon } from 'vue-tabler-icons';

const store = usePostsStore();
const props = defineProps({
    post: Object || Array
});

const showCommentBox = ref(!(props.post?.comments && props.post?.comments.length > 0));
const searchValue = ref('');
const shareitems = ref([
    { title: 'Share Now', icon: ShareIcon },
    { title: 'Share to Friends', icon: UsersIcon },
    { title: 'Send in Messanger', icon: Message2Icon },
    { title: 'Copy Link', icon: ClipboardIcon }
]);

const toggleCommentbox = () => {
    return (showCommentBox.value = !showCommentBox.value);
};

const handlePostLikes = async (postId: string) => {
    await store.likePost(postId);
};
const onSubmit = async (id: any, comment: any) => {
    const commentId = uniqueId('#COMMENT_');
    const newComment: any = {
        id: commentId,
        profile: {
            id: uniqueId('#COMMENT_'),
            avatar: props.post?.profile.avatar,
            name: props.post?.profile.name,
            time: 'now'
        },
        data: {
            comment: comment,
            likes: {
                like: false,
                value: 0
            },
            replies: []
        }
    };
    store.addComment(id, newComment);
    searchValue.value = '';
};
</script>

<template>
    <v-card variant="outlined">
        <v-card-item>
            <div class="d-flex gap-3 align-center">
                <v-avatar size="40">
                    <img :src="post?.profile.avatar" width="40" alt="avatar" />
                </v-avatar>
                <div class="d-block d-sm-flex align-center gap-3">
                    <h6 class="text-h6">{{ post?.profile.name }}</h6>
                    <span class="text-subtitle-2 opacity-50">
                        <CircleIcon size="8" fill="inherit" class="opacity-50 mr-1" />
                        {{ post?.profile.time }}
                    </span>
                </div>
            </div>
            <div class="py-4 text-body-1">
                {{ post?.data.content }}
            </div>
            <!---If Images-->
            <v-row v-if="post?.data.images">
                <v-col :md="photo.featured ? '12' : '6'" v-for="photo in post?.data.images">
                    <v-avatar class="rounded-md w-100" size="360">
                        <img :src="photo.img" alt="photo" />
                    </v-avatar>
                </v-col>
            </v-row>
            <!--If Video-->
            <div v-if="post?.data.video" class="rounded-md overflow-hidden my-5">
                <iframe :src="`https://www.youtube.com/embed/${post?.data.video}`" frameborder="0" width="100%" height="400"></iframe>
            </div>
            <!---Like and comment count-->
            <div class="my-4 mt-5 d-flex align-center gap-3">
                <v-tooltip text="Like">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            @click="handlePostLikes(`${post?.id}`)"
                            v-bind="props"
                            icon
                            :color="post?.data && post?.data.likes && post?.data.likes.like ? 'primary' : 'grey100'"
                            variant="flat"
                            size="x-small"
                        >
                            <ThumbUpIcon size="16" />
                        </v-btn>
                    </template>
                </v-tooltip>
                <span class="text-subtitle-1 font-weight-semibold">{{ post?.data && post?.data.likes && post?.data.likes.value }}</span>
                <v-tooltip text="Comment">
                    <template v-slot:activator="{ props }">
                        <v-btn icon v-bind="props" color="secondary" variant="flat" size="x-small" @click="toggleCommentbox">
                            <Message2Icon size="16" />
                        </v-btn>
                    </template>
                </v-tooltip>
                <span class="text-subtitle-1 font-weight-semibold">{{ post?.data.comments ? post?.data.comments.length : 0 }}</span>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon class="ml-auto" variant="text" size="small" v-bind="props"><ShareIcon size="16" /></v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(item, index) in shareitems" :key="index" :value="index">
                            <template v-slot:prepend>
                                <component :is="item.icon" stroke-width="1.5" size="20" />
                            </template>
                            <v-list-item-title class="ml-3">{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-card-item>
        <!--If Comment-->
        <div v-if="post?.data.comments" class="pa-5 pt-0">
            <div v-for="comments in post?.data.comments">
                <Comments :comments="comments" :postId="post?.id" />
            </div>
        </div>
        <!---Comment Form-->
        <div v-if="showCommentBox">
            <v-divider />
            <div class="d-block d-sm-flex gap-3 align-center mb-4 px-4 pt-4">
                <v-avatar class="flex-shrink-0 d-none d-sm-block" size="33">
                    <img :src="post?.profile.avatar" width="33" alt="avatar" />
                </v-avatar>
                <v-text-field variant="outlined" color="primary" v-model="searchValue" placeholder="Comment" hide-details></v-text-field>
                <v-btn
                    color="primary"
                    variant="flat"
                    :disabled="searchValue === ''"
                    class="mt-3 mt-sm-0"
                    @click="onSubmit(post?.id, searchValue)"
                >
                    Comment
                </v-btn>
            </div>
        </div>
    </v-card>
</template>
