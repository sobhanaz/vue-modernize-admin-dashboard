<script setup lang="ts">
const props = defineProps({
    name: String,
    destination: String,
    building: String,
    city: String,
    state: String,
    phone: String,
    isDefault: Boolean,
    showBtn: Boolean
});
</script>
<template>
    <v-card variant="outlined">
        <v-card-text>
            <div class="d-flex align-center gap-2">
                <h6 class="text-h6">{{ name }}</h6>
                <small class="text-medium-emphasis">({{ destination }})</small>
                <v-chip color="primary" size="small" class="ml-auto" v-if="isDefault">Default</v-chip>
            </div>
            <div class="mt-4 mb-6 text-body1">
                <p class="text-subtitle-2 lh-md">{{ building }}, {{ city }}, {{ state }}</p>
                <h6 class="text-h6 mt-4 d-flex align-center"><DeviceMobileIcon size="20" class="mr-2" /> {{ phone }}</h6>
            </div>
            <div class="d-sm-flex align-center gap-2" v-if="showBtn">
                <v-btn variant="outlined" flat color="primary">Deliver to This Address</v-btn>
                <div class="ml-auto d-flex gap-1">
                    <v-btn icon flat size="small" class="elevation-0"><PencilIcon size="18" /></v-btn>
                    <v-btn icon flat size="small" class="elevation-0"><TrashIcon size="18" /></v-btn>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>
