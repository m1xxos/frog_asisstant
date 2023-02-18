<template>
  <div class="container">
    <sidebar/>
    <div class="middle">
      <middle-container>
        <container-header name="Мои проекты">
          <div class="selectors">
            <selector name="Регион"/>
            <selector name="Тип проекта"/>
            <selector name="Шаблон проекта"/>
            <input type="text">
          </div>
        </container-header>

        <main-button @click="$router.push(`/createproject`)" text="ДОБАВИТЬ ПРОЕКТ"/>
      </middle-container>
    </div>
  </div>
</template>

<script>
import ContainerHeader from "@/components/UI/main-container/ContainerHeader";
import Selector from "@/components/UI/main-container/Selector";
import MiddleContainer from "@/views/MiddleContainer";
import Sidebar from "@/components/UI/sidebar/Sidebar";
import MainButton from "@/components/UI/main-container/MainButton";
export default {
  name: "MyProjects",
  components: {MainButton, MiddleContainer, Selector, ContainerHeader, Sidebar},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  display: grid;
  grid-template-columns: 256px 1fr;
  margin: 0 48px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
}
.middle{
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
}
.selectors{
  display: flex;
  gap: 10px;
  margin: 0 auto;
}
middle-container{
  grid-column: 2;
}
</style>