<template>
  <v-container>
    <v-layout>
      <h1 class="mb-4">Menu Page</h1>
    </v-layout>
    <v-layout>
      <HomePlans/>
    </v-layout>
  </v-container>
</template>

<script>
import HomePlans from "@/components/HomePlans.vue";

export default {
  name: "Menu",
  components: {
    HomePlans
  }
};
</script>

<style>
</style>
