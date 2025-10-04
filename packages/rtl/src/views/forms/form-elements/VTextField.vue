<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { MailIcon, LockIcon, EyeIcon } from 'vue-tabler-icons';

// define consts
const page = ref({ title: 'Textfield' });
const caption_email1 = ref('demo@company.com');
const caption_email2 = ref('demo@company.com');
const caption_email3 = ref('demo@company.com');
const validate_email1 = ref('demo.sd');
const validate_email2 = ref('demo.sd');
const multiline2 = ref('Default Value');
const select_sm = ref('Small');
const select_md = ref('Default');
const full_text = ref('Default');
const some_imp1 = ref('Default');
const some_imp2 = ref('Default');
const some_imp3 = ref('Default');

// rules for email textfield
const rules = ref({
    required: (value: any) => !!value || 'Required.',
    counter: (value: any) => value.length <= 20 || 'Max 20 characters',
    email: (value: any) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
    }
});

//  data of select
const items = ref(['None', 'demo@company.com', 'Judiya@company.com', 'taju_diya@company.com']);

// theme breadcrumb
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Textfield',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Textfield">
                <v-row>
                    <v-col cols="12" lg="6">
                        <!-- variant -->
                        <UiChildCard title="Variant">
                            <div>
                                <v-text-field label="Outlined" color="primary" placeholder="Placeholder" variant="outlined"></v-text-field>

                                <v-text-field label="Filled" color="primary" placeholder="Placeholder" variant="filled"></v-text-field>

                                <v-text-field
                                    label="Underlined"
                                    color="primary"
                                    placeholder="Placeholder"
                                    variant="underlined"
                                ></v-text-field>
                            </div>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- general -->
                        <UiChildCard title="General">
                            <div>
                                <v-text-field color="primary" placeholder="Email Address" variant="outlined"></v-text-field>

                                <v-text-field
                                    color="primary"
                                    placeholder="Email Address"
                                    value="demo@company.com"
                                    variant="outlined"
                                ></v-text-field>

                                <v-text-field color="primary" placeholder="demo@company.com" variant="outlined" disabled></v-text-field>
                            </div>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- with caption -->
                        <UiChildCard title="With Caption">
                            <v-text-field
                                color="primary"
                                v-model="caption_email1"
                                label="Email Address"
                                variant="outlined"
                                placeholder="email address"
                            >
                                <template v-slot:prepend-inner>
                                    <MailIcon stroke-width="1.5" size="22" />
                                </template>
                            </v-text-field>
                            <v-text-field color="primary" v-model="caption_email2" label="Email Address" variant="outlined"></v-text-field>
                            <v-text-field color="primary" v-model="caption_email3" label="Email Address" variant="outlined">
                                <template v-slot:append-inner>
                                    <MailIcon stroke-width="1.5" size="22" />
                                </template>
                            </v-text-field>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- with validation -->
                        <UiChildCard title="With Validation">
                            <v-text-field
                                color="error"
                                v-model="validate_email1"
                                :rules="[rules.required, rules.email]"
                                label="Email Address"
                                variant="outlined"
                                placeholder="demo"
                                error
                            >
                                <template v-slot:prepend-inner>
                                    <MailIcon stroke-width="1.5" size="22" />
                                </template>
                            </v-text-field>
                            <v-text-field
                                color="error"
                                error
                                v-model="validate_email2"
                                :rules="[rules.required, rules.email]"
                                label="Email Address"
                                variant="outlined"
                                placeholder="demo"
                            >
                            </v-text-field>
                            <v-text-field color="error" label="Email Address" variant="outlined"> </v-text-field>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- With Icon & Adornments -->
                        <UiChildCard title="With Icon & Adornments">
                            <v-text-field variant="outlined" color="primary" placeholder="Email address">
                                <template v-slot:prepend-inner>
                                    <MailIcon stroke-width="1.5" size="22" />
                                </template>
                            </v-text-field>
                            <v-text-field variant="outlined" color="primary" placeholder="Email address">
                                <template v-slot:prepend-inner>
                                    <LockIcon stroke-width="1.5" size="22" />
                                </template>
                                <template v-slot:append-inner>
                                    <EyeIcon stroke-width="1.5" size="22" />
                                </template>
                            </v-text-field>
                            <v-text-field placeholder="John Deo" color="primary" variant="outlined">
                                <template v-slot:prepend-inner>
                                    <span class="v-card-subtitle px-0">Mr</span>
                                    <v-divider class="ml-3 my-3 mt-n1" vertical></v-divider>
                                </template>
                            </v-text-field>
                            <v-text-field placeholder="Password" color="primary" variant="outlined">
                                <template v-slot:append-inner>
                                    <v-divider class="mr-3 my-3 mt-n1" vertical></v-divider>
                                    <span class="v-card-subtitle px-0">.com</span>
                                </template>
                            </v-text-field>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- Multiline -->
                        <UiChildCard title="Multiline">
                            <v-textarea
                                filled
                                auto-grow
                                label="Multiline Placeholder"
                                rows="1"
                                row-height="20"
                                color="primary"
                                variant="outlined"
                            ></v-textarea>
                            <v-textarea
                                filled
                                auto-grow
                                label="Multiline Placeholder"
                                variant="outlined"
                                rows="4"
                                color="primary"
                                v-model="multiline2"
                            ></v-textarea>
                            <v-textarea
                                clearable
                                clear-icon="mdi-close-circle"
                                variant="outlined"
                                label="Multiline Clearable"
                                rows="1"
                                row-height="20"
                                value="This is clearable text."
                                color="primary"
                            ></v-textarea>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- Select -->
                        <UiChildCard title="Select">
                            <v-select
                                :items="items"
                                color="primary"
                                label="Email Address"
                                variant="outlined"
                                density="comfortable"
                            ></v-select>
                            <v-select
                                :items="items"
                                color="primary"
                                label="Email Address"
                                variant="outlined"
                                density="compact"
                                v-model="select_sm"
                                outlined
                            ></v-select>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <!-- size -->
                        <UiChildCard title="Size">
                            <v-text-field variant="outlined" color="primary" placeholder="Default" label="Default"> </v-text-field>
                            <v-text-field variant="outlined" color="primary" placeholder="Default" density="compact"> </v-text-field>
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12">
                        <!-- Layout -->
                        <UiChildCard title="Layout">
                            <v-text-field
                                label="Label"
                                hint="Full Width!"
                                v-model="full_text"
                                persistent-hint
                                variant="outlined"
                                color="primary"
                            ></v-text-field>
                            <v-row class="mt-5">
                                <v-col cols="12" lg="4">
                                    <v-text-field
                                        label="None"
                                        hint="Some important text"
                                        v-model="some_imp1"
                                        persistent-hint
                                        variant="outlined"
                                        color="primary"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="4">
                                    <v-text-field
                                        label="Dense"
                                        hint="Some important text"
                                        v-model="some_imp2"
                                        persistent-hint
                                        variant="outlined"
                                        color="primary"
                                        density="compact"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="4">
                                    <v-text-field
                                        label="Normal"
                                        hint="Some important text"
                                        v-model="some_imp3"
                                        persistent-hint
                                        variant="outlined"
                                        color="primary"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
