<template>
  <v-container fluid class="discover pa-2">
    <h3 class="discover__heading">Discover</h3>
    <div class="discover__content">
      <div
        v-for="(user, index) in discoverData"
        :key="index"
        class="discover__content-card"
        :class="{ 'discover__content-image--1': index === 1 }"
      >
        <img
          class="discover__content-image"
          :src="getImage(user.profile)"
          alt="Dan"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      discoverData: [
        {
          profile: "hotel1.jpg",
        },
        {
          profile: "hotel2.jpg",
        },
        {
          profile: "hotel3.jpg",
        },
        {
          profile: "sergio.jpg",
          username: "Sharon",
        },
        {
          profile: "dan.jpg",
          username: "Grace",
        },
        {
          profile: "etty.jpg",
          username: "Dave",
        },
        {
          profile: "prince.jpg",
          username: "Becky",
        },
        {
          profile: "hotel2.jpg",
          username: "Betty",
        },
        {
          profile: "nature3-min.jpg",
          username: "Sharon",
        },
        {
          profile: "nature4-min.jpg",
          username: "Sharon",
        },
        {
          profile: "nature5-min.jpg",
          username: "Sharon",
        },
        {
          profile: "nature6-min.jpg",
          username: "Sharon",
        },
        {
          profile: "nature7-min.jpg",
          username: "Sharon",
        },
        {
          profile: "hero.jpg",
          username: "Ann",
        },
        {
          profile: "nature1-min.jpg",
          username: "Sharon",
        },
        {
          profile: "nature2-min.jpg",
          username: "Ben",
        },
        {
          profile: "hotel3.jpg",
          username: "Emmanuel",
        },

        {
          profile: "dan.jpg",
          username: "Mary",
        },
      ],
    };
  },

  methods: {
    getImage(image) {
      return require(`../assets/imgs/${image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/discover";
</style>