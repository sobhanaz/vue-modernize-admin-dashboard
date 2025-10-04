<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useChatStore } from '@/stores/apps/chat';
import { formatDistanceToNowStrict } from 'date-fns';
import ChatSendMsg from './ChatSendMsg.vue';
import ChatInfo from './ChatInfo.vue';
import { useDisplay } from 'vuetify';

const { lgAndUp } = useDisplay();

const store = useChatStore();
onMounted(() => {
    store.fetchChats();
});

const chatDetail: any = computed(() => {
    return store.chats[store.chatContent - 1];
});

const Rpart = ref(lgAndUp ? true : false);
const isMobileDrawerOpen = ref(false);
function toggleRpart() {
    Rpart.value = !Rpart.value;
}
</script>
<template>
    <div v-if="chatDetail" class="customHeight">
        <div>
            <div class="d-flex align-center gap-3 pa-4">
                <!---Topbar Row-->
                <div class="d-flex gap-2 align-center">
                    <!---User Avatar-->
                    <v-avatar>
                        <img :src="chatDetail.thumb" alt="pro" width="50" />
                    </v-avatar>

                    <v-badge
                        class="badg-dotDetail"
                        dot
                        :color="
                            chatDetail.status === 'away'
                                ? 'warning'
                                : chatDetail.status === 'busy'
                                  ? 'error'
                                  : chatDetail.status === 'online'
                                    ? 'success'
                                    : 'containerBg'
                        "
                    >
                    </v-badge>
                    <!---Name & Last seen-->
                    <div>
                        <h5 class="text-h5 mb-n1">{{ chatDetail.name }}</h5>
                        <small class="textPrimary"> {{ chatDetail.status }} </small>
                    </div>
                </div>
                <!---Topbar Icons-->
                <div class="ml-auto d-flex">
                    <v-btn icon variant="text" class="text-medium-emphasis">
                        <PhoneIcon size="24" />
                    </v-btn>
                    <v-btn icon variant="text" class="text-medium-emphasis">
                        <VideoPlusIcon size="24" />
                    </v-btn>
                    <v-btn icon variant="text" class="text-medium-emphasis d-lg-flex d-none" @click="toggleRpart">
                        <Menu2Icon size="24" />
                    </v-btn>
                    <v-btn
                        icon
                        variant="text"
                        class="text-medium-emphasis d-lg-none d-flex"
                        @click="isMobileDrawerOpen = !isMobileDrawerOpen"
                    >
                        <DotsVerticalIcon size="24" />
                    </v-btn>
                </div>
                <!---Topbar Icons-->
            </div>
            <v-divider />
            <!---Chat History-->
            <perfect-scrollbar class="rightpartHeight">
                <div class="d-flex">
                    <div class="w-100">
                        <div v-for="chat in chatDetail.chatHistory" :key="chat.id" class="pa-5">
                            <div v-if="chatDetail.id === chat.senderId" class="justify-end d-flex text-end mb-1">
                                <div>
                                    <small class="text-medium-emphasis text-subtitle-2" v-if="chat.createdAt">
                                        {{
                                            formatDistanceToNowStrict(new Date(chat.createdAt), {
                                                addSuffix: false
                                            })
                                        }}
                                        ago</small
                                    >

                                    <v-sheet class="bg-grey100 rounded-md px-3 py-2 mb-1" v-if="chat.type == 'text'">
                                        <p class="text-body-1">{{ chat.msg }}</p>
                                    </v-sheet>
                                    <v-sheet v-if="chat.type == 'img'" class="mb-1">
                                        <img :src="chat.msg" class="rounded-md" alt="pro" width="250" />
                                    </v-sheet>
                                </div>
                            </div>
                            <div v-else class="d-flex align-items-start gap-3 mb-1">
                                <!---User Avatar-->
                                <v-avatar>
                                    <img :src="chatDetail.thumb" alt="pro" width="40" />
                                </v-avatar>
                                <div>
                                    <small class="text-medium-emphasis text-subtitle-2" v-if="chat.createdAt">
                                        {{ chatDetail.name }},
                                        {{
                                            formatDistanceToNowStrict(new Date(chat.createdAt), {
                                                addSuffix: false
                                            })
                                        }}
                                        ago
                                    </small>

                                    <v-sheet class="bg-grey100 rounded-md px-3 py-2 mb-1" v-if="chat.type == 'text'">
                                        <p class="text-body-1">{{ chat.msg }}</p>
                                    </v-sheet>
                                    <v-sheet v-if="chat.type == 'img'" class="mb-1">
                                        <img :src="chat.msg" class="rounded-md" alt="pro" width="250" />
                                    </v-sheet>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-sidebar d-lg-flex d-none" v-if="Rpart">
                        <v-sheet>
                            <ChatInfo :chatDetail="chatDetail" />
                        </v-sheet>
                    </div>
                </div>
            </perfect-scrollbar>
        </div>
        <v-divider />
        <!---Chat send-->
        <ChatSendMsg />
    </div>

    <v-navigation-drawer v-model="isMobileDrawerOpen" location="right" temporary width="350">
        <ChatInfo :chatDetail="chatDetail" />
    </v-navigation-drawer>
</template>
<style lang="scss">
.rightpartHeight {
    height: 530px;
}
.badg-dotDetail {
    left: -9px;
    position: relative;
    bottom: -10px;
}

.toggleLeft {
    position: absolute;
    right: 15px;
    top: 15px;
}
.right-sidebar {
    width: 320px;
    border-left: 1px solid rgb(var(--v-theme-borderColor));
    transition: 0.1s ease-in;
    flex-shrink: 0;
}

.HideLeftPart {
    display: none;
}

@media (max-width: 960px) {
    .right-sidebar {
        position: absolute;
        right: -320px;
        &.showLeftPart {
            right: 0;
            z-index: 2;
            box-shadow: 2px 1px 20px rgba(0, 0, 0, 0.1);
        }
    }
    .boxoverlay {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.2);
    }
}
</style>
