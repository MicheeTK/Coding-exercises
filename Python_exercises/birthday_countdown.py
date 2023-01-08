import os
import datetime
os.system("cls")#clean terminal

class birthday_countdown:
    def __init__(self, birthday, birthmonth):
        self.birthday = birthday
        self.birthmonth = birthmonth

    def compute_countdown(self):
        today = datetime.datetime.now()
        birthday = datetime.datetime(today.year, self.birthmonth, self.birthday)

        if birthday < today:
            birthday = birthday.replace(year = today.year + 1)
        return (birthday - today).days

while True:
    try:
        birthmonth = int(input("Enter your birth month: "))
        birthday = int(input("Enter your birthday: "))
    # except ValueError as month_er:
    #     print(month_er)
    except:
        print("\nThe input key(s) are not digits.Please enter your birth day and month digits.\n")
    else:
        Michee_birthday_countdown = birthday_countdown(birthday,birthmonth)
        days_until_birthday = Michee_birthday_countdown.compute_countdown()
        print(f"There are {days_until_birthday} days until birthday")

        break