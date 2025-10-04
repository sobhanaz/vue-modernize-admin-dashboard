<script setup lang="ts">
import {userCardData} from '@/_mockApis/components/dashboard/modernData';
</script>
<template>
    <v-card elevation="10" >
        <v-card-item >
            <div class="d-flex align-center">
                <v-avatar rounded="md" size="70">
                    <img contain src="@/assets/images/profile/user-1.jpg" height="70"/>
                </v-avatar>
                <div class="pl-5">
                    <h5 class="text-h5">Super awesome, Vue coming soon!</h5>
                    <h6 class="text-subtitle-1 textSecondary mt-2">22 March, 2024</h6>
                </div>
            </div>
            <div class="d-flex align-center justify-space-between mt-8 mb-sm-3 mb-0">
                <div class="ml-2 d-flex flex-row-reverse">
                    <v-avatar v-for="card in userCardData" :key="card.img" size="45" class="ml-n2 avtar-border">
                        <img :src="card.img" alt="usericon" height="45"/>
                    </v-avatar>
                </div>
                <div>
                    <RouterLink to="/" class="rounded-md bg-lightprimary d-block" size="40">
                        <v-avatar size="40" class=" text-primary">
                            <Message2Icon size="22" />
                        </v-avatar>
                    </RouterLink>
                </div>      
            </div>
        </v-card-item>
    </v-card>
</template>