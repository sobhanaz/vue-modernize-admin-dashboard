import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

export const usePhotosStore = defineStore({
    id: 'Photos',
    state: () => ({
        photos: []
    }),
    getters: {},
    actions: {
        // Fetch followers from action
        async fetchPhotos() {
            try {
                const response = await axios.get('/api/photos');
                this.photos = response.data.photos;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
