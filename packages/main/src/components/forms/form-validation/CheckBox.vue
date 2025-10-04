<script setup lang="ts">
import { ref, computed } from 'vue';
//Checkbox radio button
const drinks = ref([
    { id: 1, name: 'None' },
    { id: 2, name: 'Tea' },
    { id: 3, name: 'Coffee' }
]);

const selectedValues = ref([]);
const myform = ref();
const validateCheckbox = computed(() => {
    return [selectedValues.value.length > 0 || 'Choose at-list one Drink'];
});
function submit() {
    myform.value.validate();
}
function isLast(index: any) {
    return drinks.value.length - 1 === index;
}
</script>
<template>
    <v-form ref="myform">
        <div class="">
            <div v-for="(drink, index) in drinks" :key="drink.id">
                <v-checkbox v-model="selectedValues" :value="drink.id" :label="drink.name" color="primary"
                    :hide-details="!isLast(index)" :rules="validateCheckbox" />
            </div>
        </div>
        <div class="d-flex justify-sm-end"> 
            <v-btn @click="submit" flat color="primary" class="mt-4"> Submit </v-btn>
        </div>    
    </v-form>
    <!-- <p class="mt-3">Selected: {{ selectedValues }}</p> -->
</template>
