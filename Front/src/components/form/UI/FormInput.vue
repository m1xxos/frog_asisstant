<template>
  <input :placeholder="placeholder" :required="required">
</template>

<script>
export default {
  name: "FormInput",
  props: {
    placeholder: String,
    required: Boolean
  }
}
</script>

<style scoped>
input{
  height: 45px;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #a1a9b0;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin:8px 0;
}
</style>