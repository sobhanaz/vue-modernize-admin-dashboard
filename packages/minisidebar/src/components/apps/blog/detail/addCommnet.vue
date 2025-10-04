<script setup lang="ts">
import { format } from 'date-fns';
const props = defineProps({ comments: Object });
</script>
<template>
    <div v-if="comments">
        <v-card variant="flat" class="mb-5 pa-5 border-light">
            <div class="d-flex gap-3 align-center" v-if="comments.profile">
                <v-avatar size="30">
                    <img :src="comments.profile.avatar" width="30" alt="avatar" />
                </v-avatar>
                <div class="d-block d-sm-flex align-center gap-3">
                    <h6 class="text-h6">{{ comments.profile?.name }}</h6>
                    <span class="text-subtitle-2 opacity-50">
                        <CircleIcon size="8" fill="inherit" class="opacity-50 mr-1" />
                        {{ format(new Date(comments?.time), 'E, MMM d') }}
                    </span>
                </div>
            </div>
            <div class="py-3 text-body-1">
                {{ comments.comment }}
            </div>
            <!---Like and comment count-->
            <div class="my-1 d-flex align-center gap-3">
                <v-tooltip text="Reply">
                    <template v-slot:activator="{ props }">
                        <v-btn icon color="secondary" variant="flat" v-bind="props" size="x-small">
                            <ArrowBackUpIcon size="16" />
                        </v-btn>
                    </template>
                </v-tooltip>
            </div>
        </v-card>
        <template v-for="(reply, i) in comments.replies" :key="reply.id">
            <div class="ml-10">
                <v-card variant="flat" class="mb-5 pa-5 border-light" v-if="reply">
                    <div class="d-flex gap-3 align-center" v-if="reply.profile">
                        <v-avatar size="30">
                            <img :src="reply.profile.avatar" width="30" alt="avatar" />
                        </v-avatar>
                        <div class="d-block d-sm-flex align-center gap-3">
                            <h6 class="text-h6">{{ reply.profile?.name }}</h6>
                            <span class="text-subtitle-2 opacity-50">
                                <CircleIcon size="8" fill="inherit" class="opacity-50 mr-1" />
                                {{ format(new Date(reply?.time), 'E, MMM d') }}
                            </span>
                        </div>
                    </div>
                    <div class="py-3 text-body-1">
                        {{ reply.comment }}
                    </div>
                </v-card>
            </div>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.border-light {
    border: 1px solid rgb(var(--v-theme-grey100));
}
</style>
