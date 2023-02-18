<template>
  <navbar/>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PT Root UI, sans-serif;
  background-color: #F5F5F5;
}
</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar }
}
</script>