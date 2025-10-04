<script setup lang="ts">
import { shallowRef } from 'vue';
import { CircleDotIcon, DragDropIcon, InboxIcon, MailIcon, SendIcon } from 'vue-tabler-icons';
const props = defineProps(['icon']);
// List 2 data
const open = shallowRef(['Users']);
</script>
<template>
    <v-list >
        <v-card variant="outlined" class="py-2">
            <div class="text-subttile-2 pl-4 py-3">Nested List Items</div>
        <v-list-item  value="" class="mb-2" color="primary">
            <template v-slot:prepend>
                <SendIcon size="20" stroke-width="1.5" class="mr-2" />
            </template>
            <v-list-item-title >Sent Mail</v-list-item-title>
        </v-list-item>  
        <v-list-item  value="" class="mb-2" color="primary">
            <template v-slot:prepend>
                <MailIcon size="20" stroke-width="1.5" class="mr-2" />
            </template>
            <v-list-item-title >Drafts</v-list-item-title>
        </v-list-item>  
        <v-list-group value="Users">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" rounded="md" color="primary" title="inbox">
                    <template v-slot:prepend>
                        <InboxIcon size="20" stroke-width="1.5" class="mr-2" />
                    </template>
                </v-list-item>
            </template>
            <v-list-item value="Started" color="primary" title="Started" rounded="md">
                <template v-slot:prepend>
                    <CircleDotIcon size="15" stroke-width="1.5" class="mr-2" />
                </template>
            </v-list-item>
        </v-list-group>
        </v-card>
    </v-list>
</template>
