<template>
  <div class="container">
    <div>
      <div>
        Разделы
      </div>
      <sidebar-project/>
    </div>
    <div class="middle">
      <container-header name="Новый проект">
      </container-header>
      <div class="form">
        <form-create-project/>
      </div>
    </div>
  </div>
</template>

<script>
import ContainerHeader from "@/components/UI/main-container/ContainerHeader";
import SidebarProject from "@/components/UI/sidebar/SidebarProject";
import FormCreateProject from "@/components/form/FormCreateProject";
export default {
  name: "CreateProject",
  components: {SidebarProject, ContainerHeader, FormCreateProject},
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
  background-color: white;
}
.form{
  padding: 20px 40px 32px;
  background-color: white;
}
</style>