import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    chatVisible: false,
    listKeys: [],
    listMessages: [
      {
        text: 'Добро пожаловать на платформу ФГАИС «Молодёжь России»! Цифровой ассистент готов ответить на ваши вопросы!',
        props:{
          justifyText: 'left',
          backgroundColor: '#f3f3f3',
          radius: '0px 24px 24px 24px',
          colorText: 'black'
        }
      }
    ],
    textMessage: {
      text: '',
      props:{
        justifyText: '',
        backgroundColor: '',
        radius: '',
        colorText: ''
      }
    }
  },
  getters: {
  },
  mutations: {
    setChatVisible(state, chatVisible){
      state.chatVisible = chatVisible;
    },
    setAskMessage(state, askMessage){
      state.askMessage = askMessage;
    },
    setAnswerMessage(state, answerMessage){
      state.answerMessage = answerMessage;
    }
  },
  actions: {
    showChat({commit, state}){
      if (state.chatVisible){
        commit('setChatVisible',false);
      }
      else commit('setChatVisible', true);
    },
    closeChat({commit}){
      commit('setChatVisible',false);

    },

  },
  modules: {
  }
})
