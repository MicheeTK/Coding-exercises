// See https://aka.ms/new-console-template for more information
using System;

class QuadraticFx {
    static void Main(){

        while (true) {
            try{
                SolveEqx();
            }

            catch {
                Console.WriteLine("\nOne or more of the entered value is not a number.\n");
                Console.WriteLine("Would you like to try again? [Y/N]");

                string exitProgram = Console.ReadLine();

                if (exitProgram == "Y" || exitProgram == "y") {
                    continue;
                }

                else {
                Environment.Exit(0);
                }
            }
        }
    }
    
     static void SolveEqx(){
        //quadratic equation standard equation: x^2 + bx + c = 0
                Console.Write("\nEnter the value of the first constant: ");
                var a = Convert.ToDouble(Console.ReadLine());

                Console.Write("Enter the value of the second constant: ");
                var b = Convert.ToDouble(Console.ReadLine());

                Console.Write("Enter the value of the third constant: ");
                var c = Convert.ToDouble(Console.ReadLine());

        double delta,x1, x2;

        delta = Math.Pow(b, 2) - (4*a*c);

    if ( a == 0) {
        Console.WriteLine("\nThe paramaters entered are not of a quadratic equation.");
        }

    else if ( delta < 0){
            Console.WriteLine("\nThe solution to the parameters entered are outside of the scope of this application.\n");
        }
    else {
        x1 = (-b + Math.Sqrt(delta))/(2*a);
        x2 = (-b - Math.Sqrt(delta))/(2*a);

        Console.WriteLine(" x1 = {0} \n x2 = {1} ",x1,x2);
        }
    }
}