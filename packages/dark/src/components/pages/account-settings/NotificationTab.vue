<script setup lang="ts">
import { ref } from 'vue';
import {notificationTb} from '@/_mockApis/components/pages/accountNotification';
const switchoff3 = ref(false);
</script>
<template>
    <v-row class="justify-center ma-n2">
        <!----Notification Preferences----->
        <v-col cols="12" md="9">
            <v-card elevation="10">
                <v-card-item>
                    <h4 class="text-h4">Notification Preferences</h4>
                    <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">
                        Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service
                        messages, such as payment, security or legal notifications.
                    </div>
                    <div class="mt-6">
                        <v-label class="mb-2 font-weight-medium">Email Address*</v-label>
                        <v-text-field color="primary" variant="outlined" type="email" hide-details></v-text-field>
                        <span class="text-subtitle-1 text-medium-emphasis">Required for notificaitons.</span>
                    </div>

                    <div class="d-flex align-sm-center align-start mt-7" v-for="list in notificationTb" :key="list.title">
                        <v-avatar size="48" class="mr-2" rounded="md" color="lightprimary">
                            <component :is="list.icon" stroke-width="2" size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h6 class="text-h6 mb-3 mt-n1">{{ list.title }}</h6>
                            <h5 class="text-subtitle-1 text-medium-emphasis">{{ list.subtitle }}</h5>
                        </div>
                        <div class="ml-auto mr-1 pa-sm-1 pa-6 pl-7">
                            <v-switch  :model-value="list.switch" hide-details color="primary"></v-switch>
                        </div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <!-----Date & Time------->
        <v-col cols="12" md="9">
            <v-card elevation="10">
                <v-card-item>
                    <v-card-title class="text-h4">Date & Time</v-card-title>
                    <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">Time zones and calendar display settings.</div>
                    <div>
                        <div class="d-flex align-center mt-7">
                            <v-avatar size="48" class="mr-2" rounded="md" color="lightprimary">
                                <ClockIcon size="22" />
                            </v-avatar>
                            <div class="pl-4">
                                <h5 class="text-subtitle-1 text-medium-emphasis mb-1">Time zone</h5>
                                <h6 class="text-h6">(UTC + 02:00) Athens, Bucharet</h6>
                            </div>
                            <div class="ml-auto">
                                <v-btn size="30" icon variant="flat" class="lightprimary d-flex">
                                    <v-avatar size="30">
                                        <DownloadIcon size="22" />
                                    </v-avatar>
                                    <v-tooltip activator="parent" location="bottom">Download </v-tooltip>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <!-----Ignore Tracking------->
        <v-col cols="12" md="9">
            <v-card elevation="10">
                <v-card-item>
                    <v-card-title class="text-h4">Ignore Tracking</v-card-title>
                    <div>
                        <div class="d-flex align-center mt-7">
                            <v-avatar size="48" class="mr-2" rounded="md" color="lightprimary">
                                <PlayerPauseIcon size="22" />
                            </v-avatar>
                            <div class="pl-4">
                                <h6 class="text-h6 mb-3 mt-n1">Ignore Browser Tracking</h6>
                                <h5 class="text-subtitle-1 text-medium-emphasis">Browser Cookie</h5>
                            </div>
                            <div class="ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7">
                                <v-switch v-model="switchoff3" hide-details color="primary"></v-switch>
                            </div>
                        </div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <div class="d-flex justify-end mt-5">
        <v-btn size="large" color="primary" class="mr-4" flat>Save</v-btn>
        <v-btn size="large" class="bg-lighterror text-error" flat>Cancel</v-btn>
    </div>
</template>
