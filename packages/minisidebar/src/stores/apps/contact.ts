import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

export const useContactStore = defineStore({
    id: 'Contact',
    state: () => ({
        contacts: []
    }),
    getters: {},
    actions: {
        // Fetch followers from action
        async fetchContacts() {
            try {
                const response = await axios.get('/api/contacts');
                this.contacts = response.data.contacts;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
