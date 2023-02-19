<template>
<div class="container-middle">
  <div v-for="keyword in listKeys">
  <button @click="sendMessage(keyword)">{{keyword}}</button>
  </div>
  <button @click="click">Click</button>
</div>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
import { io } from "socket.io-client";
export default {
  name: "ChatKeywords",
 computed: {
    ...mapState({
      listKeys: state => state.listKeys,
    })
 },
  methods: {
    async sendMessage(keyword){
      this.$store.state.listMessages.unshift({
        text: keyword,
        props:{
          justifyText: 'right',
          backgroundColor: '#8C64D8',
          radius: '24px 0px 24px 24px',
          colorText: 'white'
        }
      })
      await axios.post('http://185.97.203.28:3000/bot/keyword',{
        'keyword': keyword
      }).then(response => {
        this.$store.state.listKeys = response.data.data ? response.data.data : this.$store.state.listKeys.filter((key)=>key!==keyword)
        if (this.$store.state.listKeys.length === 0){

        }
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

    },
    async click(){
      await axios.get('http://185.97.203.28:3000/bot/setWS').then(response => {
        console.log(response)
        const socket = io('http://185.97.203.28:3000');
        socket.on(`recMessage${response.data.id}`, (message) => {
          this.$store.state.listMessages.unshift({
            text: message.text,
            props:{
              justifyText: 'left',
              backgroundColor: '#f3f3f3',
              radius: '0px 24px 24px 24px',
              colorText: 'black'
            }
          });
        });
      })
    }
  },
}
</script>

<style scoped lang="scss">
.container-middle{
  grid-area: C;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 20px;

  button{
    background: #2E2F33;
    border-radius: 100px;
    color: white;
    padding: 0px 12px;
    height: 32px;
  }
}

</style>