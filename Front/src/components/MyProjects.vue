<template>
  <div class="container">
    <sidebar/>
      <middle-container>
          <container-header name="Мои проекты">
            <div class="selectors">
              <selector name="Регион"/>
              <selector name="Тип проекта"/>
              <selector name="Шаблон проекта"/>
              <form-input placeholder="Поиск"/>
            </div>
            <main-button text="ДОБАВИТЬ ПРОЕКТ" @click="$router.push('/createproject')"></main-button>
          </container-header>
      </middle-container>
  </div>
</template>

<script>
import ContainerHeader from "@/components/UI/main-container/ContainerHeader";
import Selector from "@/components/UI/main-container/Selector";
import MiddleContainer from "@/views/MiddleContainer";
import Sidebar from "@/components/UI/sidebar/Sidebar";
import MainButton from "@/components/UI/main-container/MainButton";
import FormInput from "@/components/form/UI/FormInput";
export default {
  name: "MyProjects",
  components: {FormInput, MainButton, MiddleContainer, Selector, ContainerHeader, Sidebar},
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
.selectors{
  display: flex;
  gap: 10px;
  align-items: center;
}

</style>