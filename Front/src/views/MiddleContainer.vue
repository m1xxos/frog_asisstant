<template>
  <div class="columns">
    <slot></slot>
    <chat-module/>
  </div>
</template>

<script>
import ChatModule from "@/components/chat/ChatModule";

export default {
  name: "MiddleContainer",
  components: {ChatModule}
}
</script>

<style scoped lang="scss">
.columns{
  display: flex;
  border-left: 1px solid #dedee1;
  height: 100%;
}

</style>