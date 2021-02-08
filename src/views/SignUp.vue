<template>
  <div class="signup">
    <div class="signup__inner-card">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <h1 class="signup__heading">Sign up here</h1>
            <form @submit.prevent="signUp" class="signup__form">
              <div class="signup__form-group">
                <input
                  class="signup__form-input"
                  type="file"
                  id="image"
                  placeholder="Profile picture"
                  required
                  @change="getBase64Image"
                />
                <label class="signup__form-label" for="image"
                  >Profile picture</label
                >
              </div>

              <div class="signup__form-group">
                <input
                  v-model="name"
                  class="signup__form-input"
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  autocomplete="off"
                  required
                />
                <label class="signup__form-label" for="name">Full Name</label>
              </div>

              <div class="signup__form-group">
                <input
                  v-model="amountEarned"
                  class="signup__form-input"
                  type="number"
                  id="amount"
                  placeholder="Amount Earned"
                  autocomplete="off"
                  required
                />
                <label class="signup__form-label" for="amount"
                  >Amount Earned</label
                >
              </div>

              <div class="signup__form-group">
                <textarea
                  v-model="bio"
                  class="signup__form-input"
                  rows="3"
                  id="name"
                  placeholder="Your bio/ About me"
                  required
                >
                </textarea>
                <label class="signup__form-label" for="name"
                  >Your bio/ About me</label
                >
              </div>
              <button class="signup__btn">Signup now</button>
            </form>
          </v-col>
          <v-col cols="12" md="6" class="hidden-sm-and-down">
            <div class="signup__illustration">
              <h2 class="signup__heading-two">Join the community for free</h2>
              <img
                :src="require('../assets/signup2.svg')"
                alt="SignUp image"
                class="signup__image"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      profilePic: null,
      name: "",
      amountEarned: null,
      bio: "",
    };
  },

  mounted() {
    this.getUserData();
  },

  methods: {
    ...mapActions(["setUserAction"]),

    // Get user data

    getUserData() {
      let user = this.$store.state.user.name;

      if (user) {
        user = this.$store.state.user;
      } else {
        user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          this.setUserAction(user);
          this.$router.push("/home");
          return;
        }
      }
    },

    getBase64Image(e) {
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.onloadend = () => {
        // Getting the profile picture data
        const profilePicData = reader.result;
        // Store data in the local storage
        localStorage.setItem("profilePic", profilePicData);
      };
      reader.readAsDataURL(file);
    },

    // Read image from state
    readImage(file) {
      return URL.createObjectURL(file);
    },

    signUp() {
      const user = {
        name: this.name,
        amountEarned: this.amountEarned,
        bio: this.bio,
        profilePic: localStorage.getItem("profilePic"),
      };

      localStorage.setItem("user", JSON.stringify(user));

      this.setUserAction(user);

      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/SignUp.scss";
</style>