<template>
  <navbar/>
  <button @click="showChat">Помощник</button>
  <chat-module v-model:show="chatVisible"/>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PT Root UI, sans-serif;
}
chat-module{
  align-content: flex-end;
}
</style>
<script>
import Navbar from "@/components/Navbar";
import MiddleContainer from "@/views/MiddleContainer";
import ChatModule from "@/components/chat/ChatModule";
import Sidebar from "@/components/UI/sidebar/Sidebar";
export default {
  components: {Sidebar, MiddleContainer, Navbar, ChatModule },
  data() {
    return{
      chatVisible: false
    }
  },
  methods:{
    showChat(){
      this.chatVisible = true;
    }
  }
}
</script>