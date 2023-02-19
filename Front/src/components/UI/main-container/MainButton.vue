<template>
<button>{{text}}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: String
  }
}
</script>

<style scoped>
button{
  height: 45px;
  background-color: #faa419;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin: auto 8px;
}
</style>