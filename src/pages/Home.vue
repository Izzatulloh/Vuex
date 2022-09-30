<template>
  <h1>{{getUser}}</h1>
  <div class="container"></div>
</template>
<script>
export default {
computed:{
  getUser(){
    return this.$store.state.users
  }
}
};
</script>
