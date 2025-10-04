<template>
    <div class="mt-sm-13 mt-8">
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Type your 6 digits security code</v-label>
        <div class="d-flex justify-space-between gap-3 mb-2 verification">
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
        </div>
        <v-btn color="primary" size="large" block flat>Verify My Account</v-btn>
        <h6 class="text-h6 mt-5 font-weight-regular">
            Didn't get the code?
            <RouterLink to="/" class="text-primary text-subtitle-1 text-decoration-none pl-1 font-weight-medium"> Resend</RouterLink>
        </h6>
    </div>
</template>