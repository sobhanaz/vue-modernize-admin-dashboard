<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon, MoodSmileIcon, UserIcon } from "vue-tabler-icons";
</script>
<template>
    <div class="d-flex gap-3 justify-center">
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="primary" flat>
            <UserIcon size="22"/>
            <v-tooltip activator="parent" location="start">
                    primary
            </v-tooltip>
        </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="secondary" flat>
            <HeartIcon color="white" size="22" />
            <v-tooltip activator="parent" location="top">
                    secondary
            </v-tooltip>
        </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="warning" flat>
            <MoodSmileIcon size="22" color="white"/>
            <v-tooltip activator="parent" location="end">
                    warning
            </v-tooltip>
        </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="error" flat>
            <HeartIcon size="22"/>
            <v-tooltip activator="parent" location="bottom">
                    error
            </v-tooltip>
        </v-btn>
        </v-avatar>
    </div>
</template>
