<template>
  <div class="container" v-if="chatVisible">
    <sidebar-header name="Цифровой ассистент"></sidebar-header>
    <chat-bottom/>
    <chat-keywords/>
    <message-box/>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";
import axios from "axios";
import SidebarHeader from "@/components/UI/sidebar/SidebarHeader";
import ChatBottom from "@/components/chat/UI/ChatBottom";
import ChatKeywords from "@/components/chat/UI/ChatKeywords";
import MessageBox from "@/components/chat/UI/MessageBox";

export default {
  name: "ChatModule",
  components: {MessageBox, ChatBottom, SidebarHeader, ChatKeywords},

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      askMessage: '',
      answerMessage: ''
    }
  },
  methods: {
    ...mapActions({
      closeChat: "closeChat",
      sendMessage: 'sendMessage'
    }),
    async sendMessage(askMessage){
      await axios.post('http://18.198.216.89:3000/bot/keyword',{
        'keyword': askMessage
      }).then(response => {
        for (let answer of response.data.data){
          console.log(answer)
        }
      })
    }
  },
  computed: {
...mapState({
    chatVisible: state => state.chatVisible,
})
  }

}
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  max-width: 100%;
  display: grid;
  border-left: 1px solid #dedee1;
  grid-template-columns: 600px;
  grid-template-rows: 70px 650px 36px 60px;
  gap: 16px 0px;
  grid-auto-flow: row;
  grid-template-areas:
  "A"
  "B"
  "C"
  "D";
}
</style>