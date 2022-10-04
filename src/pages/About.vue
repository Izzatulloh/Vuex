<template >
  <div class="main">
    <div class="container">
      <h2>{{ length }}</h2>
      <p>{{ posts ?? "nma bovoti" }}</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      length: null,
    };
  },
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["getPostsLength"]),
  },
  methods: {
    ...mapActions(["getPost"]),
  },
  async mounted() {
    await this.getPost();
    this.length = this.getPostsLength;
  },
};
</script>
<style>
</style>