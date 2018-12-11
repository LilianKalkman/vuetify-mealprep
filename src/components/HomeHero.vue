<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5 fill-height>
      <div class="display-3 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
      <div class="display-3 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
      <div
        class="display-1 font-weight-bold white--text text-xs-center"
      >Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">flight_land</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.home-hero {
  background: url("https://static1.squarespace.com/static/58cc676c86e6c09542c6661a/t/5b9edd3f70a6ad3a54247b37/1537138020860/katie-smith-104748-unsplash.jpg?format=750w");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
