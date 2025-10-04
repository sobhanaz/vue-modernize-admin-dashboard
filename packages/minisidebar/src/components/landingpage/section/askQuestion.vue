<template>
    <div class="pt-sm-14 pt-10 pb-sm-16 pb-10">
        <v-container class="">
            <v-row class="justify-center">
                <v-col cols="12" lg="6" sm="10">
                    <v-card elevation="10">
                        <div class="ticket text-center px-sm-6 px-4 py-sm-10 py-6">
                            <h3 class="text-h3">Haven't found an answer to your question?</h3>
                            <p class="text-body-1 mt-2">Connect with us either on discord or email us</p>
                            <div class="mt-10 mb-3 d-sm-flex justify-center gap-4">
                                <v-btn
                                    href="https://discord.gg/XujgB8ww4n"
                                    target="_blank"
                                    color="primary"
                                    size="large"
                                    class="m-btn-full btn-custom-md"
                                    flat
                                    >Ask on Discord</v-btn
                                >
                                <v-btn
                                    href="https://adminmart.com/support"
                                    target="_blank"
                                    color="secondary"
                                    variant="outlined"
                                    class="lp-btn-shadow m-btn-full btn-custom-md mt-sm-0 mt-4"
                                    size="large"
                                    >Submit ticket</v-btn
                                >
                            </div>
                        </div>
                    </v-card>
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