<script setup lang="ts"></script>
<template>
    <v-row>
        <v-col cols="12" lg="12">
            <v-label class="mb-2 font-weight-medium">Success Input</v-label>
            <v-text-field variant="outlined" placeholder="Success value" color="success"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Error Input</v-label>
            <v-text-field variant="outlined" color="error"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Input with Error text</v-label>
            <v-text-field variant="outlined" color="error" hint="Incorrect entry." persistent-hint></v-text-field>
        </v-col>
    </v-row>
</template>
