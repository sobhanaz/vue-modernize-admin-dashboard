<template>
    <div class="bg-primary mt-sm-8 overflow-hidden">
        <v-container class="">
            <v-row class="justify-space-between align-center">
                <v-col cols="12" md="5">
                    <h2 class="text-h2 font-weight-bold mb-6 pt-sm-0 pt-4">Build your app with our highly customizable Vue based
                        Dashboard</h2>
                    <div class="d-sm-flex gap-3">
                        <v-btn class="bg-surface text-primary btn-custom-md m-btn-full" size="large" target="_blank"
                            to="/auth/login" flat>Login</v-btn>
                        <v-btn class="btn-custom-md m-btn-full mt-sm-0 mt-4" size="large" variant="outlined" target="_blank"
                             to="/auth/register" flat>Register</v-btn>
                    </div>
                </v-col>
                <v-col cols="12" md="5" class="pb-0">
                    <div class="d-flex justify-md-end justify-center mb-n1">
                        <img src="@/assets/images/landingpage/background/c2a.png" alt="image" width="330" />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}
</style>