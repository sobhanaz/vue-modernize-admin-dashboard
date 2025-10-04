
<script setup lang="ts">
import { ref } from 'vue';
const checkbox1 = ref(true);
</script>
<template>
    <v-row>
        <v-col cols="12" lg="12">
            <v-label class="mb-2 font-weight-medium">Email</v-label>
            <v-text-field
                hint="We'll never share your email with anyone else."
                persistent-hint
                variant="outlined"
                placeholder="Enter email"
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
            ></v-text-field>
            <div class="my-3">
                <v-checkbox density="compact" v-model="checkbox1" hide-details color="primary" label="Check Me Out!"></v-checkbox>
            </div>
            <v-btn color="primary" flat>Submit</v-btn>
        </v-col>
    </v-row>
</template>
