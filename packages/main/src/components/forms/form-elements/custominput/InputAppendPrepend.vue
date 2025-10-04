<template>
    <v-text-field variant="underlined" hide-details>
        <template v-slot:append>
            <v-icon color="primary">
                mdi-plus
            </v-icon>
        </template>
        <template v-slot:prepend>
            <v-icon color="secondary">
                mdi-minus
            </v-icon>
        </template>
    </v-text-field>
</template>