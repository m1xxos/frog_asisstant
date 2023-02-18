<template>
  <div class="container">
    <div>
      <div>
        Разделы
      </div>
      <section-buttons-main name="ОБЩЕЕ"/>
      <section-buttons-main name="О ПРОЕКТЕ"/>
      <section-buttons-main name="КОМАНДА"/>
      <section-buttons-main name="РЕЗУЛЬТАТЫ"/>
      <section-buttons-main name="КАЛЕНДАРНЫЙ ПЛАН"/>
      <section-buttons-main name="МЕДИА"/>
      <section-buttons-main name="СОФИНАНСИРОВАНИЕ"/>
      <section-buttons-main name="ДОП. ФАЙЛЫ"/>
      <section-buttons-main name="РАСХОДЫ"/>
    </div>
    <div class="middle">
      <div class="header">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        <p>
          Новый проект
        </p>
      </div>

    </div>
    <div class="chat">
      чат
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateProject",
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 48px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}

.chat {
  min-width: 600px;
  background-color: white;
}

.middle {
  background-color: white;

  .header {
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

    svg {
      margin: auto 0;
      background-color: white;
    }
  }
}
</style>