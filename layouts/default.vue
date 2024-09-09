<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="black">
      <!-- <template v-slot:image>
        <v-img gradient="to top right, rgb(50, 0, 0), rgb(0,0,0)"></v-img>
      </template> -->

      <template #title>
        <div class="d-flex">
          <v-row align="center">
            <v-col cols="12" md="4">
              <div class="d-flex mt-4">
                <!-- تگ img واسه لوگو بدون تاخیر -->
                <NuxtLink to="/"
                  ><img :src="'/images/logo.png'" alt="لوگو سایت" height="50"
                /></NuxtLink>
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                  label="جستجو"
                  density="compact"
                  rounded
                  class="ms-10 d-md-inline-grid"
                  
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="8" class="text-end">
              <v-btn
                rounded
                append-icon="mdi-phone"
                class="border-1 border-white d-md-inline-grid"
                outlined
                color="white"
                >09014187318</v-btn
              >
              <v-btn rounded class="bg-primary mx-3" color="white" to="/login"
                >login</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </template>
    </v-app-bar>

    <v-app-bar color="black">
      <template v-slot:image>
        <v-img gradient="to top, rgb(50, 0, 0), rgb(0,0,0)"></v-img>
      </template>

      <v-row class="border-t">
          <v-col cols="auto" class="d-none d-md-block">
            <v-btn color="white" v-for="item in products">
              {{ item.title }}
              <v-icon>mdi-chevron-down</v-icon>
              <v-menu activator="parent">
                <v-card width="600">
                  <v-card-text>
                    <v-row>
                      <v-col v-for="sub in item.sub">
                        <v-list :title="sub.title">
                          <v-list-item v-for="subitem in sub.items">
                            {{ subitem }}
                          </v-list-item>
                        </v-list>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>


      </v-app-bar>

    
        <v-main
          class=" align-center justify-center"
          style="
            min-height: 1300px;
            background-image: linear-gradient(
              to bottom right,
              rgba(10, 0, 0, 0.95),
              rgba(50, 5, 5, 1)
            );
          "
        >
          <slot></slot>
        </v-main>
      
  </v-layout>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { data: products } = await useFetch("/api/common/getProducts", {
  method: "POST",
});
</script>