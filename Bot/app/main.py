import threading
import time
import os

import telebot
from telebot import types
from notifiers import get_notifier
from dotenv import load_dotenv, find_dotenv
from pydantic import BaseModel
from fastapi import FastAPI

load_dotenv(find_dotenv())

TOKEN = os.getenv('TOKEN')
ChatID = os.getenv('ChatID')
telegram = get_notifier('telegram')
app = FastAPI()
bot = telebot.TeleBot(TOKEN)


class UserData(BaseModel):
    user_name: str
    chat_id: int
    project_name: str
    date: str
    project_id: str


test = UserData
test.user_name = "Мишаня"
test.chat_id = "421268717"
test.project_name = "Математика не по детски"
test.date = "18.02.2023 13:00"
test.project_id = "23df119b-dc1d-46c9-bd1b-4cc927ccf504"


def create_notify(user_data):
    btn1 = types.InlineKeyboardMarkup()
    btn1.add(types.InlineKeyboardButton(f'{user_data.project_name}', url="https://grants.myrosmol.ru/projects/" + user_data.project_id))
    telegram.notify(token=TOKEN, chat_id=user_data.chat_id,
                    message=f'Привет, {user_data.user_name}. У вас есть незаполненные '
                            f'проекты "{user_data.project_name}", стартует {user_data.date}!')
    bot.send_message(user_data.chat_id, 'Чтобы заполнить перейдите по ссылке ниже', reply_markup=btn1)
    return "success"


@bot.message_handler(commands=['start'])
def start(message):
    name = f'Привет, {message.from_user.first_name}. Я ботик, буду отправлять тебе уведомления о всех твоих черновиках' \
           f'и проектах, которые стартанут в ближайшее время. Спасибо что выбрал меня). '
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    btn1 = types.KeyboardButton("Отключить уведомления")
    markup.add(btn1)
    bot.send_message(message.chat.id, name, reply_markup=markup)
    # time.sleep(5)
    # telegram.notify(token=TOKEN, chat_id=ChatID, message="Я еще тут")
    # create_notify(test)


@bot.message_handler()
def get_user_text(message):
    bot.send_message(message.chat.id, message, parse_mode='html')


@app.on_event("startup")
async def startup_event():
    t = threading.Thread(target=bot.polling, daemon=True)
    t.start()


@app.post("/")
def keywords_from_text(user_data: UserData):
    return create_notify(user_data)


@app.get("/")
def run_test():
    create_notify(test)
