<template>
    <v-row>
        <v-col cols="12" lg="12">
            <v-label class="mb-2 font-weight-medium">Name</v-label>
            <v-text-field variant="outlined" color="primary" disabled></v-text-field>
            <v-label class="mb-2 font-weight-medium">Email</v-label>
            <v-text-field
                hint="We'll never share your email with anyone else."
                persistent-hint
                variant="outlined"
                placeholder="Enter email"
                disabled
                color="primary"
            ></v-text-field>
            <v-label class="mb-2 font-weight-medium mt-5">Password</v-label>
            <v-text-field
                persistent-hint
                variant="outlined"
                hide-details
                type="password"
                placeholder="Enter password"
                color="primary"
                disabled
            ></v-text-field>
            <v-btn color="primary" disabled class="mt-6" flat>Submit</v-btn>
        </v-col>
    </v-row>
</template>
