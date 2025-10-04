<script setup lang="ts">
import { ref } from 'vue';
// icons
import { MoodSmileIcon} from 'vue-tabler-icons';
</script>
<template>
    <div class="d-flex align-center gap-2 justify-center">
        <v-avatar size="40" color="primary"  variant="flat">
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" variant="flat" color="secondary" >
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" color="error"  variant="flat">
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" color="warning"  variant="flat">
            <MoodSmileIcon size="25" />
        </v-avatar>
        <v-avatar size="40" color="success"  variant="flat">
            <MoodSmileIcon size="25" />
        </v-avatar>
    </div>
</template>
