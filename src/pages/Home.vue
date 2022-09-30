<template>
  <h1>{{ getUsers }}</h1>
  <div class="container">
    <h1>{{ getAdmin }}</h1>
    <h2>{{ getUser }}</h2>
  </div>
</template>
<script>
export default {
  computed: {
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
