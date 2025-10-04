<script setup lang="ts">
import { shallowRef } from 'vue';
import {ChevronUpIcon} from 'vue-tabler-icons';
import {ChevronDownIcon} from 'vue-tabler-icons';
const props = defineProps(['icon']);
const component = props.icon;
// custom list data
const customs = shallowRef([
    {
        title: 'Bajaj Finsery',
        profit: true,
        percent: '10',
        price: '1839.00'
    },
    {
        title: 'TTML',
        profit: false,
        percent: '10',
        price: '100.00'
    },
    {
        title: 'Reliance',
        profit: true,
        percent: '10',
        price: '200.00'
    },
    {
        title: 'TTML',
        profit: false,
        percent: '10',
        price: '189.00'
    }
]);
</script>
<template>
    <v-list two-lines>
        <template v-for="(custom, i) in customs" :key="i">
            <v-list-item color="primary" class="py-3">
                <v-list-item-title class="text-subtitle-1">{{ custom.title }}</v-list-item-title>
                <v-list-item-subtitle v-if="custom.profit" class="text-subtitle-2 text-success text-high-emphasis"
                    >{{ custom.percent }}% Profit</v-list-item-subtitle
                >
                <v-list-item-subtitle v-else class="text-subtitle-2 text-error "
                    >{{ custom.percent }}% Loss</v-list-item-subtitle
                >
                <template v-slot:append>
                    <v-list-item-subtitle class="text-subtitle-1 text-high-emphasis mr-3"> ${{ custom.price }}</v-list-item-subtitle>
                    <v-chip color="success" label size="x-small" v-if="custom.profit">
                        <ChevronUpIcon size="17" stroke-width="1.5" />
                    </v-chip>
                    <v-chip color="error" label size="x-small" v-else>
                        <ChevronDownIcon size="17" stroke-width="1.5" />
                    </v-chip>
                </template>
            </v-list-item>
            <v-divider></v-divider>
        </template>
    </v-list>
</template>
