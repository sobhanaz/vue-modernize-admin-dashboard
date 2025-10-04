<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppBaseCard from '@/components/shared/AppBaseCard.vue';
//Types
import type { Products } from '@/types/apps/EcommerceType';
import ProductItemVue from '@/components/apps/ecommerce/listing/ProductItem.vue';
import { useEcomStore } from '@/stores/apps/eCommerce';
import { orderBy, filter, includes } from 'lodash';

import ProductEmplty from '@/components/apps/ecommerce/listing/ProductEmplty.vue';
import ProductFilters from '@/components/apps/ecommerce/listing/ProductFilters.vue';


// ecommmerce
const store = useEcomStore();

onMounted(() => {
    store.fetchProducts();
});

const getProducts = computed(() => {
    return store.products;
});

const selected = ref('Price:Low to High');
const searchValue = ref('');

const getVisibleProduct = (
    products: Products | any,
    sortBy: string,
    search: string | any,
    gender: string | unknown,
    category: string | unknown,
    colors: string | unknown,
    price: string | unknown,
    //price:string | unknown
) => {
    // SORT BY
    if (sortBy === 'Popularity') {
        products = orderBy(products, ['rating'], ['desc']);
    }
    if (sortBy === 'Price:High to Low') {
        products = orderBy(products, ['salePrice'], ['desc']);
    }
    if (sortBy === 'Price:Low to High') {
        products = orderBy(products, ['salePrice'], ['asc']);
    }
    if (sortBy === 'Fresh Arrivals') {
        products = orderBy(products, ['created'], ['asc']);
    }
    if (gender) {
        products = products.filter((product: Products | any) => {
            return product.gender.includes(gender);
        });
    }
    if (price) {
        products = products.filter((product: Products | any) => {
            return product.price.includes(price);
        });
    }
    if (category !== 'all') {
        products = products.filter((product: Products | any) => {
            return product.categories.includes(category);
        });
    }

    if (search) {
        products = products.filter((product: Products) => {
            return product.name.toLowerCase().includes(search.value.toLowerCase());
        });
    }

    //FILTER PRODUCTS BY COLORS
    if (colors !== 'All') {
        products = products.filter((_product: Products | any) => _product.colors.includes(colors));
    }

    //FILTER PRODUCTS BY PRICE
    // if (price !== 'All') {
    //   const minMax = price ? price.split('-') : '';
    //   products = products.filter((_product: Products | any) =>
    //     price ? _product.price >= minMax[0] && _product.price <= minMax[1] : true,
    //   );
    // }

    return products;
};

const filteredProducts = computed(() => {
    return getVisibleProduct(getProducts.value, selected.value, searchValue, store.gender, store.category, store.color,store.price);
});
const toggleSide = ref(false);

function AddCart(p: number) {
    store.AddToCart(p);
}
</script>

<template>
    <v-card elevation="10" class="inside-left-sidebar overflow-hidden">
        <AppBaseCard>
            <!-- -------------------------------------- -->
            <!-- Left Sidebar -->
            <!-- -------------------------------------- -->
            <template v-slot:leftpart>
                <ProductFilters />
            </template>
            <!-- -------------------------------------- -->
            <!-- Right Side Content Part -->
            <!-- -------------------------------------- -->
            <template v-slot:rightpart>
                <perfect-scrollbar>
                    <v-sheet class="pa-4">
                        <div class="d-flex gap-2 align-center mb-4 justify-space-between">
                            <h5 class="text-h5 d-none d-lg-flex font-weight-semibold">Products</h5>

                            <v-sheet  width="300">
                                <v-text-field
                                    variant="outlined"
                                    v-model="searchValue"
                                    prepend-inner-icon="mdi-magnify"
                                    placeholder="Search Product"
                                    hide-details
                                    density="compact"
                                    color="primary"
                                ></v-text-field>
                            </v-sheet>
                        </div>
                        <v-row v-if="filteredProducts.length >= 1">
                            <v-col cols="12" lg="4" sm="6" v-for="product in filteredProducts" :key="product.id">
                                <ProductItemVue
                                    :name="product.name"
                                    :image="product.image"
                                    :desc="product.description"
                                    :salePrice="product.salePrice"
                                    :offerPrice="product.offerPrice"
                                    :rating="product.rating"
                                    :goto="product.id"
                                    @handlecart="AddCart(product)"
                                />
                            </v-col>
                        </v-row>
                        <ProductEmplty v-else />
                    </v-sheet>
                </perfect-scrollbar>
            </template>
            <!-- -------------------------------------- -->
            <!-- Mobile Sidebar -->
            <!-- -------------------------------------- -->
            <template v-slot:mobileLeftContent> <ProductFilters /> </template>
        </AppBaseCard>
    </v-card>
</template>

<style scoped lang="scss">
@media (max-width: 1279px) {
    .v-card {
        position: unset;
    }
}
</style>
