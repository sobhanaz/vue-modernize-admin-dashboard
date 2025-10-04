<template>
    <v-row >
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">Name</v-label>
            <VTextField  type="text" placeholder="John Deo" variant="outlined" hide-details ></VTextField>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">Company</v-label>
            <VTextField  type="text" placeholder="ACME Inc." hide-details ></VTextField>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">Email</v-label>
            <VTextField  type="email" placeholder="john.deo" suffix="@example.com" hide-details ></VTextField>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">Phone No</v-label>
            <VTextField  type="text" placeholder="412 2150 451" hide-details ></VTextField>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">Message</v-label>
             <VTextarea
                auto-grow
                placeholder="Hi, Do you  have a moment to talk Jeo ?"
                rows="2"
                color="primary"
                row-height="25"
                shaped
                hide-details
            ></VTextarea>
        </v-col>
        <v-col cols="12" class="">
            <v-btn color="primary" flat>Send</v-btn>
        </v-col>
    </v-row>
</template>
