<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';
const email = ref('');
const rules = ref({
    required: (value: any) => !!value || 'Required.',
    counter: (value: any) => value.length <= 20 || 'Max 20 characters',
    email: (value: any) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
    },
    firstname: (value: any) => value.length > 2 || 'More than two letters required',
    lastname: (value: any) => value.length > 2 || 'More than two letters required'
});

const password = ref('');

const pwdrules = ref({
    required: (value: any) => !!value || 'Required.',
    min: (v: any) => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => `The email and password you entered don't match`
});

</script>
<template>
    <Form>
        <v-row>
            <v-col cols="12">
                <v-label class="mb-2 font-weight-medium">Email</v-label>
                <v-text-field v-model="email" :rules="[rules.required, rules.email]" variant="outlined" hide-details="auto"
                   ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="mb-2 font-weight-medium">Password</v-label>
                <v-text-field color="primary" v-model="password" :rules="[pwdrules.required, pwdrules.min]" hide-details="auto"
                    variant="outlined" hint="At least 8 characters" type="password" />
            </v-col>
            <v-col cols="12">
                <div class="d-flex justify-sm-end"><v-btn type="submit" class="submit-btn mt-2" flat
                        color="primary">Submit</v-btn></div>
            </v-col>
        </v-row>
    </Form>
</template>
