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
        birthmonth = int(input("\nEnter your birth month: "))
        if birthmonth > 12 or birthmonth < 1:
            print("\nThe birth month must be a number between 1...12")

            program_exit_request = input('\nPress "c" to continue or any key to exit the program: ')
            if program_exit_request == "c" or program_exit_request == "C" :
                continue
            else:
                break

        birthday = int(input("\nEnter your birthday: "))
        if birthday > 31 or birthday < 1:
            print("\nThe birthday must be a number between 1...31")

            program_exit_request = input('\nPress "c" to continue or any key to exit the program: ')
            if program_exit_request == "c" or program_exit_request == "C" :
                continue
            else:
                break
    except:
        print("\nThe input key(s) are not digits.Please enter your birth day and month number.")
    else:
        Michee_birthday_countdown = birthday_countdown(birthday,birthmonth)
        days_until_birthday = Michee_birthday_countdown.compute_countdown()
        print(f"\nThere are {days_until_birthday} days until birthday")
        break