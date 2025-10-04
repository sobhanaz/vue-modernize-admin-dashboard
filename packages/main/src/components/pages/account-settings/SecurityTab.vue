<script setup lang="ts">
import { ref } from 'vue';
/*import tabler icons*/
import { DeviceLaptopIcon, DeviceMobileIcon, DotsVerticalIcon } from 'vue-tabler-icons';
</script>
<template>
    <v-card elevation="10" >
        <v-row class="ma-sm-n2 ma-n1">
            <v-col cols="12" md="8">
                <v-card elevation="10">
                    <v-card-item>
                        <h4 class="text-h4">Two-factor Authentication</h4>
                        <div class="d-sm-flex justify-space-between mt-4 mb-8">
                            <div class="text-subtitle-1 text-medium-emphasis text-13 pr-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam
                                ut.
                            </div>
                            <v-btn color="primary" class="mt-sm-0 mt-3" flat>Enable</v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex justify-space-between my-4">
                            <div>
                                <h6 class="text-h6 mb-1">Authentication App</h6>
                                <h5 class="text-subtitle-1 text-medium-emphasis">Google auth app</h5>
                            </div>
                            <v-btn class="bg-lightprimary text-primary" flat>Setup</v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex justify-space-between my-4">
                            <div>
                                <h6 class="text-h6 mb-1">Another e-mail</h6>
                                <h5 class="text-subtitle-1 text-medium-emphasis">E-mail to send verification link</h5>
                            </div>
                            <v-btn class="bg-lightprimary text-primary" flat>Setup</v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="d-flex justify-space-between my-4">
                            <div>
                                <h6 class="text-h6 mb-1">SMS Recovery</h6>
                                <h5 class="text-subtitle-1 text-medium-emphasis">Your phone number or something</h5>
                            </div>
                            <v-btn class="bg-lightprimary text-primary" flat>Setup</v-btn>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card elevation="10">
                    <v-card-item>
                        <v-avatar size="48" class="" rounded="md" color="lightprimary">
                            <DeviceLaptopIcon class="text-primary" size="25" />
                        </v-avatar>
                        <h5 class="text-h5 mt-4">Devices</h5>
                        <div class="text-subtitle-1 mt-3 text-medium-emphasis text-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit Rem.
                        </div>
                        <v-btn color="primary" class="mt-4" flat>Sign out from all devices</v-btn>
                        <div class="mt-sm-8 mt-5">
                            <div class="d-flex align-center my-4">
                                <v-avatar size="30" rounded="md" color="surface">
                                    <DeviceMobileIcon size="25" />
                                </v-avatar>
                                <div class="ml-3 pr-3">
                                    <h6 class="text-h6 mb-1">iPhone 14</h6>
                                    <h5 class="text-subtitle-1 text-medium-emphasis">London UK, Oct 23 at 1:15 AM</h5>
                                </div>
                                <v-btn size="30" icon variant="flat" class="lightprimary ml-auto">
                                    <v-avatar size="20">
                                        <DotsVerticalIcon />
                                    </v-avatar>
                                </v-btn>
                            </div>
                            <v-divider></v-divider>
                            <div class="d-flex align-center my-4">
                                <v-avatar size="30" rounded="md" color="surface">
                                    <DeviceLaptopIcon size="25" />
                                </v-avatar>
                                <div class="ml-3 pr-3">
                                    <h6 class="text-h6 mb-1">Macbook Air</h6>
                                    <h5 class="text-subtitle-1 text-medium-emphasis">Gujarat India, Oct 24 at 3:15 AM</h5>
                                </div>
                                <v-btn size="30" icon variant="flat" class="lightprimary ml-auto">
                                    <v-avatar size="20">
                                        <DotsVerticalIcon />
                                    </v-avatar>
                                </v-btn>
                            </div>
                        </div>
                        <v-btn class="bg-lightprimary text-primary mt-5" block flat>Need Help?</v-btn>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
        <div class="d-flex justify-end mt-5">
            <v-btn size="large" color="primary" class="mr-4" flat>Save</v-btn>
            <v-btn size="large" class="bg-lighterror text-error" flat>Cancel</v-btn>
        </div>
    </v-card>
</template>
