<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "./TextInput.vue";


function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}

// Using yup to generate a validation schema
// https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

</script>

<template>
  <div>
    <Form :validation-schema="schema" @invalid-submit="onInvalidSubmit">
      <v-row>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Name</v-label>
          <TextInput name="name" type="text" success="Nice to meet you!" />
        </v-col>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Email</v-label>
          <TextInput name="email" type="email" success-message="Got it, we won't spam you!" />
        </v-col>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Password</v-label>
          <TextInput name="password" type="password" success-message="Nice and secure!" />
        </v-col>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
          <TextInput name="confirm_password" type="password"  success-message="Glad you remembered it!" />
        </v-col>
        <v-col cols="12">
          <div class=" d-sm-flex align-center mb-4">
            <v-checkbox density="compact" hide-details color="primary" label="Remember this Device"></v-checkbox>
            <div class="ml-auto"><a href="javascript:void(0)" class="text-primary text-decoration-none">Forgot
                password?</a></div>
          </div>
          <v-btn type="submit" class="submit-btn mt-2" flat color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </Form>
  </div>
</template>
