// See https://aka.ms/new-console-template for more information
using System;

class QuadraticFx {
    static void Main(){
        FuncParameters(1,10,-24);
    }
    
     static void FuncParameters(float a, float b, float c){
        //quadratic equation standard equation: x^2 + bx + c = 0
        // float a, b, c;
        double delta,x1, x2;

        delta = Math.Pow(b, 2) - (4*a*c);

    if ( a == 0) {
        Console.WriteLine("The paramaters entered are not of a quadratic equation");
        }

    else if ( delta < 0){
            Console.WriteLine("The solution to the parameters entered are outside of the scope of this application");
        }
    else {
        x1 = (-b + Math.Sqrt(delta))/(2*a);
        x2 = (-b - Math.Sqrt(delta))/(2*a);

        Console.WriteLine(" x1 = {0} \n x2 = {1} ",x1,x2);
        }
    }
}