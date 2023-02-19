<template>
  <div class="header">
    <p class="text">{{ name }}</p>
    <slot></slot>
    <div class="help-button">
      <p v-if="!this.$store.state.chatVisible">Помощь</p>
      <button @click="showChat">
        <img src="@/assets/support.svg">
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ContainerHeader",
  props: {
    name: String
  },
  methods: {
    ...mapActions({
      showChat: "showChat"
    }),
  },

}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: fit-content;
  background-color: white;
  display: flex;
  padding: 12px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #dedee1;

  .text {
    background-color: white;
    font-size: 30px;
    font-weight: bold;
    margin: auto 18px;
  }
}

button {
  height: min-content;
  border: none;
  background-color: transparent;
}

.helper {
  font-size: 18px;
  font-weight: bold;
  margin: auto 0;
}

;
.help-button {
  height: 45px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto 0;

  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>