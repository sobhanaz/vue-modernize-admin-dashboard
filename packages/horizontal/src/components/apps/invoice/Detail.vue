<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useInvoicestore } from "@/stores/apps/invoice";
import type { InvoiceType } from "@/types/apps/InvoiceTypes";
import Logo from "@/layouts/full/logo/Logo.vue";

const route = useRoute();
const store = useInvoicestore();

const invoiceId = route.params.id;

const invoiceDetail = ref<InvoiceType | null>(null);


const vatRate = 0.1;

// Calculate subtotal
const subtotal = computed(() => {
  return (invoiceDetail.value?.orders ?? []).reduce((sum, order) => {
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


onMounted(async () => {

  await store.fetchinvoice();

  invoiceDetail.value =
  store.invoice.find((invoice) => invoice.id === Number(invoiceId)) || null;

  if (!invoiceDetail.value) {
    console.error("Invoice not found");
  }
});

const calculateTotalCost = (
  unitPrice: number | undefined,
  units: number | undefined
): number => {
  return (unitPrice ?? 0) * (units ?? 0);
};
</script>

<template>
  <v-card elevation="10">
    <v-card-item>
      <div v-if="invoiceDetail">
        <div class="d-flex justify-space-between align-content-start mb-6">
          <Logo />
          <div>
            <v-chip
              rounded="sm"
              :color="
                invoiceDetail.status === 'Shipped'
                  ? 'success'
                  : invoiceDetail.status === 'Delivered'
                  ? 'secondary'
                  : invoiceDetail.status === 'Pending'
                  ? 'warning'
                  : 'primary'
              "
              variant="flat"
              size="small"
              label
              >{{ invoiceDetail.status }}</v-chip
            >
            <h5 class="text-20 text-end mt-1"># {{ invoiceDetail.id }}</h5>
          </div>
        </div>
        <div class="mb-6">
          <v-row>
            <v-col cols="12" lg="6">
              <h6 class="text-h6">Bill From</h6>
              <div class="text-14 textSecondary lh-normal">
                <p>{{ invoiceDetail.billFrom }}</p>
                <p>{{ invoiceDetail.billFromEmail }}</p>
                <p>{{ invoiceDetail.billFromAddress }}</p>
                <p>{{ invoiceDetail.billFromPhone }}</p>
              </div>
            </v-col>
            <v-col cols="12" lg="6" class="text-end">
              <h6 class="text-h6">Bill To</h6>
              <div class="text-14 textSecondary lh-normal">
                <p>{{ invoiceDetail.billTo }}</p>
                <p>{{ invoiceDetail.billToEmail }}</p>
                <p>{{ invoiceDetail.billToAddress }}</p>
                <p>{{ invoiceDetail.billToPhone }}</p>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-table class="invoice-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-14 text-no-wrap">Item Name</th>
                <th class="text-14 text-no-wrap">Unit Price</th>
                <th class="text-14 text-no-wrap">Unit</th>
                <th class="text-14 text-no-wrap text-end">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="invoice in invoiceDetail.orders"
                :key="invoice.itemName"
              >
                <td class="text-14 font-weight-semibold">
                  {{ invoice.itemName }}
                </td>
                <td class="text-14">{{ invoice.unitPrice }}</td>
                <td class="text-14">{{ invoice.units }}</td>
                <td class="text-14 font-weight-semibold text-end">
                  {{ calculateTotalCost(invoice.unitPrice, invoice.units) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
        <v-row class="d-flex justify-end border-t mt-1">
          <v-col cols="12" md="3" class="mt-3">
            <div
              class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"
            >
              <p class="text-muted">Sub Total:</p>
              <p class="text-16">{{ subtotal }}</p>
            </div>
            <div
              class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"
            >
              <p class="text-muted">Vat:</p>
              <p class="text-16">{{ vat }}</p>
            </div>
            <div
              class="d-flex align-center justify-space-between text-14 font-weight-semibold"
            >
              <p class="text-muted">Grand Total:</p>
              <p class="text-16">{{ grandTotal }}</p>
            </div>
          </v-col>
        </v-row>
        <div class="d-flex ga-3 justify-end mt-6">
          <v-btn
            color="warning"
            :to="`/apps/invoice/edit/${invoiceDetail.id}`"
            flat
            >Edit Invoice</v-btn
          >
          <v-btn to="/apps/invoice" color="primary" flat
            >Back To Invoice List</v-btn
          >
        </div>
      </div>
      <div v-else>
        <p>No Data</p>
      </div>
    </v-card-item>
  </v-card>
</template>
