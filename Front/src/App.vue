<template>
  <navbar/>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PT Root UI, sans-serif;

  button{
    cursor: pointer;
  }
}
</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>