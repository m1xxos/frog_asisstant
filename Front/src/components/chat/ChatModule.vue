<template>
  <div class="container" v-if="show">
    <div>Это чат</div>
    <button @click="closeChat">Закрыть</button>
  </div>

</template>

<script>
export default {
  name: "ChatModule",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeChat(){
      this.$emit('update:show', false)
  }
  }
}
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  width: 600px;

}
</style>