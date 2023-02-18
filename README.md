# frog_asisstant
Хакатон проект 💻

# Функционал
Проект состоит из 4 частей:
* [Фронтенд чат-бота](https://github.com/m1xxos/frog_assistant/tree/main/Front)
* [Бекенд чат-бота](https://github.com/m1xxos/frog_assistant/tree/main/Back)
* [Телеграм бот для уведомлений](https://github.com/m1xxos/frog_assistant/tree/main/Bot)
* [Распознаватель текста пользователя](https://github.com/m1xxos/frog_assistant/tree/main/AI)

# Особенности
* Удобный пользовательский интерфейс
* Микро-сервисная архитектура
* Возможность масштабирования определённых модулей

# Стек технологий
* VPN
* VueJS, Postgresql, NestJS
* HTML, CSS, JavaScript, TypeScript
* Python, FastAPI, pyTelegramBotAPI
* NLP Natasha, nltk, rapidfuzz
* Docker, AWS lightsail
* Git, GitHub
* Figma

# Демо
Демо версия сервисов доступна по ссылке

Сайт приложение: http://18.198.216.89

Телеграм бот: https://t.me/hakatonAlertBot

Преобразователь текста: http://18.198.216.89:33321/docs

Бекенд чат бота: http://18.198.216.89:3000/api

# Среда запуска

1. Требуется установленный Docker

# Установка отдельных модулей
## Запуск базы данных
Запустить контейнер postgres
```
sudo docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=EXAMPLE -e PGDATA=/var/lib/postgresql/data/pgdata -v /custom/mount:/var/lib/postgresql/data  postgres
```
***
## Установка бекенд чат-бота

Перейти в папку Back

Запустить сборку контейнера
```
docker build -t <название> .
```

Запустить контейнер, передав переменные окружения
```
docker run -d -e PORT=3000 
-e DATABASE_TYPE=EXAMPLE \
-e DATABASE_HOST=EXAMPLE \
-e DATABASE_PORT=EXAMPLE \
-e DATABASE_USERNAME=EXAMPLE \
-e DATABASE_PASSWORD=EXAMPLE \
-e DATABASE_NAME=EXAMPLE \
-p 3000:3000 --name back <название> 
```
***
## Установка фронтенда чат-бота
Перейти в папку Front

Запустить сборку контейнера
```
docker build -t <название> .
```
Запустить контейнер
```
docker run -d --name frontus -p 80:8080 <название>
```
***
## Установка телеграм бота для уведомлений

Создать бота для телеграм в https://t.me/BotFather и получить токен

Перейти в папку Bot

Запустить сборку контейнера
```
docker build -t <название> .
```

Запустить контейнер, передав переменные окружения
```
docker run --name tg_bot -e TOKEN=EXAMPLE -p 8083:8083 -d <название>
```
***
## Установка распознавателя текста пользователя

Перейти в папку AI

Запустить сборку контейнера
```
docker build -t <название> .
```

Запустить контейнер
```
docker run -d --name keywords -p 33321:33321 m1xxos/frog_keywords
```
# Установка решения полностью
1. Заполните все поля EXAMPLE в файле docker-compose
2. Запустите команду docker-compose up в консоли в корне папки

# Тима
[🐸 M1xxos](https://github.com/m1xxos)

[✏️ Amir](https://github.com/AmirAlyakhunov)

[😺 K9net](https://github.com/K9net)

[🌛 Lana](https://github.com/lanaryzhkova)

[😎 KotletoVM](https://github.com/KotletoVM)