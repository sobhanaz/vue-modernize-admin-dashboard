<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

import MenusAnchor from "@/components/ui-components/menus/MenusAnchor.vue";
import MenusHover from "@/components/ui-components/menus/MenusHover.vue";
import MenusActivatorTooltip from "@/components/ui-components/menus/MenusActivatorTooltip.vue";
import MenusPopover from "@/components/ui-components/menus/MenusPopover.vue";

const page = ref({ title: "Menus" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Menus",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <UiParentCard title="Menus">
        <v-row>
            <v-col cols="12" sm="12" lg="6">
            <UiChildCard title="Anchor">
                <MenusAnchor />
            </UiChildCard>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
            <UiChildCard title="Hover">
                <MenusHover />
            </UiChildCard>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
            <UiChildCard title="Activator and tooltip">
                <MenusActivatorTooltip />
            </UiChildCard>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
            <UiChildCard title="Popover">
                <MenusPopover />
            </UiChildCard>
            </v-col>
        </v-row>    
    </UiParentCard>    
  </v-row>
</template>
