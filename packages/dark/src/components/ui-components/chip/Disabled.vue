<script setup lang="ts">
import { ref } from 'vue';
import { MoodSmileIcon,ChecksIcon,UserCircleIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3">
        <v-chip disabled variant="outlined">
            <MoodSmileIcon class="mr-2" start size="20" />
            Custom Icon
            <ChecksIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip color="secondary" disabled variant="outlined">
            <UserCircleIcon class="mr-2" start size="20" />
            Custom Icon
            <ChecksIcon class="ml-2" start size="20" />
        </v-chip>
    </div>
</template>
