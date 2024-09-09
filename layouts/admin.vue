<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="p-3">
      <template #title>
        <div class="d-flex">
          <v-row align="center">
            <v-col cols="12" md="4">
              <div class="d-flex mt-4"></div>
            </v-col>
          </v-row>
        </div>
      </template>
      
      <VBtn prepend-icon="mdi-clipboard-account" stacked to="/admin">admin</VBtn>
      
      <VSpacer></VSpacer>
      <v-btn v-for="page in pages" stacked :to="page.to">
        <VIcon :icon="page.icon"></VIcon>
        {{ page.title }}
      </v-btn>
      <VSpacer></VSpacer>
    </v-app-bar>
    <v-main style="min-height: 300px; margin-top: 40px">
      <slot></slot>
    </v-main>
  </v-layout>
</template>

  
  <script setup>
// async function logout(){
//   await useFetch('/api/admin/logout',{method:'POST'})
//   navigateTo('/')
// }
const pages = [
  {
    title: "پرسنل",
    to: "/admin/personnels",
    icon: "mdi-account",
  },
  {
    title: "کاربران",
    to: "/admin/users",
    icon: "mdi-account",
  },
  {
    title: "دسته محصولات",
    to: "/admin/productCategoris",
    icon: "mdi-account",
  },
  {
    title: "محصولات",
    to: "/admin/products",
    icon: "mdi-account",
  },
];
</script>
  
  <style>
body {
  background-color: white;
}
</style>