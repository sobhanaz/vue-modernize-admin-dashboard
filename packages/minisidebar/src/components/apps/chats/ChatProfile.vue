<script setup>
import { ref } from 'vue';
import user1 from '@/assets/images/profile/user-1.jpg';
</script>

<template>
    <v-sheet>
        <!---Topbar Row-->
        <div class="d-flex gap-2 align-center pa-6">
            <!---User Avatar-->
            <v-avatar size="large">
                <img :src="user1" alt="pro" width="54" />
            </v-avatar>

            <v-badge class="badg-dotDetail" dot color="success"> </v-badge>
            <!---Name & Last seen-->
            <div>
                <h5 class="text-subtitle-1 font-weight-semibold">Mathew Anderson</h5>
                <h6 class="text-subtitle-2">Designer</h6>
            </div>
        </div>
    </v-sheet>
</template>
