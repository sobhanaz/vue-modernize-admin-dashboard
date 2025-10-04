<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
const { xs, lgAndUp } = useDisplay();

const sDrawer = ref(false); // Sidebar drawer for mobile
const eDrawer = ref(false); // Email details drawer
const selectedEmail = ref(null); // To store the selected email details

// Method to select an email and open the email details drawer
const openEmailDetails = (email:any) => {
  selectedEmail.value = email; // Store the selected email
  eDrawer.value = true; // Open the email details drawer
};

</script>

<template>
  <div class="d-flex mainbox">
    <div class="compose pa-6 " v-if="lgAndUp">
      <slot name="mailCompose"></slot>
    </div>

    <div class="mail-list">
     
      <v-divider class="d-lg-none d-block" />
      <slot name="mailList" :openEmailDetails="openEmailDetails"></slot> <!-- Pass the method as a slot prop -->
    </div>

    <div class="mail-details pa-6  d-md-block d-none">
      <slot name="mailDetail"></slot>
    </div>
  </div>

</template>

<style lang="scss">
.compose {
  max-width: 235px;
  width: 100%;
}
.mail-list {
  max-width: 340px;
  width: 100%;
}
.mail-details {
  width: 100%;
}

@media screen and (max-width: 991px) {
  .mail-list {
    max-width: 100%;
  }
}
@media screen and (min-width: 991px) {
  .compose,.mail-list{
    border-inline-end-width: thin !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }
}
</style>
