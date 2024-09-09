<template>
  <v-parallax src="images/material.jpg">
    <VCard v-if="login" class="mx-auto" width="400" elevation="16" style="margin-top: 15%">
      <template v-slot:prepend class="ma-1">
        <v-btn
          color="info"
          icon="mdi-arrow-right"
          @click="login = !login"
        ></v-btn>
      </template>

      <v-sheet class="ma-2">
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="اسم"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="9"
            :error-messages="phone.errorMessage.value"
            label="شماره موبایل"
          ></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="ایمیل"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            label="قوانین"
            type="checkbox"
            value="1"
          ></v-checkbox>

          <v-btn class="me-4" type="submit"> go </v-btn>

          <v-btn @click="handleReset"> clear </v-btn>
        </form>
      </v-sheet></VCard
    >
    <VCard v-else class="mx-auto" width="400" elevation="16" style="margin-top: 15%">
      <template v-slot:append>
        <v-btn
          class="ma-1"
          color="info"
          icon="mdi-arrow-left"
          @click="login = !login"
        ></v-btn>
      </template>
      <v-sheet class="ma-2">
        <v-form>
          <v-text-field
            v-model="userName.value.value"
            :error-messages="userName.errorMessage.value"
            label="نام کاربری"
          ></v-text-field>
          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="پسورد"
          ></v-text-field>
        </v-form>
      </v-sheet>
      <v-card-actions>
        <v-btn color="primary" class="elevation-10 flex-grow-1"> ورود</v-btn>
      </v-card-actions>
    </VCard>
  </v-parallax>
</template>


<script setup>
definePageMeta({
  layout: "vorod",
});
import { VSheet } from "vuetify/components";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
const login = ref(true);
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 3) return true;

      return "اسم باید از 3 حرف بیشتر باشد";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "شماره موبایل  باید حداقل 9 رقم باشد";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "ایمیل معتر نمی باشد";
    },

    checkbox(value) {
      if (value === "1") return true;

      return "تیک را بزنید!";
    },
    password(value) {
      if (value?.length > 5) return true;
      return "پسورد را وارد کنید";
    },
    userName(value){
      if (value?.length) return true;
      return "نام کاربری را وارد کنید"
    }
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const userName = useField("userName");
const checkbox = useField("checkbox");
const password = useField("password");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style>
</style>