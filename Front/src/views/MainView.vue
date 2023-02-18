<template>
  <div class="container">
<sidebar/>
    <middle-container>
        <container-header name="Контактные данные региональных органов исполнительной власти, реализующих молодежную политику"/>
    </middle-container>
  </div>

</template>

<script>
import SectionButtonsMain from "@/components/UI/sidebar/SectionButton";
import MyProjects from "@/components/MyProjects";
import Sidebar from "@/components/UI/sidebar/Sidebar";
export default {
  name: "MainView.vue",
  components: {SectionButtonsMain, MyProjects, Sidebar},
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