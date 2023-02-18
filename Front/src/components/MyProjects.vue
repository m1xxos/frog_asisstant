<template>
  <div class="container__projects" v-if="show">
    <div class="header">
      <p>Мои проекты</p>
    </div>
    <div class="selectors">
      <select name="region" id="select_region">
        <option>Регион</option>
      </select>
      <select name="type" id="select_type" >
        <option>Тип проекта</option>
      </select>
      <select name="reference" id="select_reference" >
        <option>Шаблон проекта</option>
      </select>
      <input type="text" placeholder="Поиск">
    </div>
    <div class="list">
      <p>
        Ничего не найдено
      </p>
      <button @click="$router.push(`/createproject`)">Добавить проект </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .header{
      height: 70px;
      background-color: white;
      display: flex;
      gap: 10px;
      padding: 12px 0;
      justify-content: left;
      p {
        background-color: white;
        font-size: 30px;
        font-weight: bold;
        margin: auto 0;
      }
  }
  .selectors{
    background-color: white;
    display: flex;
    gap: 8px;
    select{
      font-size: 13px;
      padding: 8px;
      background-color: white;
      border: 1px solid #acb5bd;
      border-radius: 6px;
      option{
        color: black;
      }
    }
  }
</style>