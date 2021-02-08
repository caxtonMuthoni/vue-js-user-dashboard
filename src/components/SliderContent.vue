<template>
  <v-sheet class="slider">
    <v-slide-group
      v-model="slider"
      class="pa-2 slider-group"
      active-class="success"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    >
      <v-slide-item v-for="(user, index) in sliderData" :key="index">
        <div class="slider-card-items">
          <div class="slide-item-group">
            <div class="slide-card__indicator-container mb-1">
              <div
                class="slide-card__indicator-item"
                v-for="n in 4"
                :key="n"
                :class="{ 'blue lighten-2': n % 2 === 0 }"
              >
                &nbsp;
              </div>
            </div>

            <div class="slide-card">
              <img
                class="slide-card__image"
                :src="getImage(user.profile)"
                alt=""
              />
            </div>
            <p class="slide-card__username">
              {{ user.username | truncateString(10) }}
            </p>
          </div>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    slider: null,
    sliderData: [
      {
        profile: "sergio.jpg",
        username: "Sharon Muthoni",
      },
      {
        profile: "dan.jpg",
        username: "Grace Marie",
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
        profile: "hotel1.jpg",
        username: "Betty",
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
  }),

  methods: {
    getImage(image) {
      return require(`../assets/imgs/${image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/slide-card";
</style>style