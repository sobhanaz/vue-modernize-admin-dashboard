<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useInvoicestore } from '@/stores/apps/invoice';
import { EditIcon, EyeIcon, ListDetailsIcon, SearchIcon, ShoppingBagIcon, SortAscendingIcon, TrashIcon, TruckIcon } from 'vue-tabler-icons';

const store = useInvoicestore();

const showConfirmation = ref(false);
const ticketIdToDelete = ref<number | null>(null);
onMounted(async () => {
    await store.fetchinvoice();
    setInvoiceType(InvoiceTypeVal.value);
});

const getInvoice = computed(() => store.invoice);
console.log('list', getInvoice);
let FinalInvoice = ref([...getInvoice.value]);

const searchValue = ref('');
const InvoiceTypeVal = ref('total');

const setInvoiceType = (type: string) => {
    InvoiceTypeVal.value = type;
    console.log(`InvoiceTypeVal changed to: ${type}`);

    if (InvoiceTypeVal.value === 'total') {
        FinalInvoice.value = [...getInvoice.value];
    } else {
        FinalInvoice.value = getInvoice.value.filter((ticket: any) => {
            console.log('Filtering ticket:', ticket);
            return ticket.status && ticket.status.toLowerCase() === InvoiceTypeVal.value.toLowerCase();
        });
    }
    applySearchFilter();
};

const applySearchFilter = () => {
    if (InvoiceTypeVal.value === 'total') {
        FinalInvoice.value = [...getInvoice.value];
    } else {
        FinalInvoice.value = getInvoice.value.filter((ticket: any) => {
            return ticket.status && ticket.status.toLowerCase() === InvoiceTypeVal.value.toLowerCase();
        });
    }

    if (searchValue.value) {
        FinalInvoice.value = FinalInvoice.value.filter((invoice: any) =>
            invoice.billFrom?.toLowerCase().includes(searchValue.value.toLowerCase())
        );
    }
};

watch(searchValue, applySearchFilter);

const calculateTotalCost = (unitPrice: number | undefined, units: number | undefined): number => {
    return (unitPrice ?? 0) * (units ?? 0);
};

const totalInvoiceCount = computed(() => getInvoice.value.length);
const ShippedInvoiceCount = computed(() => getInvoice.value.filter((ticket: any) => ticket.status === 'Shipped').length);
const DeliveredInvoiceCount = computed(() => getInvoice.value.filter((ticket: any) => ticket.status === 'Delivered').length);
const PendingInvoiceCount = computed(() => getInvoice.value.filter((ticket: any) => ticket.status === 'Pending').length);

const handleDeleteTicket = (ticketId: number) => {
    ticketIdToDelete.value = ticketId;
    showConfirmation.value = true;
};
// Function to confirm deletion
const confirmDelete = () => {
    if (ticketIdToDelete.value !== null) {
        store.deleteinvoice(ticketIdToDelete.value);
        ticketIdToDelete.value = null;
        showConfirmation.value = false;
        setInvoiceType(InvoiceTypeVal.value);
    }
};
</script>

<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="overflow-x-reposive">
                <v-row class="d-flex flex-nowrap">
                    <v-col cols="10" md="3" sm="6">
                        <div
                            :class="[
                                'pa-6 d-flex ga-3 align-center cursor-pointer rounded-lg bg-lightprimary',
                                { '': InvoiceTypeVal === 'total' }
                            ]"
                            @click="setInvoiceType('total')"
                        >
                            <div class="d-flex ga-3 align-center">
                                <v-avatar size="38" class="bg-primary rounded-md">
                                    <ListDetailsIcon size="20" />
                                </v-avatar>
                                <div>
                                    <h6 class="text-h6 font-weight-medium ">Total</h6>
                                    <p class="text-14 lh-normal textSecondary" v-if="totalInvoiceCount == 0">0 invoices</p>
                                    <p class="text-14 lh-normal textSecondary" v-else>{{ totalInvoiceCount }} invoices</p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div
                            :class="[
                                'pa-6 d-flex ga-3 align-center cursor-pointer rounded-lg bg-lightsecondary',
                                { '': InvoiceTypeVal === 'Shipped' }
                            ]"
                            @click="setInvoiceType('Shipped')"
                        >
                            <div class="d-flex ga-3 align-center">
                                <v-avatar size="38" class="bg-secondary rounded-md">
                                    <ShoppingBagIcon size="20" />
                                </v-avatar>
                                <div>
                                    <h6 class="text-h6 font-weight-medium ">Shipped</h6>
                                    <p class="text-14 lh-normal textSecondary" v-if="ShippedInvoiceCount == 0">0 invoices</p>
                                    <p class="text-14 lh-normal textSecondary" v-else>{{ ShippedInvoiceCount }} invoices</p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div
                            :class="[
                                'pa-6 d-flex ga-3 align-center cursor-pointer rounded-lg bg-lightsuccess',
                                { '': InvoiceTypeVal === 'Delivered' }
                            ]"
                            @click="setInvoiceType('Delivered')"
                        >
                            <div class="d-flex ga-3 align-center">
                                <v-avatar size="38" class="bg-success rounded-md">
                                    <TruckIcon size="20" />
                                </v-avatar>
                                <div>
                                    <h6 class="text-h6 font-weight-medium ">Delivered</h6>
                                    <p class="text-14 lh-normal textSecondary" v-if="DeliveredInvoiceCount == 0">0 invoices</p>
                                    <p class="text-14 lh-normal textSecondary" v-else>{{ DeliveredInvoiceCount }} invoices</p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="10" md="3" sm="6">
                        <div
                            :class="[
                                'pa-6 d-flex ga-3 align-center cursor-pointer rounded-lg bg-lightwarning',
                                { '': InvoiceTypeVal === 'Pending' }
                            ]"
                            @click="setInvoiceType('Pending')"
                        >
                            <div class="d-flex ga-3 align-center">
                                <v-avatar size="38" class="bg-warning rounded-md">
                                    <SortAscendingIcon size="20" />
                                </v-avatar>
                                <div>
                                    <h6 class="text-h6 font-weight-medium ">Pending</h6>
                                    <p class="text-14 lh-normal textSecondary" v-if="PendingInvoiceCount == 0">0 invoices</p>
                                    <p class="text-14 lh-normal textSecondary" v-else>{{ PendingInvoiceCount }} invoices</p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="">
                <div class="d-sm-flex justify-space-between align-center my-7">
                    <v-sheet width="255" class="mb-lg-0 mb-4">
                        <v-text-field
                            v-model="searchValue"
                            label="Search Invoice"
                            variant="outlined"
                            hide-details
                            class="w-100"
                            density="compact"
                        >
                            <template v-slot:prepend-inner>
                                <SearchIcon size="18"/>
                            </template>
                        </v-text-field>
                    </v-sheet>
                    <v-btn color="primary" flat to="/apps/invoice/create">New Invoice</v-btn>
                </div>

                <!-- Render filtered tickets -->
                <v-table class="invoice-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-14">
                                    <v-checkbox hide-details color="primary"></v-checkbox>
                                </th>
                                <th class="text-14 text-no-wrap">Id</th>
                                <th class="text-14 text-no-wrap">Bill From</th>
                                <th class="text-14 text-no-wrap">Bill To</th>
                                <th class="text-14 text-no-wrap">Total Cost</th>
                                <th class="text-14 text-no-wrap">Status</th>
                                <th class="text-14 text-no-wrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="invoice in FinalInvoice" :key="invoice.id">
                                <td>
                                    <v-checkbox color="primary" hide-details></v-checkbox>
                                </td>
                                <td class="text-14 font-weight-semibold">{{ invoice.id }}</td>
                                <td class="text-14 font-weight-semibold text-no-wrap">
                                    {{ invoice.billFrom }}
                                </td>
                                <td class="text-14 text-no-wrap">{{ invoice.billTo }}</td>
                                <td class="text-14 text-no-wrap">{{ store.grandTotal(invoice) }}</td>
                                <td>
                                    <v-chip
                                        rounded="md"
                                        :color="
                                            invoice.status === 'Shipped'
                                                ? 'secondary'
                                                : invoice.status === 'Delivered'
                                                  ? 'success'
                                                  : invoice.status === 'Pending'
                                                    ? 'warning'
                                                    : 'primary'
                                        "
                                        variant="flat"
                                        size="small"
                                        label
                                        >{{ invoice.status }}</v-chip
                                    >
                                </td>
                                <td>
                                    <div class="d-flex ga-3 align-center justify-center">
                                        <RouterLink :to="`/apps/invoice/edit/${invoice.id}`">
                                            <v-avatar color="lightsuccess" size="32">
                                                <EditIcon class="text-success" size="18" />
                                            </v-avatar>
                                            <v-tooltip activator="parent" location="bottom">Edit Invoice</v-tooltip>
                                        </RouterLink>

                                        <RouterLink :to="`/apps/invoice/details/${invoice.id}`">
                                            <v-avatar color="lightprimary" size="32">
                                                <EyeIcon class="text-primary" size="18" />
                                            </v-avatar>
                                            <v-tooltip activator="parent" location="bottom">View Invoice</v-tooltip>
                                        </RouterLink>

                                        <RouterLink to="" @click.stop="handleDeleteTicket(invoice.id)" class="cursor-pointer">
                                            <v-avatar color="lighterror" size="32">
                                                <TrashIcon class="text-error" size="18" />
                                            </v-avatar>
                                            <v-tooltip activator="parent" location="bottom">Delete Invoice</v-tooltip>
                                        </RouterLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="showConfirmation" max-width="500px">
        <v-card>
            <v-card-title class="pa-4 bg-primary">Delete Invoice</v-card-title>
            <v-card-text>
                <h5 class="text-16">Are you sure you want to delete this invoice?</h5>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" class="px-4" variant="flat" @click="confirmDelete">Yes, Delete</v-btn>
                <v-btn color="error" variant="flat" class="px-4" @click="showConfirmation = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
