<script setup lang="ts">
import { ref,computed } from 'vue';
import { Form } from 'vee-validate';

const dialog = ref(false)
const name = ref('');
const inline = ref('home');
const isdefault = ref(false);
const rules: any = ref({
    name: (value: string) => value.length > 2 || 'More than two letters required'
});
</script>

<template>
    <v-dialog v-model="dialog"  activator="parent" max-width="600">
        <v-card>
            <v-card-text>
                <div class="d-flex justify-space-between">
                    <h3 class="text-h3">Add Billing Address</h3>
                    <v-btn icon @click="dialog = false"  size="small" flat><XIcon size="16" /></v-btn>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <Form class="py-3">
                    <v-row>
                        <v-col cols="12" lg="6">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="First Name"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-radio-group v-model="inline" inline hide-details="auto">
                                <v-radio label="Home" value="home" color="primary"></v-radio>
                                <v-radio label="Office" value="office" color="secondary"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="12" lg="12">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="Building No"
                                hide-details="auto"
                                variant="outlined"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="12">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="Street"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="City"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="State"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="Country"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="Area code"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="12">
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required, rules.name]"
                                label="Contact"
                                variant="outlined"
                                hide-details="auto"
                                :color="name.length > 2 ? 'success' : 'primary'"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="12">
                            <v-switch v-model="isdefault" label="Default"></v-switch>
                        </v-col>
                        <v-col cols="12" lg="12" class="text-right">
                            <v-btn color="error" type="submit" variant="text">Cancel</v-btn>
                            <v-btn color="primary" type="submit">Submit</v-btn>
                        </v-col>
                    </v-row>
                </Form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>