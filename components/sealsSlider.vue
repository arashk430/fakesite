<template>
  <v-sheet
    border
    class="hover-image"
    @click="goToSelectedProduct(item.raw.name)"
  >
    <v-img
      :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
      :src="item.raw.src"
      height="150"
      cover
    ></v-img>

    <v-list-item
      :title="item.raw.name"
      density="comfortable"
      lines="two"
      subtitle="Lorem ipsum dil orei namdie dkaf"
    >
      <template v-slot:title>
        <strong class="text-h6">
          {{ item.raw.name }}
        </strong>
      </template>
    </v-list-item>

    <v-table class="text-caption" density="compact">
      <tbody>
        <tr align="right">
          <th>DPI:</th>

          <td>{{ item.raw.dpi }}</td>
        </tr>

        <tr align="right">
          <th>Buttons:</th>

          <td>{{ item.raw.buttons }}</td>
        </tr>

        <tr align="right">
          <th>Weight:</th>

          <td>{{ item.raw.weight }}</td>
        </tr>

        <tr align="right">
          <th>Wireless:</th>

          <td>{{ item.raw.wireless ? "Yes" : "No" }}</td>
        </tr>

        <tr align="right">
          <th>Price:</th>

          <td>${{ item.raw.price }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
  },
});
function goToSelectedProduct(name) {
  navigateTo("/product/" + name);
}
</script>

<style scoped>
.hover-image:hover {
  transition: all 0.5s;
  transform: scale(1);
}
.hover-image:hover {
  transform: scale(1.1);
}
</style>