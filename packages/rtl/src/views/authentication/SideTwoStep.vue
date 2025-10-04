<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/*form component*/
import TwoStepForm from '@/components/auth/TwoStepForm.vue'
</script>

<template>
    <div class="pa-3">
        <v-row class="h-100vh mh-100 auth">
            <v-col cols="12" lg="8" xl="9"
                class="d-lg-flex align-center justify-center authentication position-relative">
                <div class="auth-header pt-sm-6 pt-2 px-sm-6 px-3 pb-sm-6 pb-0">
                    <div class="position-relative">
                        <Logo />
                    </div>
                </div>
                <div class="">
                    <img src="@/assets/images/backgrounds/login-bg.svg" class="position-relative d-none d-lg-flex"
                        alt="login-background" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" xl="3" class="d-flex align-center justify-center">
                <div class="pa-sm-6 pa-4 w-100 ">
                    <h3 class="text-h4 font-weight-bold">Two Step Verification</h3>
                    <p class="text-subtitle-1 mt-2 text-13">
                        We sent a verification code to your mobile. Enter the code from the mobile in the field below.
                    </p>
                    <h6 class="text-subtitle-1 mt-3 font-weight-bold">
                        ******1234
                    </h6>
                    <!---Form---->
                    <TwoStepForm />
                    <!------->
                </div>
            </v-col>
        </v-row>
    </div>
</template>
