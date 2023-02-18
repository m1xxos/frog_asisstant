<template>
  <div class="container">
    <div class="sections">
      <div class="menu">
        <div>Пользователь</div>
        <section-buttons-main name="МЕРОПРИЯТИЯ" @click="projectsVisible=false"/>
        <section-buttons-main name="МОИ ПРОЕКТЫ" @click="projectsVisible=true"/>
        <section-buttons-main name="АРХИВ ПРОЕКТОВ" @click="projectsVisible=false"/>
        <section-buttons-main name="МОИ ЗАЯВКИ" @click="projectsVisible=false"/>
        <section-buttons-main name="ГРАНТОВЫЕ СОГЛАШЕНИЯ" @click="projectsVisible=false"/>
        <section-buttons-main name="ОТЧЁТЫ" @click="projectsVisible=false"/>
      </div>
    </div>
    <div class="middle">
      <my-projects v-model:show="projectsVisible"/>
      <p v-if="!projectsVisible">Контактные данные региональных органов исполнительной власти, реализующих молодежную политику</p>
    </div>
    <div class="chat">
      чат
    </div>
  </div>

</template>

<script>
import SectionButtonsMain from "@/components/UI/SectionButtonsMain";
import MyProjects from "@/components/MyProjects";
export default {
  name: "MainView.vue",
  components: {SectionButtonsMain, MyProjects},
  data() {
    return {
      projectsVisible: false,
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 48px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}

.menu {
  width: 256px;
  background-color: #f6f7f8;
}

.chat {
  min-width: 600px;
  background-color: white;
}

.middle {
  background-color: white;
  width: available;
}
</style>