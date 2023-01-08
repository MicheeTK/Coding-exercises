import os
import datetime
os.system("cls")#clean terminal


def birthday_countdown(birthmonth, birthday):
    today = datetime.datetime.now()
    birthday = datetime.datetime(today.year, birthmonth, birthday)

    if birthday < today:
        birthday = birthday.replace(year = today.year + 1)
    return (birthday - today).days
    
age = 30
birthmonth = 8
birthday = 2

days_until_birthday = birthday_countdown(birthmonth, birthday)

print(f"There are {days_until_birthday} days until birthday")