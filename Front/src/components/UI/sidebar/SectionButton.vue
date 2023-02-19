<template>
<div class="section__button">
  <img :src=svg alt="" width="24" height="24" :hidden=hidden>
  <slot></slot>
  <p>{{ name }}</p>
</div>
</template>

<script>
export default {
  name: "SectionButtonsMain",
  props: {
    name: String,
    link: String,
    active: '#f8f9fa',
    textColorActive: '#ffffff',
    svg: '',
    hidden: true,
  }
}
</script>

<style scoped lang="scss">
.section__button{
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  height: 50px;
  width: 256px;
  padding: 18px;
  font-weight: 700;
  font-size: 12px;
  background-color: v-bind('active');
  p{

  }

}
.section__button:hover{
  color: v-bind('textColorActive');
  transition: color .15s,black .15s,border-color .15s;
  p{

  }
}
</style>