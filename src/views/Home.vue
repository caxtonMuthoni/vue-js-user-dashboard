<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" class="maintabs">
          <v-tabs v-model="mainTab" class="maintab">
            <v-tab
              v-for="(icon, index) in mainTabIcons"
              :key="index"
              class="main-tab__tabs"
            >
              <v-icon color="grey lighten-1">{{ icon }}</v-icon>
            </v-tab>
          </v-tabs>
          <v-divider />
          <v-tabs-items v-model="mainTab">
            <v-tab-item>
              <div class="main-tab__content">
                <v-tabs
                  v-model="subTab"
                  class="sub-tab__tabs"
                  color="dark"
                  hide-slider
                  active-class="sub-tab__active-tab"
                >
                  <v-tab class="sub-tab__tab">Following</v-tab>
                  <v-tab class="sub-tab__tab">Community</v-tab>
                </v-tabs>
                <v-tabs-items v-model="subTab">
                  <v-tab-item class="sub-tab__following">
                    <SliderContent />
                    <DiscoverContent />
                  </v-tab-item>
                  <v-tab-item class="sub-tab__community"
                    >Community Tab</v-tab-item
                  >
                </v-tabs-items>
              </div>
            </v-tab-item>
            <v-tab-item> Main Tab 2 </v-tab-item>
            <v-tab-item> Main Tab 3 </v-tab-item>
            <v-tab-item> Main Tab 4 </v-tab-item>
          </v-tabs-items>
        </v-col>
        <v-col cols="12" md="4">
          <Profile />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SliderContent from "@/components/SliderContent.vue";
import DiscoverContent from "@/components/DiscoverContent.vue";
import Profile from "@/components/Profile.vue";

export default {
  name: "Home",

  components: {
    SliderContent,
    DiscoverContent,
    Profile,
  },

  data() {
    return {
      mainTab: null,
      subTab: null,
      mainTabIcons: ["mdi-home", "mdi-package", "mdi-bell", "mdi-tab"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main-tab";
@import "@/sass/sub-tab";
</style>