<template>
  <div class="profile">
    <div class="section-1">
      <v-app-bar-nav-icon class="profile__nav-icon" />

      <div class="profile__about grey lighten-4">
        <div class="profile__pic">
          <img :src="user.profilePic" alt="Proile" class="profile__photo" />
        </div>
        <div class="profile__details">
          <h4 class="profile__user-name">{{ user.name }}</h4>
          <span class="profile__user-tag">@{{ user.name }}</span>
          <p class="profile__user-bio">
            {{ user.bio | truncateString(60) }}
          </p>
        </div>
      </div>

      <div class="profile__count">
        <div class="profile__count-card">
          <span class="profile__count-figure">{{following | formatNumber}}</span>
          <span class="profile__count-title"
            >Following
            <p>&nbsp;</p></span
          >
        </div>
        <div class="profile__count-card">
          <span class="profile__count-figure">{{followers | formatNumber}}</span>
          <span class="profile__count-title"
            >Followers
            <p>&nbsp;</p></span
          >
        </div>
        <div class="profile__count-card">
          <span class="profile__count-figure">{{reputation | formatNumber}}</span>
          <span class="profile__count-title">Reputation Score</span>
        </div>
      </div>

      <div class="profile__earnings">
        <div class="profile__earnings-card">
          <span class="profile__earnings-amount">KSH {{user.amountEarned | formatNumber}}</span>
          <span class="profile__earnings-title">Today Earnings</span>
        </div>

        <div class="profile__earnings-card">
          <span class="profile__earnings-amount">KSH {{user.amountEarned | formatNumber}}</span>
          <span class="profile__earnings-title">Total Earnings</span>
        </div>
      </div>

      <div class="profile__invite">
        <v-icon color="grey lighten-1" class="profile__invite-icon"
          >mdi-license</v-icon
        >
        <v-icon
          size="18"
          color="grey darken-1"
          class="profile__invite-icon-help"
          >mdi-help-circle-outline</v-icon
        >
        <div class="profile__invite-friends">
          <p class="profile__invite-description">
            Invite your friends <br />
            and earn
          </p>
          <span class="profile__invite-earn">KES 5.00</span>
          <span class="profile__invite-end-text"
            >For everyone who signs up</span
          >
        </div>
        <div class="profile__invite-divider">
          <span class="profile__invite-divider-text">OR</span>
        </div>
        <div class="profile__invite-advertiser">
          <p class="profile__invite-description">
            Introduce an advertiser and earn
          </p>
          <span class="profile__invite-earn">10%</span>
          <span class="profile__invite-end-text">of the deposit they make</span>
        </div>

        <div class="profile__invite-referral">
          <div class="profile__invite-referral-code">
            <span class="profile__invite-referral-title"
              >Your referral code</span
            >
            <span class="profile__invite-referral-code-text" id="code"
              >SHGFIWER</span
            >
          </div>
          <div class="profile__invite-referral-copy" @click="copyCode">
            <span class="profile__invite-referral-copy-code">Copy code</span>
          </div>
        </div>
      </div>

      <p class="profile__invite-text">
        Have the use this code when registering
      </p>
    </div>
    <div class="profile__footer">
      <ul class="profile__footer-list">
        <li class="profile__footer-list--item">
          <a href="#" class="profile__footer-list--link">About</a>
        </li>
        <li class="profile__footer-list--item">
          <a href="#" class="profile__footer-list--link">Privacy</a>
        </li>
        <li class="profile__footer-list--item">
          <a href="#" class="profile__footer-list--link"
            >Terms and Conditions</a
          >
        </li>
      </ul>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      followers: 2300,
      following: 1300,
      reputation:120,
      user: {},
      snackbar: false,
      timeout: 3000,
      text: "Your referral code was copied on clipboard.",
    };
  },

  async mounted() {
    this.getUserData();
  },

  methods: {
    ...mapActions(["setUserAction"]),

    // Get User data
    getUserData() {
      let user = this.$store.state.user.name;

      if (user) {
        user = this.$store.state.user;
      } else {
        user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          this.$router.push("/");
          return;
        }
      }

      this.user = user;

      this.setUserAction(user);
    },

    // Copy referral code to the clipboard
    copyCode() {
      let codeToCopy = document.querySelector("#code");
      var codeInput = document.createElement("input");
      document.body.appendChild(codeInput);
      codeInput.setAttribute("hidden", true);
      codeInput.value = codeToCopy.innerText;
      codeInput.select();

      try {
        let successful = document.execCommand("copy");
        if (successful) {
          this.snackbar = true;
        }
      } catch (err) {
        alert("Oops, unable to copy");
      }

      /* unselect the range */
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/profile";
</style>