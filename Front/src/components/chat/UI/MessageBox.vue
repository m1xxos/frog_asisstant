<template>
<div class="container-message">
  <div v-for="message in listMessages">
    <message :text=message.text :justifyText=message.props.justifyText :backgroundColor=message.props.backgroundColor :radius=message.props.radius :colorText=message.props.colorText />
  </div>
</div>
</template>

<script>
import Message from "@/components/chat/UI/Message";
import {mapState} from "vuex";
export default {
  name: "MessageBox",
  components: {Message},
  computed: {
    ...mapState({
      listMessages: state => state.listMessages,
    })
  }
}
</script>

<style scoped lang="scss">
.container-message{
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  padding: 16px;
  grid-area: B;
  overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
}
</style>