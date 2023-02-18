<template>
  <div class="sections">
  <section-buttons-main name="ОБЩЕЕ" :active=active @click="setActiveGeneral"/>
  <section-buttons-main name="О ПРОЕКТЕ"/>
  <section-buttons-main name="КОМАНДА"/>
  <section-buttons-main name="РЕЗУЛЬТАТЫ"/>
  <section-buttons-main name="КАЛЕНДАРНЫЙ ПЛАН"/>
  <section-buttons-main name="МЕДИА"/>
  <section-buttons-main name="СОФИНАНСИРОВАНИЕ"/>
  <section-buttons-main name="ДОП. ФАЙЛЫ"/>
  <section-buttons-main name="РАСХОДЫ"/>
  </div>
</template>

<script>
export default {
  name: "SidebarProject",
  data(){
    return{
      active: String,
      isActive: Boolean
    }
  },
  methods: {
    setActiveGeneral(){
        this.active = '#faa419';
      console.log(event.target)
    }
  }
}
</script>

<style scoped>
.sections{
  display: flex;
  flex-direction: column ;
}
</style>