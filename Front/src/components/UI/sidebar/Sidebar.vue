<template>
  <div class="sections">
    <div><img src="@/assets/img.png" alt="" width="256"></div>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/awards.svg" width='24'  name="МЕРОПРИЯТИЯ" @click="projectsVisible=false" link="events"></section-buttons-main>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/ereader.svg" width='24' name="МОИ ПРОЕКТЫ" @click="$router.push('/projects')"/>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/folder.svg" width='24' name="АРХИВ ПРОЕКТОВ" @click="projectsVisible=false" link="projects-archive"/>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/check-r.svg" width='24' name="МОИ ЗАЯВКИ" @click="projectsVisible=false" link="participants"/>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/transcript.svg" width='24' name="ГРАНТОВЫЕ СОГЛАШЕНИЯ"  @click="$router.push('/agreements')"/>
    <section-buttons-main svg="https://grants.myrosmol.ru/icons/transcript.svg" width='24' name="ОТЧЁТЫ" @click="projectsVisible=false" link="reports"/>
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