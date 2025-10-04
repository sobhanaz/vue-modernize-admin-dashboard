<script setup lang="ts">
import { ref, computed } from 'vue';
import { useInvoicestore } from '@/stores/apps/invoice';
import type { InvoiceType } from '@/types/apps/InvoiceTypes';
import { format } from 'date-fns';
import { CirclePlusIcon, TrashIcon } from 'vue-tabler-icons';
import { useRouter } from 'vue-router';

const store = useInvoicestore();
const valid = ref(false);
const router = useRouter();

// Calculate the next available ID based on existing invoices
const nextInvoiceId = computed(() => {
    if (store.invoice.length > 0) {
        return Math.max(...store.invoice.map((i) => i.id)) + 1;
    }
    return 1;
});

// Initialize a new invoice object with the next ID
const invoice = ref<InvoiceType>({
    id: nextInvoiceId.value,
    billFrom: '',
    billTo: '',
    billFromAddress: '',
    billToAddress: '',
    totalCost: 0,
    status: 'Pending',
    orderDate: new Date(),
    orders: [{ itemName: '', unitPrice: 0, units: 0, unitTotalPrice: 0 }]
});

const statuses = ['Pending', 'Shipped', 'Delivered'];
const rules = [(v: any) => !!v || 'This field is required'];
const vatRate = 0.1;

// Calculate subtotal
const subtotal = computed(() => {
    return (invoice.value.orders ?? []).reduce((sum, order) => {
        return sum + (order.unitPrice ?? 0) * (order.units ?? 0);
    }, 0);
});

// Calculate VAT (10%)
const vat = computed(() => {
    return subtotal.value * vatRate;
});

// Calculate grand total (Subtotal + VAT)
const grandTotal = computed(() => {
    return subtotal.value + vat.value;
});

const submitInvoice = () => {
    if (valid.value) {
        invoice.value.id = nextInvoiceId.value;
        invoice.value.orderDate = new Date();
        // Set totalCost to grandTotal before adding to the store
        invoice.value.totalCost = grandTotal.value;
        store.addInvoice(invoice.value);
        // Navigate to the invoice list page after successful submission
        router.push('/apps/invoice');
    } else {
        console.log('Form is invalid');
    }
};

const addOrderRow = () => {
    invoice.value.orders = invoice.value.orders ?? [];
    invoice.value.orders.push({
        itemName: '',
        unitPrice: 0,
        units: 0,
        unitTotalPrice: 0
    });
};

const deleteOrderRow = (index: number) => {
    invoice.value.orders = invoice.value.orders ?? [];
    invoice.value.orders.splice(index, 1);
};
</script>

<template>
    <v-card elevation="10">
        <v-card-item>
            <h5 class="text-20 mb-7">Add New Invoice Details</h5>
            <p class="textSecondary text-14">ID: {{ invoice.id }}</p>
            <p class="textSecondary text-14">
                Date:
                {{ invoice?.orderDate ? format(new Date(invoice?.orderDate), 'E, MMM dd, yyyy') : 'N/A' }}
            </p>
            <!-- Display the current date -->

            <v-form ref="formRef" v-model="valid" lazy-validation>
                <div class="bg-hoverColor mt-6 pa-6 rounded-md">
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-label class="font-weight-semibold pb-2">Bill From</v-label>
                            <v-text-field hide-details v-model="invoice.billFrom" :rules="rules" required />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-label class="font-weight-semibold pb-2">Bill To</v-label>
                            <v-text-field v-model="invoice.billTo" :rules="rules" required hide-details />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-label class="font-weight-semibold pb-2">Status</v-label>
                            <v-select v-model="invoice.status" hide-details :items="statuses" required :disabled="true" />
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-label class="font-weight-semibold pb-2">From Address</v-label>
                            <v-text-field v-model="invoice.billFromAddress" :rules="rules" required hide-details />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-label class="font-weight-semibold pb-2">Bill To Address</v-label>
                            <v-text-field v-model="invoice.billToAddress" :rules="rules" required hide-details />
                        </v-col>
                    </v-row>
                </div>

                <v-table class="invoice-table mt-6">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-14 text-no-wrap"></th>
                                <th class="text-14 text-no-wrap">Item Name</th>
                                <th class="text-14 text-no-wrap">Unit Price</th>
                                <th class="text-14 text-no-wrap">Units</th>
                                <th class="text-14 text-no-wrap">Total Cost</th>
                                <th class="text-14 text-no-wrap text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(inv, index) in invoice.orders" :key="index">
                                <td class="text-no-wrap">
                                    <v-btn flat icon color="lightprimary" size="x-small" @click="addOrderRow" class="ms-3">
                                        <CirclePlusIcon class="text-primary" size="18" />
                                        <v-tooltip activator="parent" location="bottom">Add Item</v-tooltip>
                                    </v-btn>
                                </td>
                                <td width="300" class="text-no-wrap">
                                    <v-text-field
                                        label="Item Name"
                                        hide-details
                                        v-model="inv.itemName"
                                        :rules="rules"
                                        required
                                        class="py-4"
                                        width="300"
                                    />
                                </td>
                                <td width="150" class="text-no-wrap">
                                    <v-text-field
                                        v-model="inv.unitPrice"
                                        label="Unit Price"
                                        :rules="rules"
                                        required
                                        hide-details
                                        width="150"
                                        type="number"
                                    />
                                </td>
                                <td width="150" class="text-no-wrap">
                                    <v-text-field
                                        v-model="inv.units"
                                        label="Units"
                                        :rules="rules"
                                        required
                                        hide-details
                                        width="150"
                                        type="number"
                                    />
                                </td>
                                <td width="150" class="text-14 text-no-wrap">
                                    {{ store.grandTotal(invoice) }}
                                </td>
                                <td class="text-end text-no-wrap">
                                    <NuxtLink class="cursor-pointer me-lg-3">
                                        <v-avatar color="lighterror" size="32" @click="deleteOrderRow(index)">
                                            <TrashIcon class="text-error" size="18" />
                                        </v-avatar>
                                        <v-tooltip activator="parent" location="bottom">Delete Invoice</v-tooltip>
                                    </NuxtLink>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>

                <v-row class="d-flex justify-end border-t mt-1">
                    <v-col cols="12" md="3" class="mt-3 ps-lg-16">
                        <div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4">
                            <p class="text-muted">Sub Total:</p>
                            <p class="text-16">{{ subtotal }}</p>
                        </div>
                        <div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4">
                            <p class="text-muted">Vat:</p>
                            <p class="text-16">{{ vat }}</p>
                        </div>
                        <div class="d-flex align-center justify-space-between text-14 font-weight-semibold">
                            <p class="text-muted">Grand Total:</p>
                            <p class="text-16">{{ grandTotal }}</p>
                        </div>
                    </v-col>
                </v-row>

                <div class="d-flex align-center justify-end ga-3">
                    <v-btn flat color="primary" @click="submitInvoice" class="mt-6">Create Invoice</v-btn>
                    <v-btn flat color="error" to="/apps/invoice" class="mt-6">Cancel</v-btn>
                </div>
            </v-form>
        </v-card-item>
    </v-card>
</template>
