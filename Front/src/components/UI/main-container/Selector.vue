<template>
  <select>
    <option>{{name}}</option>
  </select>
</template>

<script>
export default {
  name: "Selector",
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
select{
  font-size: 13px;
  padding: 8px;
  background-color: white;
  border: 1px solid #acb5bd;
  border-radius: 6px;
option{
  color: black;
}
}
</style>