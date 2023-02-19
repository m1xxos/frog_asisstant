<template>
<div class="container-bottom">
  <div class="input">
  <input v-model="this.textMessage" placeholder="Задайте вопрос">
    <button @click="sendMessage"><img src="@/assets/send.svg" width="24"></button>
  </div>
  <img src="@/assets/micro.svg" alt="">
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatBottom",
  data(){
    return{
      textMessage: '',
    }
  },
  methods: {
    async sendMessage(){
      if (this.textMessage!==''){
        this.$store.state.listMessages.unshift({
          text: this.textMessage,
          props:{
            justifyText: 'right',
            backgroundColor: '#8C64D8',
            radius: '24px 0px 24px 24px',
            colorText: 'white'
          }
        })
        await axios.post('http://185.97.203.28:3000/bot/keyword',{
          'keyword': this.textMessage
        }).then(response => {
          this.$store.state.listKeys = response.data.data;
          this.$store.state.listMessages.unshift(
              {
                text: response.data.text,
                props:{
                  justifyText: 'left',
                  backgroundColor: '#f3f3f3',
                  radius: '0px 24px 24px 24px',
                  colorText: 'black'
                }
              }
          );
        })
        this.textMessage = ''
      }
    }
    },
}
</script>

<style scoped lang="scss">
.container-bottom{
  display: flex;
  grid-area: D;
  padding: 0 16px 16px 16px;
  gap: 16px;
}
.input{
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid #DDE2E5;
  width: 100%;
  overflow: hidden;
  input{
    border: none;
    width: 100%;
    font-size: 14px;
    &:focus{
      outline: none;
    }
  }
  button{
    border: none;
    background-color: transparent;
  }

}
</style>