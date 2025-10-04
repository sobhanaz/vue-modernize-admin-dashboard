<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

//Components
import BasicLayout from '../../components/forms/form-horizontal/BasicLayout.vue';
import BasicWithIcons from '../../components/forms/form-horizontal/BasicWithIcons.vue';
import FormSeprator from '../../components/forms/form-horizontal/FormSeprator.vue';
import FormLabelAlign from '../../components/forms/form-horizontal/FormLabelAlign.vue';
import Collapsible from '../../components/forms/form-horizontal/Collapsible.vue';
import PersonalInfoTab from '../../components/forms/form-horizontal/PersonalInfoTab.vue';
import AccountDetailsTab from '../../components/forms/form-horizontal/AccountDetailsTab.vue';
import SocialLinksTab from '../../components/forms/form-horizontal/SocialLinksTab.vue';

/*tab*/
const tab = ref(null);

// theme breadcrumb
const page = ref({ title: 'Horizontal Form' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Horizontal Form',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
   <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
   <v-row>
        <v-col cols="12" md="6">
            <UiParentCard title="Basic Layout">
                <BasicLayout/>
            </UiParentCard>           
        </v-col>
        <v-col cols="12" md="6">
            <UiParentCard title="Basic with Icons">
                <BasicWithIcons/>
            </UiParentCard>           
        </v-col>
        <v-col cols="12" md="6">
            <FormSeprator/>        
        </v-col>
        <v-col cols="12" md="6">
            <FormLabelAlign/>        
        </v-col>
        <v-col cols="12">
            <Collapsible/>        
        </v-col>
        <v-col cols="12">
            <h5 class="text-h5 mb-6 mt-3">Form with Tabs</h5>
            <v-card elevation="10" class=" " rounded="md">
                <v-tabs v-model="tab" bg-color="transparent" color="primary">
                    <v-tab value="PersonalInfo" class="text-medium-emphasis">Personal Info</v-tab>
                    <v-tab value="AccountDetails" class="text-medium-emphasis">Account Details</v-tab>
                    <v-tab value="SocialLinks" class="text-medium-emphasis">Social Links</v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                    <v-window v-model="tab">
                        <v-window-item value="PersonalInfo">
                            <PersonalInfoTab/>
                        </v-window-item>
                        <v-window-item value="AccountDetails">
                            <AccountDetailsTab/>
                        </v-window-item>
                        <v-window-item value="SocialLinks">
                            <SocialLinksTab/>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>    
        </v-col>
   </v-row>           
</template>
