<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="4">
        <v-carousel
          cycle
          height="500"
          show-arrows="hover"
          background-color="white"
          v-model="model"
          hide-delimiters
        >
          <v-carousel-item v-for="n in fakesrc.length - 1">
            <v-img :src="fakesrc[n]" aspect-ratio="16/9" cover></v-img>
          </v-carousel-item>
        </v-carousel>

        <v-sheet class="mx-auto" color="black" max-width="800">
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            mandatory
            :show-arrows="false"
          >
            <template #next></template>
            <template #prev></template>
            <v-slide-group-item
              v-for="n in fakesrc.length - 1"
              :key="n"
              v-slot="{ toggle }"
            >
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-img
                    style="cursor: pointer"
                    :src="fakesrc[n]"
                    @click="toggle"
                    class="ma-4"
                    height="100"
                    width="100"
                    cover
                  ></v-img>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
        <h4 class="ma-3" style="color: white">
          <span>{{ item.price }}</span
          ><span>$</span>
        </h4>
        <div>
          <v-hover v-slot:default="{ isHovering, props }"
            ><v-btn
              v-bind="props"
              :color="isHovering ? 'primary' : 'white'"
              icon
              class="ma-3"
              size="large"
              density="comfortable"
              @click="add()"
              ><v-icon v-bind="props" :color="isHovering ? 'white' : 'primary'"
                >mdi-plus</v-icon
              ></v-btn
            ></v-hover
          >

          <v-chip
            close
            color="gray"
            rounded="pill"
            class="tonal"
            size="x-large"
          >
            <span class="text-white">{{ tedad }}</span>
          </v-chip>
          <v-hover v-slot:default="{ isHovering, props }"
            ><v-btn
              v-bind="props"
              :color="isHovering ? 'primary' : 'white'"
              icon
              class="ma-3"
              size="large"
              density="comfortable"
              @click="minus()"
              ><v-icon v-bind="props" :color="isHovering ? 'white' : 'primary'"
                >mdi-minus</v-icon
              ></v-btn
            ></v-hover
          >
          <v-hover v-slot:default="{ isHovering, props }"
            ><v-btn
              v-bind="props"
              :variant="isHovering ? 'outlined' : 'elevated'"
              color="primary"
              rounded="pill"
              size="large"
              justify-center
              align-center
              class="ma-3"
              >افزودن به سبد خرید</v-btn
            ></v-hover
          >
        </div>
      </v-col>

      <v-col offset="4">
        <div>
          <v-sheet max-height="500" class="mt-3">
            <v-list-item
              :title="item.name"
              density="comfortable"
              lines="two"
              subtitle="Lorem ipsum dil orei namdie dkaf"
            >
              <template v-slot:title>
                <strong class="text-h6">
                  {{ item.name }}
                </strong>
              </template>
            </v-list-item>

            <v-table class="text-caption" density="compact">
              <tbody>
                <tr align="right">
                  <th>DPI:</th>

                  <td>{{ item.dpi }}</td>
                </tr>

                <tr align="right">
                  <th>Buttons:</th>

                  <td>{{ item.buttons }}</td>
                </tr>

                <tr align="right">
                  <th>Weight:</th>

                  <td>{{ item.weight }}</td>
                </tr>

                <tr align="right">
                  <th>Wireless:</th>

                  <td>{{ item.wireless ? "Yes" : "No" }}</td>
                </tr>

                <tr align="right">
                  <th>Price:</th>

                  <td>${{ item.price }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
        </div>
        <div >
          <v-card v-for="n in x.length "class="mx-auto mt-10" color="purple" elevation="10" >
            <div class="d-flex justify-between">
              <v-card-title class="flex-grow-1 flex-column align-start">
                <div class="text-h5">{{ x[n-1].reviewerName }}</div>
                <div class="text-h6 font-weight-thin">{{ x[n-1].reviewerEmail }} </div>

                <div class="text-h6 font-weight-thin">{{ x[n-1].comment }}</div>
              </v-card-title>

              <v-img
                
                height="125px"
                :src="item.src"
                style="flex-basis: 125px"
                contain
              ></v-img>
            </div>

            <v-divider></v-divider>

            <v-card-actions class="pa-4">
              {{ x[n-1].date }}

              <v-spacer></v-spacer>

              <span class="text-grey-lighten-2 text-caption me-2">
                ({{ x[n-1].rating }})
              </span>

              <v-rating
                v-model="x[n-1].rating"
                active-color="yellow-accent-4"
                color="white"
                size="18"
                half-increments
                readonly
              ></v-rating>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute();
const id = route.params.id[0];
const tedad = ref(1);
const value = ref(0);
const model = ref(null);
const tab = ref(null);

const { data: p } = await useFetch("/api/common/getmice", {
  method: "POST",
});
const item = p.value.find((item) => item.name === id);
const altsrc = p.value[15];
const reviews = p.value[16];
const fakesrc = [];

let i = 0;

while (i < 7) {
  fakesrc.push(
    "https://picsum.photos/800/1000?image=" + Math.floor(Math.random() * 101)
  );
  i++;
}
function add() {
  tedad.value++;
}
function minus() {
  if (tedad.value > 1) {
    tedad.value--;
  }
}
let x = reviews.reviews;
</script>

<style>
</style>