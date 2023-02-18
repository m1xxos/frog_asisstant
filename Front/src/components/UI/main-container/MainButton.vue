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
  background-color: #faa419;
  padding: 15px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 12px;
}
</style>