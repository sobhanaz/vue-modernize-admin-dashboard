<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { HeartIcon, UsersIcon, TrashIcon } from 'vue-tabler-icons';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import { useFollowersStore } from '@/stores/apps/userprofile/followers';

const store = useFollowersStore();

onMounted(() => {
    store.fetchFollowers();
});

const getfollowers: any = computed(() => {
    return store.followers;
});
const searchValue = ref('');
// dropdown data
const actionDD = ref([
    { title: 'Favorite', icon: HeartIcon },
    { title: 'Edit Friend List', icon: UsersIcon },
    { title: 'Remove', icon: TrashIcon }
]);
const page = ref({ title: 'Social Profile' });

const filteredCards = computed(() => {
    return getfollowers.value.filter((card: any) => {
        return card.name.toLowerCase().includes(searchValue.value.toLowerCase());
    });
});

const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Social Profile',
        disabled: true,
        href: '#'
    }
]);

</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <ProfileBanner />
    <v-row class="justify-content-end mt-5">
        <v-col cols="12">
            <div class="d-sm-flex align-center mb-5">
                <h3 class="text-h3">
                    Followers
                    <v-chip size="small" class="ml-2 elevation-0" variant="elevated" color="secondary">{{ filteredCards.length }}</v-chip>
                </h3>
                <v-sheet width="250" class="ml-0 ml-sm-auto mt-3 mt-sm-0">
                    <v-text-field
                        color="primary"
                        hide-details
                        variant="outlined"
                        placeholder="Search Followers"
                        density="compact"
                        prepend-inner-icon="mdi-magnify"
                        v-model="searchValue"
                    >
                    </v-text-field>
                </v-sheet>
            </div>

            <v-row>
                <v-col cols="12" md="4" sm="6" v-for="(card, i) in filteredCards" :key="i">
                    <v-card elevation="10">
                        <v-card-text>
                            <div class="d-flex align-center gap-3">
                                <v-avatar size="40">
                                    <img :src="card.avatar" :alt="card.avatar" width="40" />
                                </v-avatar>
                                <div class="w-50">
                                    <h6 class="text-h6">{{ card.name }}</h6>
                                    <span class="text-truncate d-flex align-center gap-2">
                                        <mapPinIcon size="14" />
                                        <span class="text-truncate w-50">{{ card.location }}</span>
                                    </span>
                                </div>
                                <div class="ml-auto">

                                    <v-btn v-if="card.follow == 1" variant="outlined" color="primary"> Followed</v-btn>
                                    <v-btn v-else variant="flat" color="primary"> Follow</v-btn>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
