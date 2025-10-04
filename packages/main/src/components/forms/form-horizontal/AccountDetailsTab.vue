<script setup lang="ts">
import { ref } from 'vue';
/* Password hide/show */
const show2 = ref(true);
const show3 = ref(true);
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-row class="align-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-weight-medium">User Name</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="John" hide-details />
                </v-col>
            </v-row>
            <v-row class="align-center">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-weight-medium">Password</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field
                        color="primary"
                        variant="outlined"
                        :type="show2 ? 'text' : 'password'"
                        placeholder="john.deo"
                        hide-details
                        class="text-subtitle-1"
                        :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="show2 = !show2"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6">
            <v-row class="align-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-weight-medium">Email</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field
                        color="primary"
                        variant="outlined"
                        type="email"
                        placeholder="john.deo"
                        suffix="@example.com"
                        hide-details
                    />
                </v-col>
            </v-row>
            <v-row class="align-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-weight-medium">Confirm</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field
                        color="primary"
                        variant="outlined"
                        :type="show3 ? 'text' : 'password'"
                        placeholder="john.deo"
                        hide-details
                        class="text-subtitle-1"
                        :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="show3 = !show3"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6" class="mt-n6">
            <v-row class="align-center">
                <v-col cols="12" sm="9" offset-sm="3">
                    <v-btn color="primary" flat>Submit</v-btn>
                    <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
