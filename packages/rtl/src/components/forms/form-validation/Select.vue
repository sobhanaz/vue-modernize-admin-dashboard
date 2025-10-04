<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
const defaultForm = Object.freeze({
  age: "",
});
const form = ref(Object.assign({}, defaultForm));
const rules = ref({
  age: [(val: any) => (val || "").length > 0 || "This field is required"],
});
const age = ref(["Ten", "Twenty", "Thirty"]);
// const conditions = ref(false);
// const formIsValid = computed(() => {
//   return (
//     form.value.age
//   );
// });
function submitForm() {
  form.value = Object.assign({}, defaultForm);
}
</script>
<template>
      <v-form ref="form">
            <v-label class="mb-2 font-weight-medium">Age</v-label>
              <v-select
                v-model="form.age"
                :items="age"
                :rules="rules.age"
                color="primary"
                variant="outlined"
                required
              ></v-select>
          <v-btn color="primary" class="mt-3" flat  @click="submitForm">submit</v-btn>
      </v-form>
</template>

