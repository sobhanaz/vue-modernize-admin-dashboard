<script setup lang="ts">
const props = defineProps({
    caption: String,
    title: String
});
</script>
<template>
    <div class="overflow-hidden bg-lightprimary pt-sm-12 pt-0 pb-sm-16 pb-8">
        <v-container class="max-width-1218 text-center py-12">
            <span class="text-uppercase text-primary text-16 font-weight-bold pb-4">{{ caption }}</span>
            <h1 class="text-56 font-weight-bold textPrimary">{{ title }}</h1>
        </v-container>
    </div>
</template>
