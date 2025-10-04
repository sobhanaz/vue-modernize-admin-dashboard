import { defineStore } from "pinia";
import axios from "@/utils/axios";
import { uniqueId } from "lodash";
import { sub } from "date-fns";

interface EmailType {
  emails: any[];
  selectedEmail: any | null; // Add this line to hold the selected email
}

export const useEmailStore = defineStore({
  id: "email",
  state: (): EmailType => ({
    emails: [],
    selectedEmail: null, // Initialize as null
  }),
  actions: {
    toggleStarred(emailId: number) {
      const email = this.emails.find((e) => e.id === emailId);
      if (email) {
        email.starred = !email.starred;
      }
    },
    toggleImportant(emailId: number) {
      const email = this.emails.find((e) => e.id === emailId);
      if (email) {
        email.important = !email.important;
      }
    },
    async fetchEmails() {
      try {
        const data = await axios.get("/api/data/email/EmailData");
        this.emails = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    selectEmail(email: any) {
      // Update the method to accept an email object
      this.selectedEmail = email; // Store the selected email
    },
    deleteEmail(id: number) {
      this.emails = this.emails.filter((email) => email.id !== id);
      this.selectedEmail = null; // Clear selected email after deletion
    },
    
  },
});
