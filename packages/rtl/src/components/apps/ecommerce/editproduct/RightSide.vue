<script setup lang="ts">
import { ref } from 'vue';
import preview from '@/assets/images/products/s8.jpg';
import DailySalesChart from './DailySalesChart.vue';
const select = ref('Draft');


const selectmultiple = ref(['Computer', 'Watches', 'Headphones']);
const itemsmultiple = ['Computer', 'Watches', 'Headphones', 'Beauty', 'Fashion', 'Footwear'];

const tagsselect = ref(['trending', 'Beauty', 'Fashion']);
const tagsitems = ['new', 'trending', 'Headphones', 'Beauty', 'Fashion', 'Footwear'];

const templateselect = ref('Office Stationary');
const templateitems = ['Default Template', 'Fashion', 'Office Stationary', 'Electronics'];

const fileInput = ref<HTMLInputElement>();
const imageUrl = ref<string>(preview); // Replace with your default image path

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) return;

    // Validate file size and type (optional)
    if (file.size > 1024 * 1024 * 5) {
        alert('File size is too large! Max 5MB allowed.');
        return;
    }

    // Read and display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
        imageUrl.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    // Handle actual upload logic (needs server-side implementation)
    // ...
};
</script>
<template>
    <div class="mt-md-16 mt-5">
        <div class="pt-md-7">
            <!-- Thumbnail -->
            <v-card elevation="10" class="mb-6">
                <v-card-item>
                    <h5 class="text-h5 mb-8">Thumbnail</h5>
                    <div class="upload-btn-wrapper position-relative overflow-hidden d-flex align-center" elevation="10">
                        <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" />
                        <img :src="imageUrl" alt="Image Preview" class="w-100" />
                    </div>
                    <p class="text-12 textSecondary text-center mt-5">
                        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted
                    </p>
                </v-card-item>
            </v-card>

            <!-- Status -->
            <v-card elevation="10" class="mb-6">
                <v-card-item>
                    <div class="d-flex align-center justify-space-between">
                        <h5 class="text-h5">Status</h5>
                        <v-avatar size="12" v-if="select == 'Published'" class="bg-success rounded-circle"></v-avatar>
                        <v-avatar size="12" v-else-if="select == 'Draft'" class="bg-error rounded-circle"></v-avatar>
                        <v-avatar size="12" v-else-if="select == 'Scheduled'" class="bg-primary rounded-circle"></v-avatar>
                        <v-avatar size="12" v-else class="bg-warning rounded-circle"></v-avatar>
                    </div>
                    <div class="mt-3">
                        <v-select
                            v-model="select"
                            variant="outlined"
                            :items="['Published', 'Draft', 'Scheduled', 'Inactive']"
                        ></v-select>
                        <p class="text-12 textSecondary mt-n3">Set the product status.</p>
                    </div>
                </v-card-item>
            </v-card>

            <!-- Product Details -->
            <v-card elevation="10" class="mb-6">
                <v-card-item>
                    <h5 class="text-h5">Product Details</h5>
                    <div class="mt-5">
                        <v-label class="font-weight-medium mb-2">Categories</v-label>
                        <v-select v-model="selectmultiple" :items="itemsmultiple" placeholder="Select an option" chips multiple></v-select>
                        <p class="text-12 textSecondary mt-n4 mb-4">Add product to a category.</p>
                        <v-btn variant="tonal" color="primary"><span class="text-20 me-1">+</span> Create New Category</v-btn>
                    </div>
                    <div class="mt-8">
                        <v-label class="font-weight-medium mb-2">Tags</v-label>
                        <v-combobox
                            variant="outlined"
                            density="comfortable"
                            color="primary"
                            v-model="tagsselect"
                            :items="tagsitems"
                            chips
                            multiple
                        ></v-combobox>
                        <p class="text-12 textSecondary mt-n4">Add tags to a product.</p>
                    </div>
                </v-card-item>
            </v-card>

            <!-- Daily Sales -->
            <DailySalesChart />

            <!-- Product Template -->
            <v-card elevation="10" class="mb-6">
                <v-card-item>
                    <h5 class="text-h5 mb-5">Product Template</h5>
                    <v-label class="font-weight-medium mb-2">Select a product template</v-label>
                    <v-select
                        v-model="templateselect"
                        :items="templateitems"
                        variant="outlined"
                        class="text-body-1"
                        placeholder="Default template"
                        hide-details
                    ></v-select>
                    <p class="text-12 textSecondary mt-1">
                        Assign a template from your current admin to define how a single product is displayed.
                    </p>
                </v-card-item>
            </v-card>
        </div>
    </div>
</template>
