<template>
    <div>
        <v-container class="max-content">
            <div class="bg-lightprimary rounded-16 overflow-hidden position-relative">
                <v-row >
                    <v-col cols="12" lg="6" class="py-2">
                        <div class="py-lg-16 py-10 ps-96">
                            <h2 class="display-2 font-weight-bold textPrimary">
                                Develop with feature-rich<br />
                                Vuejs Dashboard
                            </h2>
                            <div class="d-sm-flex d-block gap-3 align-center my-6 position-relative z-1">
                                <v-btn color="primary" class="h-43 px-5 m-btn-full transform-none" flat href="/auth/login" target="_blank">Log in</v-btn>
                                <v-btn class="mt-sm-0 mt-4 h-43 px-5 m-btn-full" variant="outlined" target="_blank" href="/auth/register" color="primary" flat
                                    >Register</v-btn
                                >
                            </div>
                            <p class="text-14 textPrimary"><b>One-time purchase</b> - no recurring fees.</p>
                        </div>
                    </v-col>
                </v-row>
                <img src="@/assets/images/front-pages/background/design-collection.webp" class="position-absolute top-0 end-0 d-lg-block d-none rtlImg" width="900" height="365px" />
            </div>
        </v-container>
    </div>
</template>
