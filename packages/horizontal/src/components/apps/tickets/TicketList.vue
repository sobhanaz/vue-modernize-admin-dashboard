<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useTicketstore } from '@/stores/apps/tickets';
import { format } from 'date-fns';
import user3 from '@/assets/images/profile/user-3.jpg';
import { ListDetailsIcon, SearchIcon, TrashIcon } from 'vue-tabler-icons';
const store = useTicketstore();

// Fetch tickets and ensure tickets are available
onMounted(async () => {
    await store.fetchTicket();
    console.log('Fetched tickets:', getTickets.value);
    setTicketType(TicketTypeVal.value);
});

// Get tickets from the store
const getTickets = computed(() => store.ticket);

let FinalTickets = ref([...getTickets.value]);

const searchValue = ref('');
const TicketTypeVal = ref('total');

// Create New Ticket
const showCreateTicketModal = ref(false);
const newTicket = ref({ title: '', description: '', usernm: 'Liam' });

const createTicket = () => {
    if (newTicket.value.title && newTicket.value.description && newTicket.value.usernm) {
        const newId = getTickets.value.length + 1;
        const newTicketData = {
            Id: newId,
            ticketTitle: newTicket.value.title,
            ticketDescription: newTicket.value.description,
            AgentName: newTicket.value.usernm,
            Label: 'success',
            Status: 'Open',
            Date: new Date().toISOString(),
            thumb: user3
        };

        store.addTicket(newTicketData);
        setTicketType('total');
        newTicket.value.title = '';
        newTicket.value.description = '';
        showCreateTicketModal.value = false;
    }
};

// Function to set the ticket type and filter based on status
const setTicketType = (type: string) => {
    TicketTypeVal.value = type;
    console.log(`TicketTypeVal changed to: ${type}`);

    if (TicketTypeVal.value === 'total') {
        FinalTickets.value = [...getTickets.value];
    } else {
        FinalTickets.value = getTickets.value.filter((ticket) => {
            console.log('Filtering ticket:', ticket);
            return ticket.Status && ticket.Status.toLowerCase() === TicketTypeVal.value.toLowerCase();
        });
    }

    applySearchFilter();
};

// Function to apply search filter to tickets
const applySearchFilter = () => {
    if (searchValue.value) {
        FinalTickets.value = FinalTickets.value.filter((ticket) =>
            ticket.ticketTitle?.toLowerCase().includes(searchValue.value.toLowerCase())
        );
    }
};

watch(searchValue, applySearchFilter);

const totalTicketCount = computed(() => getTickets.value.length);
const pendingTicketCount = computed(() => getTickets.value.filter((ticket) => ticket.Status === 'Pending').length);
const openTicketCount = computed(() => getTickets.value.filter((ticket) => ticket.Status === 'Open').length);
const closedTicketCount = computed(() => getTickets.value.filter((ticket) => ticket.Status === 'Closed').length);

const handleDeleteTicket = (ticketId: number) => {
    store.deleteTicket(ticketId);
    setTicketType(TicketTypeVal.value);
};
</script>

<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="overflow-x-reposive">
                <v-row class="d-flex flex-nowrap">
                    <v-col cols="10" md="3" sm="6">
                        <div class="bg-lightprimary pa-7 text-center cursor-pointer rounded-md" @click="setTicketType('total')">
                            <h2 class="text-primary text-24">{{ totalTicketCount }}</h2>
                            <h6 class="text-primary text-h6">Total Tickets</h6>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div class="bg-lightwarning pa-7 text-center cursor-pointer rounded-md" @click="setTicketType('Pending')">
                            <h2 class="text-warning text-24">{{ pendingTicketCount }}</h2>
                            <h6 class="text-warning text-h6">Pending Tickets</h6>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div class="bg-lightsuccess pa-7 text-center cursor-pointer rounded-md" @click="setTicketType('Open')">
                            <h2 class="text-success text-24">{{ openTicketCount }}</h2>
                            <h6 class="text-success text-h6">Open Tickets</h6>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div class="bg-lighterror pa-7 text-center cursor-pointer rounded-md" @click="setTicketType('Closed')">
                            <h2 class="text-error text-24">{{ closedTicketCount }}</h2>
                            <h6 class="text-error text-h6">Closed Tickets</h6>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div class="">
                <div class="d-sm-flex justify-space-between align-center my-7">
                    <v-btn color="primary" @click="showCreateTicketModal = true">Create Ticket</v-btn>
                    <v-sheet width="255" class="mt-lg-0 mt-4">
                        <v-text-field
                            v-model="searchValue"
                            label="Search Invoice"
                            variant="outlined"
                            hide-details
                            class="w-100"
                            density="compact"
                        >
                            <template v-slot:prepend-inner>
                                <SearchIcon size="18" />
                            </template>
                        </v-text-field>
                    </v-sheet>
                </div>

                <!-- Render filtered tickets -->
                <v-table class="ticket-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-h6 text-no-wrap">Id</th>
                                <th class="text-h6 text-no-wrap">Ticket</th>
                                <th class="text-h6 text-no-wrap">Assigned To</th>
                                <th class="text-h6 text-no-wrap">Status</th>
                                <th class="text-h6 text-no-wrap">Date</th>
                                <th class="text-h6 text-no-wrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="ticket in FinalTickets"
                                :key="ticket.Id"
                                @click="store.SelectTicket(ticket.Id)"
                                v-if="FinalTickets.length > 0"
                            >
                                <td class="text-body-1">
                                    {{ ticket.Id }}
                                </td>
                                <td>
                                    <h6 class="text-h6">{{ ticket.ticketTitle }}</h6>
                                    <p style="max-width: 280px" class="text-body-1 textSecondary text-truncate">
                                        {{ ticket.ticketDescription }}
                                    </p>
                                </td>
                                <td>
                                    <div class="d-flex ga-3 align-center">
                                        <v-avatar size="40"> <img :src="ticket.thumb" :alt="ticket.thumb" width="40" /></v-avatar>
                                        <h6 class="text-h6 text-no-wrap">{{ ticket.AgentName }}</h6>
                                    </div>
                                </td>
                                <td>
                                    <v-chip rounded="md" class="font-weight-bold" :color="ticket.Label" size="small" label>{{
                                        ticket.Status
                                    }}</v-chip>
                                </td>
                                <td>
                                    <p class="text-muted text-body-1 text-no-wrap">
                                        {{ ticket?.Date ? format(new Date(ticket.Date), 'E, MMM d') : 'N/A' }}
                                    </p>
                                </td>
                                <td class="text-center">
                                    <v-btn
                                        icon
                                        color="lighterror"
                                        class="mx-auto"
                                        size="x-small"
                                        @click.stop="handleDeleteTicket(ticket.Id)"
                                    >
                                        <v-tooltip activator="parent" location="top">Delete Ticket</v-tooltip>

                                        <TrashIcon class="text-error" size="18" />
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>

    <!-- Add Ticket -->
    <!-- Create Ticket Modal -->
    <v-dialog v-model="showCreateTicketModal" max-width="500px">
        <v-card>
            <v-card-title class="pa-4 bg-primary">Create New Ticket</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Ticket Title" v-model="newTicket.title" required></v-text-field>
                    <v-textarea label="Ticket Description" v-model="newTicket.description" rows="4" required></v-textarea>
                    <v-select
                        label="Assign To"
                        v-model="newTicket.usernm"
                        :items="['Liam', 'Steve', 'Jack', 'Wiliam', 'Dona']"
                        variant="outlined"
                        required
                    ></v-select>
                </v-form>
            </v-card-text>
            <v-card-actions class="ga-3">
                <v-btn color="error" variant="flat" @click="showCreateTicketModal = false">Cancel</v-btn>
                <v-btn color="primary" variant="flat" @click="createTicket">Create</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
