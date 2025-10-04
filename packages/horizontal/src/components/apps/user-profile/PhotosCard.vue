<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { usePhotosStore } from '@/stores/apps/userprofile/photos';

const store = usePhotosStore();

onMounted(() => {
    store.fetchPhotos();
});
const getPhotos: any = computed(() => {
    return store.photos;
});
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-card variant="outlined">
                <v-card-item>
                    <h4 class="text-h4 mb-4">Photos</h4>
                    <v-row>
                        <v-col cols="4" v-for="item in getPhotos" :key="item.id">
                            <img :src="item.avatar" :alt="item.avatar" class="w-100 rounded-md" />
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>
