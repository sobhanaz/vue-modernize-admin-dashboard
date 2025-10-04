<template>
    <v-switch
      loading="warning"
      :model-value="true"
      label="on loading"
      hide-details
    ></v-switch>
    <v-switch
      :model-value="false"
      loading="warning"
      label="off loading"
      hide-details
    ></v-switch>
</template>
