<template>
  <div class="sections">
    <sidebar-header name="Разделы"/>
  <section-buttons-main hidden name="ОБЩЕЕ" :active=active />
  <section-buttons-main hidden name="О ПРОЕКТЕ"/>
  <section-buttons-main hidden name="КОМАНДА"/>
  <section-buttons-main hidden name="РЕЗУЛЬТАТЫ"/>
  <section-buttons-main hidden name="КАЛЕНДАРНЫЙ ПЛАН"/>
  <section-buttons-main hidden name="МЕДИА"/>
  <section-buttons-main hidden name="СОФИНАНСИРОВАНИЕ"/>
  <section-buttons-main hidden name="ДОП. ФАЙЛЫ"/>
  <section-buttons-main hidden name="РАСХОДЫ"/>
  </div>
</template>

<script>
export default {
  name: "SidebarProject",
  components: {},

  data(){
    return{
      active: '#faa419',
      textColorActive: '#ffffff',
      isActive: Boolean
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.sections{
  display: flex;
  flex-direction: column ;
}
</style>