<template>
<div class="message">
  <div class="message-text">
    <p>{{text}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: '',
    justifyText: '',
    backgroundColor: '',
    radius: '',
    colorText: ''
  }
}
</script>

<style scoped lang="scss">
.message{
  width: 100%;
  display: flex;
  justify-content: v-bind(justifyText);
  min-height: 36px;

  .message-text{
    width: fit-content;
    max-width: 80%;
    background-color: v-bind(backgroundColor);
    border-radius: v-bind(radius);
    padding: 16px;
    color: v-bind(colorText);
  }
}
</style>