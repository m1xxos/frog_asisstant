<template>
  <p>
    <strong>ОБЩЕЕ</strong><br>
    Название проекта должно содержать в себе как описательную часть, так и творческую, креативную. При выборе региона - необходимо указать субъект Российской Федерации, в котором будет происходить реализация проекта!
  </p>
  <p>Учитывайте, что проект не может длиться более 1 календарного года.</p>

    <p>Обратите внимание на актуальность данных, а также на то, что руководителем проекта должно являться лицо, от имени которого подается заявка на Конкурс.
  </p>
    <form-input placeholder="Название проекта"/>
    <form-input placeholder="Регион реализации проекта"/>
  <form-text-separator>Автор проекта  </form-text-separator>
  <div class="author">
    <form-input placeholder="Имя"/>
    <form-input placeholder="E-mail"/>
    <form-input placeholder="Телефон"/>
    <form-input placeholder="Дата рождения"/>
  </div>

  <form-text-separator>Общая информация</form-text-separator>
  <form-input placeholder="Масштаб реализации проекта"/>
  <form-input placeholder="Дата начала и окончания проекта"/>
  <form-text-separator>Руководитель проекта</form-text-separator>
  <form-input placeholder="Опыт руководителя"/>
  <form-input placeholder="Описание функционала руководителя"/>
  <form-input placeholder="Адрес регистрации руководителя проекта"/>
  <form-input placeholder="Видео-визитка (ссылка на ролик на любом видеохостинге)"/>
  <div class="buttons">
    <main-button text="СОЗДАТЬ ЧЕРНОВИК"></main-button>
    <main-button text="СОЗДАТЬ ПРОЕКТ"></main-button>
  </div>
</template>

<script>
import FormInput from "@/components/form/UI/FormInput";
import FormTextSeparator from "@/components/form/UI/FormTextSeparator";
import MainButton from "@/components/UI/main-container/MainButton";

export default {
  name: "FormCreateProject",
  components: {FormInput, FormTextSeparator, MainButton}

}
</script>

<style scoped>
p{
  margin: 8px 0;
  background-color: white;
}

</style>