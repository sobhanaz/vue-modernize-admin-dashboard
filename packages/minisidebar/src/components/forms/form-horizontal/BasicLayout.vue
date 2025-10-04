
<template>
    <v-row class="align-center mb-3">
        <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
            <v-label class=" font-weight-medium">Name</v-label>
        </v-col>
        <v-col cols="12" sm="9">
            <v-text-field color="primary" variant="outlined" type="text" placeholder="John Deo" hide-details />
        </v-col>
    </v-row>
    <v-row class="align-center mb-3">
        <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
            <v-label class=" font-weight-medium">Company</v-label>
        </v-col>
        <v-col cols="12" sm="9">
            <v-text-field color="primary" variant="outlined" type="text" placeholder="ACME Inc." hide-details />
        </v-col>
    </v-row>
    <v-row class="align-center mb-3">
        <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
            <v-label class=" font-weight-medium">Email</v-label>
        </v-col>
        <v-col cols="12" sm="9">
            <v-text-field color="primary" variant="outlined" type="email" placeholder="john.deo" suffix="@example.com" hide-details />
        </v-col>
    </v-row>
    <v-row class="align-center mb-3">
        <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
            <v-label class=" font-weight-medium">Phone No</v-label>
        </v-col>
        <v-col cols="12" sm="9">
            <v-text-field color="primary" variant="outlined" type="text" placeholder="412 2150 451" hide-details />
        </v-col>
    </v-row>
    <v-row class="align-center mb-3">
        <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
            <v-label class=" font-weight-medium">Message</v-label>
        </v-col>
        <v-col cols="12" sm="9">
            <v-textarea
                auto-grow
                variant="outlined"
                placeholder="Hi, Do you  have a moment to talk Jeo ?"
                rows="2"
                color="primary"
                row-height="25"
                shaped
                hide-details
            ></v-textarea>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="9" offset-sm="3">
           <v-btn color="primary" flat>Send</v-btn>
        </v-col>
    </v-row>
</template>
