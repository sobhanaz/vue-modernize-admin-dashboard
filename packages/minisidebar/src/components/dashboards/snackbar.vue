<script>
import { ref } from 'vue';
import { InfoCircleIcon, XIcon } from 'vue-tabler-icons';
export default {
    setup() {
        const showSnackbar = ref(false);
        const close = () => {
            showSnackbar.value = false;
        };

        setTimeout(() => {
            showSnackbar.value = true;
        }, 1500); // Adjust the delay in milliseconds (here 3 seconds)

        return {
            showSnackbar,
            close
        };
    }
};
</script>

<template>
    <v-snackbar rounded="md" color="primary" class="mt-n3" v-model="showSnackbar" location="top right" elevation="0">
        <div class="d-flex gap-2">
            <InfoCircleIcon size="22" />
            <div class="">
                <h5 class="text-body-1">Welcome to Modernize</h5>
                <p class="text-12">Easy to costomize the Template!!!</p>
            </div>
        </div>
        <template v-slot:actions>
            <v-btn variant="text" @click="showSnackbar = false"> <XIcon /> </v-btn>
        </template>
    </v-snackbar>
</template>
