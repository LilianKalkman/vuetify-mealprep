<template>
  <v-container>
    <v-layout column>
      <v-flex class="display-2 text-s-center my-5">Big Title Goes Here</v-flex>
      <template v-for="n in 3">
        <v-flex>
          <div class="headline mt-3">Lorem Ipsum</div>
          <p
            class="subheading mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium.</p>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeDetails"
};
</script>

<style>
</style>
