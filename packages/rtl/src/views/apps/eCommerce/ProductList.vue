<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import img1 from '@/assets/images/products/s1.jpg';
import img2 from '@/assets/images/products/s2.jpg';
import img3 from '@/assets/images/products/s3.jpg';
import img4 from '@/assets/images/products/s7.jpg';
import img5 from '@/assets/images/products/s11.jpg';
import { EditIcon, PointFilledIcon, TrashIcon } from 'vue-tabler-icons';
import UiParentCard from '@/components/shared/UiParentCard.vue';



const search = ref();
const dialog = ref(false);
const dialogDelete = ref(false);
const headers = ref([
    { title: 'Product Image', key: 'image' },
    { title: 'Product', key: 'product' },
    { title: 'Date', key: 'date' },
    { title: 'Status', key: 'status' },
    { title: 'Price', key: 'price' },
    { title: 'Actions', key: 'actions', sortable: false }
]);
const productlist = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({
    product: '',
    image: img1,
    category: '',
    date: '',
    status: '',
    price: ''
});
const defaultItem = ref({
    product: '',
    image: img1,
    category: '',
    date: '',
    status: '',
    price: ''
});
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
});
function initialize() {
    productlist.value = [
        {
            product: 'Curology Face wash',
            category: 'Beauty',
            image: img1,
            date: 'Thu, Jan 12 2024',
            status: 'Instock',
            price: '$275'
        },
        {
            product: 'Body Lotion',
            category: 'Beauty',
            image: img2,
            date: 'Thu, Jan 20 2024',
            status: 'Out of Stock',
            price: '$89'
        },
        {
            product: 'Smart Watch',
            category: 'Electronics',
            image: img3,
            date: 'Fri, Feb 15 2024',
            status: 'Instock',
            price: '$125'
        },
        {
            product: 'Camera',
            category: 'Electronics',
            image: img4,
            date: 'Fri, March 30 2024',
            status: 'Instock',
            price: '$200'
        },
        {
            product: 'Games',
            category: 'Electronics',
            image: img5,
            date: 'Sat, March 30 2024',
            status: 'Out of Stock',
            price: '$100'
        },
        {
            product: 'Body Lotion',
            category: 'Beauty',
            image: img2,
            date: 'Thu, Jan 28 2024',
            status: 'Out of Stock',
            price: '$84'
        },
        {
            product: 'Smart Watch',
            category: 'Electronics',
            image: img3,
            date: 'Fri, Feb 15 2024',
            status: 'Instock',
            price: '$300'
        }
    ];
}
function editItem(item) {
    editedIndex.value = productlist.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}
function deleteItem(item) {
    editedIndex.value = productlist.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialogDelete.value = true;
}
function deleteItemConfirm() {
    productlist.value.splice(editedIndex.value, 1);
    closeDelete();
}
function close() {
    dialog.value = false;
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    });
}
function closeDelete() {
    dialogDelete.value = false;
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    });
}
function save() {
    if (editedIndex.value > -1) {
        Object.assign(productlist.value[editedIndex.value], editedItem.value);
    } else {
        productlist.value.push(editedItem.value);
    }
    close();
}
watch(dialog, (val) => {
    val || close();
});
watch(dialogDelete, (val) => {
    val || closeDelete();
});
initialize();
</script>

<template>
   
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Product List">
                <v-data-table
                    class=" rounded-md datatabels productlist"
                    :headers="headers"
                    :items="productlist"
                    v-model:search="search" 
                    items-per-page="5"
                    item-value="product"
                    color="primary"
                    show-select
                    :sort-by="[{ key: 'calories', order: 'asc' }]"
                >
                    <template v-slot:item.image="{ item }">
                        <div class="d-flex gap-3 align-center">
                            <div>
                                <v-img :src="`${item.image}`" height="55" width="55" class="rounded" cover></v-img>
                            </div>
                            <div>
                                <h6 class="text-h6">{{ item.product }}</h6>
                                <p class="textSecondary">{{ item.category }}</p>
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <div class="d-flex gap-2 align-center">
                            <PointFilledIcon v-if="item.status == 'Instock'" class="text-success" />
                            <PointFilledIcon v-else class="text-error" /> 
                            {{ item.status }}
                        </div>
                    </template>
                    <template v-slot:item.price="{ item }">
                        <h6 class="text-h6">{{ item.price }}</h6>
                    </template>
                    <template v-slot:top>
                        <v-toolbar class="bg-surface" flat>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ props }">
                                    <div class="d-md-flex block justify-space-between w-100 pb-6 align-center">
                                        <v-text-field
                                            v-model="search"
                                            append-inner-icon="mdi-magnify"
                                            label="Search"
                                            single-line
                                            hide-details
                                            class="mb-md-0 mb-3"
                                        />
                                        <v-btn color="primary" variant="flat" dark v-bind="props">Add New Item</v-btn>
                                    </div>
                                </template>
                                <v-card>
                                    <v-card-title class="pa-4 bg-primary">
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container class="px-0">
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.category" label="Category"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.product" label="Product name"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        label="Select"
                                                        v-model="editedItem.status"
                                                        variant="outlined"
                                                        :items="['Instock', 'Out of Stock']"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="error" variant="flat" dark @click="close"> Cancel </v-btn>
                                        <v-btn color="primary" variant="flat" dark @click="save"> Save </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5 text-center py-6">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="error" variant="flat" dark @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="primary" variant="flat" dark @click="deleteItemConfirm">OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <div class="d-flex gap-2">

                            <EditIcon
                                height="20"
                                width="20"
                                class="text-primary cursor-pointer"
                                size="small"
                                @click="editItem(item)"
                            />
                            <TrashIcon
                                height="20"
                                width="20"
                                class="text-error cursor-pointer"
                                size="small"
                                @click="deleteItem(item)"
                            />
                        </div>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize"> Reset </v-btn>
                    </template>
                </v-data-table>
           </UiParentCard>
        </v-col>
    </v-row>
</template>
