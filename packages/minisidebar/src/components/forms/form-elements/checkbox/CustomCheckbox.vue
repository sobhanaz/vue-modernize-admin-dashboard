<template>
    <div class="d-flex gap-3 align-center justify-center">
        <v-checkbox-btn :model-value="true" color='primary'></v-checkbox-btn>
        <v-checkbox-btn :model-value="false" ></v-checkbox-btn>
        <v-checkbox-btn indeterminate color='secondary'></v-checkbox-btn>
    </div>
</template>