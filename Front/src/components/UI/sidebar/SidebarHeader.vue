<template>
<p>{{name}}</p>
</template>

<script>
export default {
  name: "SidebarHeader",
  props: {
    name: String
  }
}
</script>

<style scoped>
p{
  height: 70px;
  padding: 20px 18px;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #dedee1;
}
</style>