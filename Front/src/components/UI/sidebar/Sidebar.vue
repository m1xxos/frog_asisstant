<template>
  <div class="sections">
    <div>Пользователь</div>
    <section-buttons-main name="МЕРОПРИЯТИЯ" @click="projectsVisible=false" link="events"/>
    <section-buttons-main name="МОИ ПРОЕКТЫ" @click="projectsVisible=true" link="projects"/>
    <section-buttons-main name="АРХИВ ПРОЕКТОВ" @click="projectsVisible=false" link="projects-archive"/>
    <section-buttons-main name="МОИ ЗАЯВКИ" @click="projectsVisible=false" link="participants"/>
    <section-buttons-main name="ГРАНТОВЫЕ СОГЛАШЕНИЯ" @click="projectsVisible=false" link="agreements"/>
    <section-buttons-main name="ОТЧЁТЫ" @click="projectsVisible=false" link="reports"/>
  </div>

</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      projectsVisible: false,
    }
  },
  mounted() {

  },
}
</script>

<style scoped>
.sections{
  display: flex;
  flex-direction: column ;
}
</style>