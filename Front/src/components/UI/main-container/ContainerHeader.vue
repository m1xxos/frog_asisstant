<template>
  <div class="header">
    <p>{{ name }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerHeader",
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.header{
  height: 70px;
  background-color: white;
  display: flex;
  padding: 12px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #acb5bd;
p {
  background-color: white;
  font-size: 30px;
  font-weight: bold;
  margin: auto 0;
}
}
</style>