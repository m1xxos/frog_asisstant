<template>
<div class="section__button">
  <p>{{ name }}</p>
</div>
</template>

<script>
export default {
  name: "SectionButtonsMain",
  props: {
    name: String,
  }
}
</script>

<style scoped lang="scss">
.section__button{
  height: 50px;
  width: 256px;
  padding: 18px;
  font-weight: 700;
  font-size: 12px;
  background-color: #f6f7f8;
  p{
    vertical-align: middle;
  }

}
.section__button:hover{
  color: #da8f16;
  background-color: #fef5e6;
  transition: color .15s,black .15s,border-color .15s;
  p{
    background-color: #fef5e6;
  }
}
</style>