<template>
  <VRow>
    <VCol cols="12" class="rounded-xl">
      <v-card class="mx-auto" max-width="100%" rounded="0" max-height="500px">
        <v-img
          max-height="500"
          src="/images/banner.jpg"
          aspect-ratio="3/2"
          cover
        >
          <!-- <v-list-item
              class="text-white"
              subtitle="fandak shop"
              title="fandak shop"
            ></v-list-item> -->

          <v-row class="mt-10">
            <v-col cols="6" offset="1" class="text-white position-realative">
              <h1 class="font-weight-bold">عینک بلو کنترل</h1>
              <h4 class="font-weight-bold mt-4">
                جلوگیری از خشکی و سوزش چشم حین کار با کامپیوتر
              </h4>
              <p class="mt-8">یک ماه ضمانت بازگشت در صورت عدم رضایت</p>
            </v-col></v-row
          >
        </v-img>
      </v-card>
    </VCol></VRow
  >

  <v-container class="mt-6">
    <v-row>
      <v-col>
        <div class="text--primary">
          <!-- Using the elevation prop -->
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 24 : 6"
              :variant="isHovering ? 'outlined' : 'elevated'"
              rounded="pill"
              color="white"
              class="mx-auto pa-4"
            >
              <div align="center" class="text-h4">پر فروش ها</div>
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <VContainer align="center">
    <VRow>
      <VCol>
        <v-card max-width="80%" color="black">
          <v-data-iterator :items="mice" :items-per-page="itemsPerPage">
            <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
              <h1
                class="text-h4 font-weight-bold d-flex justify-space-between ma-4 align-center"
              >
                <!-- <div class="text-truncate">Most popular mice</div> -->
                <div class="d-inline-flex">
                  <v-btn
                    :disabled="page === pageCount"
                    icon="mdi-arrow-right"
                    size="small"
                    variant="tonal"
                    @click="nextPage"
                  ></v-btn>
                </div>
                <div class="d-flex align-center">
                  <v-btn class="me-8" variant="text" @click="onClickSeeAll()">
                    <span class="text-decoration-underline text-truncate"
                      >See all</span
                    >
                  </v-btn>
                </div>

                <div class="d-inline-flex">
                  <v-btn
                    :disabled="page === 1"
                    class="me-2"
                    icon="mdi-arrow-left"
                    size="small"
                    variant="tonal"
                    @click="prevPage"
                  ></v-btn>
                </div>
              </h1>
            </template>

            <template v-slot:default="{ items }">
              <v-row>
                <v-col
                  v-for="(item, i) in items"
                  :key="i"
                  cols="12"
                  sm="6"
                  xl="3"
                >
                  <seals-slider :item="item"></seals-slider>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer="{ page, pageCount }">
              <v-footer
                class="justify-space-between text-body-2 mt-4"
                color="surface-variant"
              >
                Total mice: {{ mice.length }}

                <div>Page {{ page }} of {{ pageCount }}</div>
              </v-footer>
            </template>
          </v-data-iterator>
        </v-card>
      </VCol>
    </VRow>
  </VContainer>
</template>



<script setup>
import { ref } from "vue";
const itemsPerPage = ref(4);
const { data: mice } = await useFetch("/api/common/getmice", {
  method: "POST",
});
function onClickSeeAll() {
  itemsPerPage.value=itemsPerPage.value ===4 ? this.mice.length:4;}
</script>
