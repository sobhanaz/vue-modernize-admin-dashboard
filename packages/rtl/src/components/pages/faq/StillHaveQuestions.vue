<script setup lang="ts">
/* user icon */
import img1 from '@/assets/images/profile/user-1.jpg';
import img2 from '@/assets/images/profile/user-2.jpg';
import img3 from '@/assets/images/profile/user-3.jpg';
</script>
<template>
    <v-card elevation="0" rounded="md" class="bg-lightprimary mt-sm-13 mt-8">
        <v-card-item class="pa-sm-10 pa-6">
            <div class="text-center">
                <div class="ml-2 d-flex justify-center flex-row-reverse mb-5">
                    <v-avatar size="40" class="ml-n2 avtar-border">
                        <img :src="img1" alt="avatar" height="40" />
                    </v-avatar>
                    <v-avatar size="40" class="ml-n2 avtar-border">
                        <img :src="img2" alt="avatar" height="40" />
                    </v-avatar>
                    <v-avatar size="40" class="ml-n2 avtar-border">
                        <img :src="img3" alt="avatar" height="40" />
                    </v-avatar>
                </div>
                <h3 class="text-h3">Still have questions</h3>
                <h6 class="text-h6 text-medium-emphasis font-weight-medium mt-2">
                    Can't find the answer your're looking for ? Please chat to our friendly team.
                </h6>
                <v-btn color="primary" flat class="mt-5">Chat with us</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
