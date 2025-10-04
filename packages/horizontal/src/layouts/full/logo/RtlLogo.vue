<script setup>
import { computed } from "vue";
import LogoLightRtl from "./LogoLightRtl.vue";
import LogoDarkRtl from "./LogoDarkRtl.vue";
import { useCustomizerStore } from "@/stores/customizer";

const customizer = useCustomizerStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
    customizer.actTheme === "DARK_BLUE_THEME" ||
    customizer.actTheme === "DARK_AQUA_THEME" ||
    customizer.actTheme === "DARK_ORANGE_THEME" ||
    customizer.actTheme === "DARK_PURPLE_THEME" ||
    customizer.actTheme === "DARK_GREEN_THEME" ||
    customizer.actTheme === "DARK_CYAN_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});


</script>
<template>

  <LogoLightRtl v-if="dark" />
  <LogoDarkRtl v-else />
</template>
