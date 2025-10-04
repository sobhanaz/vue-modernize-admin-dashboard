<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
import { MoonIcon, SunIcon } from 'vue-tabler-icons';

const theme = useTheme();
const customizer = useCustomizerStore();

// template skin color options
const themeColors = ref([
    {
        name: 'BLUE_THEME',
        bg: 'togglethemeBlue'
    },
    {
        name: 'DARK_BLUE_THEME',
        bg: 'togglethemeDarkBlue'
    }
]);
</script>

<template>
    <div class="position-relative">
        <v-item-group mandatory v-model="customizer.actTheme" class="d-flex">
            <div v-for="theme in themeColors" :key="theme.name">
                <v-item v-slot="{ toggle }" :value="theme.name">
                    <v-sheet rounded="circle" class="cursor-pointer text-center hover-btns" elevation="0" @click="toggle">
                        <v-btn icon :class="theme.bg" class="custom-hover-primary" size="small" variant="text" color="primary">
                            <SunIcon v-if="theme.bg == 'togglethemeBlue'" :class="theme.bg" height="22" />
                            <MoonIcon v-if="theme.bg == 'togglethemeDarkBlue'" :class="theme.bg" height="22" />
                        </v-btn>
                    </v-sheet>
                </v-item>
            </div>
        </v-item-group>
    </div>
</template>