<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useEmailStore } from '@/stores/apps/email'; // Import the store
import type { EmailType } from '@/types/apps/EmailTypes';
import { format } from 'date-fns';
import { AlertCircleFilledIcon, AlertCircleIcon, SearchIcon, StarFilledIcon, StarIcon, TrashIcon } from 'vue-tabler-icons';

interface Props {
    emails: EmailType[];
}

const props = defineProps<Props>();
const store = useEmailStore();

const selectedEmail = ref<EmailType | null>(null);
const selectedEmails = ref<EmailType[]>([]);
const searchTerm = ref('');

// Computed property to filter emails by name
const filteredEmails = computed(() => {
    return props.emails.filter((email) => email.from.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

// Function to select an email
const selectEmail = (email: EmailType) => {
    selectedEmail.value = email;
    store.selectEmail(email);
};

const toggleEmailSelection = (email: EmailType) => {
    const index = selectedEmails.value.findIndex((e) => e.id === email.id);
    if (index === -1) {
        selectedEmails.value.push(email);
    } else {
        selectedEmails.value.splice(index, 1);
    }
};

// Function to delete selected emails
const deleteSelectedEmails = (email: EmailType) => {
    store.deleteEmail(email.id);
    selectedEmails.value = selectedEmails.value.filter((e) => e.id !== email.id);
};

const isAnyEmailSelected = computed(() => selectedEmails.value.length > 0);
onMounted(() => {
    if (props.emails.length > 0) {
        selectedEmail.value = props.emails[0];
        store.selectEmail(props.emails[0]);
    }
});

watch(
    () => props.emails,
    (newEmails) => {
        if (newEmails.length > 0 && !selectedEmail.value) {
            selectedEmail.value = newEmails[0];
            store.selectEmail(newEmails[0]);
        }
    },
    { immediate: true }
);

const toggleIcon = (email: EmailType): void => {
    store.toggleStarred(email.id); // Toggle the starred status
};

const toggleIconimportant = (email: EmailType): void => {
    store.toggleImportant(email.id); // Toggle the starred status
};
</script>

<template>
    <div>
        <!-- Search input -->
        <v-text-field
            v-model="searchTerm"
            label="Search Emails"
            variant="outlined"
            hide-details
            class="w-100 mb-1 px-6 pb-6"
            density="compact"
            @click.stop
        >
            <template v-slot:prepend-inner>
                <SearchIcon size="18" />
            </template>
        </v-text-field>

        <!-- Email list -->
        <perfect-scrollbar class="max-h-600">
            <div v-if="filteredEmails.length">
                <div
                    v-for="email in filteredEmails"
                    :key="email.id"
                    :class="['email-items cursor-pointer', { 'selected-email bg-hoverColor': email === selectedEmail }]"
                    @click="selectEmail(email)"
                >
                    <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                            <v-checkbox
                                hide-details
                                color="primary"
                                class="ms-n2"
                                :model-value="selectedEmails.includes(email)"
                                @change="toggleEmailSelection(email)"
                            ></v-checkbox>
                            <h6 class="text-14 font-weight-semibold email-title">
                                {{ email.from }}
                            </h6>
                        </div>
                        <v-chip
                            class="text-12"
                            :color="
                                email.label === 'Promotional'
                                    ? 'primary'
                                    : email.label === 'Social'
                                      ? 'error'
                                      : email.label === 'Health'
                                        ? 'success'
                                        : 'secondary'
                            "
                            variant="flat"
                            size="small"
                            label
                        >
                            {{ email.label }}
                        </v-chip>
                    </div>
                    <div class="ps-8 mt-n2">
                        <p class="textSecondary text-truncate text-14">{{ email.subject }}</p>
                        <div class="d-flex align-center justify-space-between mt-3">
                            <div class="d-flex align-center ga-2">
                                <!-- Toggle icon for each email based on its id -->
                                <button @click.stop="toggleIcon(email)">
                                    <StarFilledIcon v-if="email.starred" size="16" class="text-warning" />
                                    <StarIcon v-else size="16" />
                                </button>

                                <button @click.stop="toggleIconimportant(email)">
                                    <AlertCircleFilledIcon v-if="email.important" size="16" class="text-info" />
                                    <AlertCircleIcon v-else size="16" />
                                </button>
                                <button @click.stop="deleteSelectedEmails(email)">
                                    <TrashIcon
                                        size="16"
                                        v-if="selectedEmails.includes(email)"
                                        class="delete-icon"
                                    />
                                </button>
                            </div>
                            <small class="textSecondary">
                                {{ email.time ? format(new Date(email.time), 'E, MMM d') : 'N/A' }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="px-4 d-flex align-center">
                    <v-alert color="warning" variant="tonal" >
                        <template v-slot:prepend>
                            <AlertCircleIcon size="22" />
                        </template>
                        <div class="text-16">No Email found for this search</div>
                    </v-alert>
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>
