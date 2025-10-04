<script setup lang="ts">
import { ref, computed } from 'vue';
import { useChatStore } from '@/stores/apps/chat';

const msg = ref('');
const store = useChatStore();

function addItemAndClear(item: string) {
    console.log(item);
    if (item.length === 0) {
        return;
    }
    store.sendMsg(store.chatContent, msg.value);
    msg.value = '';
}
</script>

<template>
    <form class="d-flex align-center pa-4" @submit.prevent="addItemAndClear(msg)">
        <v-btn icon variant="text" class="text-medium-emphasis"><MoodSmileIcon size="24" /></v-btn>

        <v-text-field
            variant="solo"
            hide-details
            v-model="msg"
            color="primary"
            class="shadow-none"
            density="compact"
            placeholder="Type a Message"
        ></v-text-field>
        <v-btn icon variant="text" type="submit" class="text-medium-emphasis" :disabled="!msg">
            <SendIcon size="20" />
        </v-btn>

        <v-btn icon variant="text" class="text-medium-emphasis"><PhotoIcon size="20" /></v-btn>
        <v-btn icon variant="text" class="text-medium-emphasis"><PaperclipIcon size="20" /></v-btn>
    </form>
</template>

<style>
.shadow-none .v-field--no-label {
    --v-field-padding-top: -7px;
}
</style>
