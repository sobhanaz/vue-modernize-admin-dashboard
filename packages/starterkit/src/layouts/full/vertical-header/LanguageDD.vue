<script setup lang="ts">
import { ref } from 'vue';
import { languageDD } from '@/_mockApis/headerData';
import flag1 from '@/assets/images/flag/icon-flag-en.svg';
import flag2 from '@/assets/images/flag/icon-flag-ro.svg';
import flag3 from '@/assets/images/flag/icon-flag-zh.svg';
import flag4 from '@/assets/images/flag/icon-flag-fr.svg';
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- language DD -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" color="primary" v-bind="props">
                <v-avatar size="22">
                    <img v-if="$i18n.locale === 'en'" :src="flag1" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                    <img v-if="$i18n.locale === 'fr'" :src="flag4" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                    <img v-if="$i18n.locale === 'ro'" :src="flag2" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                    <img v-if="$i18n.locale === 'zh'" :src="flag3" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="200" elevation="10">
            <v-list class="theme-list">
                <v-list-item
                    v-for="(item, index) in languageDD"
                    :key="index"
                    color="primary"
                    :active="$i18n.locale == item.value"
                    class="d-flex align-center"
                    @click="() => ($i18n.locale = item.value)"
                >
                    <template v-slot:prepend>
                        <v-avatar size="22">
                            <img :src="item.avatar" :alt="item.avatar" width="22" height="22" class="obj-cover" />
                        </v-avatar>
                    </template>
                    <v-list-item-title class="text-subtitle-1 font-weight-regular">
                        {{ item.title }}
                        <span class="text-disabled text-subtitle-1 pl-2">({{ item.subtext }})</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu>
</template>
