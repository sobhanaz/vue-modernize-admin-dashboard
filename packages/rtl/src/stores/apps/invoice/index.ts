import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import type { InvoiceType } from '@/types/apps/InvoiceTypes';

interface InvoiceState {
  invoice: InvoiceType[];
  invoiceContent: number;
  invoiceSearch: string;
}

export const useInvoicestore = defineStore({
  id: 'invoices',
  state: (): InvoiceState => ({
    invoice: [],
    invoiceContent: 1,
    invoiceSearch: '',
  }),
  getters: {
    grandTotal: (state) => (invoice: InvoiceType) => {
      const subtotal = (invoice.orders ?? []).reduce((sum, order) => {
        return sum + (order.unitPrice ?? 0) * (order.units ?? 0);
      }, 0);
      const vatRate = 0.1;
      const vat = subtotal * vatRate;
      return subtotal + vat;
    }
  },
  actions: {
    async fetchinvoice() {
      try {
        const response = await axios.get('/api/data/invoices/invoiceData');
        this.invoice = response.data; // Ensure data is structured correctly
      } catch (error) {
        console.error(error);
        alert('Failed to fetch invoices');
      }
    },
    async addInvoice(invoice: InvoiceType) {
      try {
        const response = await axios.post('/api/data/invoices/invoiceData', invoice);
        this.invoice.push(response.data);
        
        return response.data;
      } catch (error) {
        console.error('Error adding invoice:', error);
      }
    },
    async updateInvoice(updatedInvoice: InvoiceType) {
      try {
        const response = await axios.put(`/api/data/invoices/invoiceData/${updatedInvoice.id}`, updatedInvoice);
        console.log('Response from update:', response); // This will show the updated data
    
        const index = this.invoice.findIndex(inv => inv.id === updatedInvoice.id);
        if (index !== -1) {
          this.invoice[index] = response.data; // Update the local store
        }
        return response.data;
      } catch (error) {
        console.error('Error updating invoice:', error);
      }
    },


    
    deleteinvoice(itemID: number) {
      this.invoice = this.invoice.filter((invoice) => invoice.id !== itemID);
    },
  },
});
