<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useEmailStore } from "@/stores/apps/email"; // Adjust the path as necessary
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";


import type { EmailType } from "@/types/apps/EmailTypes";
import { useDisplay } from "vuetify";
import AppEmailCard from "@/components/shared/AppEmailCard.vue";
import EmailCompose from "@/components/apps/email/EmailCompose.vue";
import EmailListing from "@/components/apps/email/EmailListing.vue";
import EmailDetail from "@/components/apps/email/EmailDetail.vue";

const store = useEmailStore();
const page = ref({ title: "Email App" });
const breadcrumbs = ref([
  { text: "Dashboard", disabled: false, href: "#" },
  { text: "Email App", disabled: true, href: "#" },
]);

const selectedFilter = ref<string>("inbox"); // Set default to inbox

// Fetch emails when the component mounts
onMounted(async () => {
  await store.fetchEmails();
  if (store.emails.length > 0) {
    // Select the first email if there are any emails
    store.selectEmail(store.emails[0]);
  }
});

const filteredEmails = computed(() => {
  return selectedFilter.value
    ? store.emails.filter(
        (email) => email[selectedFilter.value as keyof EmailType]
      )
    : store.emails;
});

const handleFilterChange = (filterName: string) => {
  selectedFilter.value = filterName;
};

const isMobileDrawerOpen = ref(false);
const isMobileEmailCategory = ref(false);
const { xs, lgAndUp } = useDisplay();
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>

  <v-card elevation="10">
    <AppEmailCard>
      <template v-slot:mailCompose>
        <EmailCompose @filter-change="handleFilterChange" />
      </template>

      <template v-slot:mailList>
        <div class="pa-6 pb-0">
        <v-btn
          block
          @click="isMobileEmailCategory = !isMobileEmailCategory"
          color="primary"
          class="d-lg-none d-md-flex d-sm-flex"
        >
          <Menu2Icon size="20" class="mr-2" /> Email Category
        </v-btn>
      </div>
        <EmailListing :emails="filteredEmails" class="d-md-block d-none" />
        <EmailListing
          :emails="filteredEmails"
          class="d-md-none d-block"
          @click="isMobileDrawerOpen = !isMobileDrawerOpen"
        />
      </template>

      <template v-slot:mailDetail>
        <EmailDetail class="d-md-block d-none" />
      </template>

      <template v-slot:mobileLeftContent>
        <EmailCompose @filter-change="handleFilterChange" />
      </template>
    </AppEmailCard>
  </v-card>
  <!-- Drawer for Email Detail mobile view -->
  <v-navigation-drawer
    v-model="isMobileDrawerOpen"
    location="right"
    temporary
    width="350"
  >
    <v-card-text class="pa-6">
      <EmailDetail />
    </v-card-text>
  </v-navigation-drawer>

  <!-- Drawer for Email Detail mobile view -->
  <v-navigation-drawer
    v-if="!lgAndUp"
    v-model="isMobileEmailCategory"
    location="left"
    temporary
    width="350"
  >
    <v-card-text class="pa-6">
      <EmailCompose @filter-change="handleFilterChange" />
    </v-card-text>
  </v-navigation-drawer>
</template>
