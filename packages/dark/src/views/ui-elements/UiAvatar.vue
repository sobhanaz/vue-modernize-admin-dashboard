<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { UserIcon, SearchIcon, FolderIcon, ContrastIcon } from 'vue-tabler-icons';
import BasicAvatar from '@/components/ui-components/avatar/BasicAvatar.vue';
import ImageAvatar from '@/components/ui-components/avatar/ImageAvatar.vue';
import LetterAvatar from '@/components/ui-components/avatar/LetterAvatar.vue';
import IconAvatar from '@/components/ui-components/avatar/IconAvatar.vue';
import VariantAvatar from '@/components/ui-components/avatar/VariantAvatar.vue';
import SizeAvatar from '@/components/ui-components/avatar/SizeAvatar.vue';


// theme breadcrumb
const page = ref({ title: 'Avatar' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Avatar',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Avatar">
                <v-row>
                    <!-- Basic Avatar -->
                    <!-- <v-col cols="12" lg="4">
                        <UiChildCard title="Basic Avatar">
                           <BasicAvatar/>
                        </UiChildCard>
                    </v-col> -->
                    <!-- Image Avatar -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Image Avatars">
                            <ImageAvatar/>
                        </UiChildCard>
                    </v-col>
                    <!-- Letter Avatar -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Letter Avatars">
                            <LetterAvatar/>
                        </UiChildCard>
                    </v-col>
                    <!-- Icon Avatar -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Icon Avatars">
                            <IconAvatar/>
                        </UiChildCard>
                    </v-col>
                    <!-- Variant Avatar -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Variant" class="pb-10">
                            <VariantAvatar/>
                        </UiChildCard>
                    </v-col>
                    <!-- Size Avatar -->
                    <v-col cols="12" lg="8">
                        <UiChildCard title="Sizes">
                            <SizeAvatar/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
