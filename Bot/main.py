import telebot
from telebot import types
from notifiers import get_notifier
import time
import os
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())

TOKEN = os.getenv('TOKEN')
ChatID = os.getenv('ChatID')

bot = telebot.TeleBot(TOKEN)
# k = 0
# while k < 10:
#         time.sleep(5)
#         telegram = get_notifier('telegram')
#         telegram.notify(token=TOKEN, chat_id=ChatID, message="Мишаня го спать")
#         k = k + 1

@bot.message_handler(commands=['start'])
def start(message):
    name = f'Привет, {message.from_user.first_name}. Я ботик, буду отправлять тебе уведомления о всех твоих черновиках' \
           f'и проектах, которые стартанут в ближайшее время. Спасибо что выбрал меня). '
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    btn1 = types.KeyboardButton("Отключить уведомления")
    markup.add(btn1)
    bot.send_message(message.chat.id, name, reply_markup=markup)
    time.sleep(5)
    telegram = get_notifier('telegram')
    telegram.notify(token=TOKEN, chat_id=ChatID, message="Я еще тут")

# # @bot.message_handler()
# # def get_user_text(message):
# #     bot.send_message(message.chat.id, message, parse_mode='html')
#
# @bot.message_handler(commands=['website'])
# def website(message):
#     markup = types.InlineKeyboardMarkup()
#     markup.add(types.InlineKeyboardButton("Продолжить заполнение", url="https://google.com"))
#     bot.send_message(message.chat.id, "Вы не заполнили до конца данные в проекте ", reply_markup=markup)
#
bot.polling(none_stop=True)