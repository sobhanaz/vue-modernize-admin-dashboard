<template>
    <div class="d-flex justify-center">
    <div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
        <v-switch color="primary" :model-value="true" hide-details inset></v-switch>
        <v-switch color="primary" :model-value="false" hide-details inset></v-switch>
        <v-switch color="primary" :model-value="true" disabled hide-details inset></v-switch>
        <v-switch color="primary" :model-value="false" disabled hide-details inset></v-switch>
    </div>
</div>
</template>
