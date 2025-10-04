<template>
    <v-row>
        <v-col cols="12" md="6">
            <div class="mb-6">
                <v-label class="font-weight-medium mb-2">Twitter</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://twitter.com/abc" hide-details />
            </div>
            <div class="mb-6">
                <v-label class="font-weight-medium mb-2">Google</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://plus.google.com/abc" hide-details />
            </div>
            <div>
                <v-label class="font-weight-medium mb-2">Instagram</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://instagram.com/abc" hide-details />
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <div class="mb-6">
                <v-label class="font-weight-medium mb-2">Facebook</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://facebook.com/abc" hide-details />
            </div>
            <div class="mb-6">
                <v-label class="font-weight-medium mb-2">Linkedin</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://Linkedin.com/abc" hide-details />
            </div>
            <div>
                <v-label class="font-weight-medium mb-2">Quora</v-label>
                <v-text-field color="primary" variant="outlined" type="text" placeholder="https://Quora.com/abc" hide-details />
            </div>
        </v-col>
        <v-col cols="12">
            <v-btn color="primary" flat>Submit</v-btn>
            <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
        </v-col>
    </v-row>
</template>
