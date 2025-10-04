<script setup lang="ts">
import { ref } from 'vue';
const select = ref('General Enquiry');
const items = ref(['General Enquiry', 'option 2', 'option 3', 'option 4']);
</script>
<template>
    <div class="py-12">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="12" lg="8">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-label class="mb-2 font-weight-medium">First Name *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Name" color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-label class="mb-2 font-weight-medium">Last Name *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Last Name" color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-label class="mb-2 font-weight-medium">Phone Number *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="xxx xxx xxxx" color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-label class="mb-2 font-weight-medium">Email *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Email address " color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Enquire related to *</v-label>
                            <v-select
                                v-model="select"
                                :items="items"
                                item-title="state"
                                item-value="abbr"
                                label="Select"
                                return-object
                                single-line
                                variant="outlined"
                                hide-details
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Message</v-label>
                            <v-textarea label="Write your message here..." variant="outlined" hide-details></v-textarea> </v-col
                        >
                        <v-col cols="12">
                            <v-btn color="primary" class="h-43 px-5" flat href="" target="_blank">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" lg="4">
                    <div class="bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative">
                        <img src="@/assets/images/front-pages/background/shape-right.png" class="position-absolute right-0 top-0 "/>
                        <h4 class="text-20 font-weight-bold mb-4">Reach Out Today</h4>
                        <p class="text-16 font-weight-regular position-relative z-1">Have questions or need assistance? We're just a message away.</p>
                        <v-divider class="my-10 opacity-10"></v-divider>
                        <h4 class="text-20 font-weight-bold mb-4">Our Location</h4>
                        <p class="text-16 font-weight-regular">Visit us in person or find our contact details to connect with us directly.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
