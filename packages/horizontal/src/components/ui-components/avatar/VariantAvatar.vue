<script setup lang="ts">
import { ref } from 'vue';
// icons
import { MoodSmileIcon} from 'vue-tabler-icons';
</script>
<template>
    <div class="d-flex align-center gap-2 justify-center">
        <v-avatar size="40" color="primary"  variant="flat" rounded="sm">
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" color="primary" variant="flat" rounded="md">
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" color="primary"  variant="flat" rounded="lg">
            <MoodSmileIcon size="25" />
        </v-avatar>
    </div>
</template>
