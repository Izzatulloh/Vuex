<template>
  <!-- <h1>{{ getUsers }}</h1> -->
  <div class="container">
    <!-- <h1>{{ getAdmin }}</h1> -->
    <h2>{{ getNewUser ?? "salom" }}</h2>
  </div>
</template>
<script>
import store from '@/store';
export default {
  computed: {
   getNewUser(){
    return this.$store.state.user
   },
    getUsers() {
      return this.$store.state.users;
    },
    getAdmin() {
      return this.$store.getters.getUserAdmin;
    },
  },
  methods: {
    getUser() {
      this.$store.dispatch("setUser");
    },
  },
  mounted() {
    this.getUser()
  },
};
</script>
