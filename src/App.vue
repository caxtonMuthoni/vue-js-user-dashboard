<template>
  <v-app>
    <v-main>
       <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  @import '@/sass/base';
</style>
