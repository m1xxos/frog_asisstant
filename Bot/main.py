import telebot
from telebot import types
from notifiers import get_notifier
import time
import os
from dotenv import load_dotenv, find_dotenv
import requests
from pydantic import BaseModel

result = requests.get("https://google.com")
print(result)


load_dotenv(find_dotenv())

TOKEN = os.getenv('TOKEN')
ChatID = os.getenv('ChatID')
telegram = get_notifier('telegram')

bot = telebot.TeleBot(TOKEN)

class UserData(BaseModel):
    user_name: str
    chat_id: int
    project_name: str
    date: str
    project_id: str

test = UserData
test.user_name = "Валера"
test.chat_id = "822057079"
test.project_name ="Математика не по детски"
test.date = "18.02.2023 13:00"
test.project_id = "fdgjh2-fghjfgkh-fghk"

def create_notify(UserData):
    btn1 = types.InlineKeyboardMarkup()
    btn1.add(types.InlineKeyboardButton(f'{UserData.project_name}', url="https://google.com/" + UserData.project_id))
    telegram.notify(token=TOKEN, chat_id=UserData.chat_id, message=f'Привет, {UserData.user_name}. У вас есть незаполненные '
            f'проекты "{UserData.project_name}", стартует {UserData.date}!')
    bot.send_message(UserData.chat_id, 'Чтобы заполнить перейдите по ссылке ниже', reply_markup=btn1)


@bot.message_handler(commands=['start'])
def start(message):
        name = f'Привет, {message.from_user.first_name}. Я ботик, буду отправлять тебе уведомления о всех твоих черновиках' \
               f'и проектах, которые стартанут в ближайшее время. Спасибо что выбрал меня). '
        markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
        btn1 = types.KeyboardButton("Отключить уведомления")
        markup.add(btn1)
        bot.send_message(message.chat.id, name, reply_markup=markup)
        time.sleep(5)
        telegram.notify(token=TOKEN, chat_id=ChatID, message="Я еще тут")
        create_notify(test)

@bot.message_handler()
def get_user_text(message):
    bot.send_message(message.chat.id, message, parse_mode='html')

bot.polling(none_stop=True)