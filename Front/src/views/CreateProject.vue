<template>
  <div class="container">
    <div>
      <sidebar-project/>
    </div>
    <middle-container>
      <div class="middle">
        <container-header name="Новый проект">
        </container-header>
        <div class="form">
          <form-create-project/>
        </div>
      </div>
    </middle-container>
  </div>
</template>

<script>
import ContainerHeader from "@/components/UI/main-container/ContainerHeader";
import SidebarProject from "@/components/UI/sidebar/SidebarProject";
import FormCreateProject from "@/components/form/FormCreateProject";
import MiddleContainer from "@/views/MiddleContainer";
export default {
  name: "CreateProject",
  components: {SidebarProject, ContainerHeader, FormCreateProject, MiddleContainer},
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