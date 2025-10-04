<template>
    <perfect-scrollbar style="max-height: 250px">
        <v-list>
            <v-list-item v-for="(n, index) in 200" :value="n" :key="index" color="primary">
                <v-list-item-title>Item {{ n }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </perfect-scrollbar>
</template>
