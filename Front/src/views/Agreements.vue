<template>
  <div class="container">
    <sidebar/>
    <div class="middle">
      <middle-container>
        <container-header name="Грантовые соглашения"/>
      </middle-container>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/UI/sidebar/Sidebar";
import ContainerHeader from "@/components/UI/main-container/ContainerHeader";
import MiddleContainer from "@/views/MiddleContainer";

export default {
  name: "Agreements",
  components: {Sidebar, ContainerHeader, MiddleContainer}

}
</script>

<style scoped>
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