/*Assignment # 21-25   JAVASCRIPT*/

/* Task no 1 */ 

/*var Firstname=prompt("Enter Fisrt Name");
var lastName=prompt("Enter last name");
var fullname=Firstname+ ":" +  lastName;
console.log(fullname)*/

//Task no two//

/*var Modelname=prompt("PLease Insert Your Favorite Mobile Model Name");
var Modellength=Modelname.length;
console.log("Your Favorite MObile  MOdel is    "  +   Modelname  +    "\n"  +  "  String of length is " +  Modellength     );*/

//Task no three//
/*
var name= "pakistan";
var i = name.indexOf("t");
console.log("your Search Element is"  +  name  + "\n"   + " Index No Of Your Search Element Is "  +  i  )*/

//Task no Four//
/*
var name= "pakistan";
var L = name.lastIndexOf("n");
console.log("your Search Element is " +  name  + "\n"   + " Last Index No Of Your Search Element Is "  +  L  )*/


//Task no Five//
/*
var name= "pakistan";
var L = name.charAt(3);
console.log("your Search Element is  "  +  name  + "\n"   + "3rd Char No Of Your Search Element Is "  +  L  )*/


//Task no Six//
/*
var firstname=prompt("Enter First name");
var lastname=prompt("Enter Last Name ");
var fullname=firstname.concat(lastname);
console.log(fullname);*/

//Task no Seven//
/*
var name = "ImCS"
var c = name.replace("Im" ,  "Bachelor IN "  )
console.log("Before    "  + name +  "\n" +" After     " + c)
*/

//Task no Eight//

/*var name = "var message = Ali & Sami are best friends. They play cricket & football together."
var massage = name.replace(/&/g , "and");
console.log( massage );*/

//Task Number Nine//
/*
var Number = "472";
var Word = (+Number);
console.log( Number  + " Itx String  Value  "  +  "\n" + Word  + " Itx Number Value ")*/

//Task Number Ten//
/*
var Dry=prompt("Enter ypur favorite Dry Fruite Name ");
var Froute=Dry.toUpperCase();
console.log("Your Favorite Froute Name Is  "  +  Froute  );*/

//Task Number Eleven//

 /*var Name = prompt("Enter Any Programming Language")
 firstchar =Name.slice(0,1)
 firstchar =firstchar.toUpperCase()
 otherchars =Name.slice(1)
 otherchars =otherchars.toLowerCase()
 Secondname = (firstchar + otherchars )
 console.log("User input " + Name +  "\n"  + "Title is That Know "  +  Secondname )*/

//Task NUmber 12 IS repeated replacement methode use //

//Task Number 13 //
 /*var a=prompt("Enter Any Keyboard Key And Get Ascii value  ");
 var b=a.charCodeAt()
 console.log(b)*/

 /*Task Numer 14*/

/*
 arr = ["cake", "Pastry", "Choklate", "Strawberry", "icecreame"]
 order = prompt("Welcome to Jamali Bakeri. What do you want to order, sir/mam?");
 respons = order.toLowerCase();
 result = respons.indexOf(respons)
 for(i = 0; i<5; i++ ){
      if(arr[i] === respons){
    console.log (order + " Is Available  At Index Number "     +result+ " In our bakery");  
          break;   
      }
      else{
          console.log(" We are sory Your Order  "  +  order  +  "   Is Not Available   " + result + "   In our bakery  But We Note Your Order Next Time It Will Be Available ");
          break;  
      }
  }*/

  //Task Number Sixteen//

   /* var university = "Karachi"
    for (var i = 0; i < university.length; i++) {
    console.log( university[i] + "\n" );
   }*/

   //Task Number Seventeen//

/* var name = prompt("Enter your country name")
 var result = name.slice(-1);
 console.log("User input " + name + "\n" +"Last character of input " + result)*/

 //Chapter Number 26 to 30 Math Methods//


 // Task NO one// 
 /*var a , b , c ,d 
  
 var a = prompt("enter any positive number")
 
 b = Math.round(a)
 
 c = Math.floor(a)
 
 d = Math.ceil(a)
 console.log("Number " + a + "round off value of" + b + "floor value" + c + "  ceil value: " + d )
*/

 //Task Number Three //
  /*var Number1 = -4
  Number2 = Math.abs(Number1)
  var Number2 = 5
  Number2 = Math.abs(Number2)
  console.log("The absolute value of  " + Number1 + "   is   " +  Number1 + "    The absolute value of   " +    Number2   + "   is    " + Number2 )*/

 //Task Number 4//

/* var number = Math.floor(Math.random() * 5)  + 1; 
 console.log("Random Dice is " + number )*/



// Task Number Five //
 /*var dice = Math.floor(Math.random() * 1)  +2 ; 
  if(dice === 2){
    console.log(  dice + " Tails");
 }
 else{
     console.log(  dice + " Heads"); 
    }
*/
// Task Number Seven //

/*var Uweight = prompt("Enter your Weight in Kilo Gram")
 result = Uweight.replace("Kilograms"," ")
 result = Uweight.replace("kgs"," ")
 console.log("YOur Weight Is "   +  result +  "Kilograms")*/

// Chapter Number 31 to 34 Date Methode//

//Task Number One//

/*var a = new Date();
console.log(a)*/

//Task Number Two//

/*const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
console.log("The current month is " + monthNames[d.getMonth()]);*/

//Task Number Three//

 /* var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");*/

//Task Number Five //

   /*var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var a = new Date();
   var b = dayArr[a.getDay()];
   if(b === "Sat" || "Sun"){   
    console.log("It's fun day")
   }*/

// Task Number Six //

/* var a = new Date()
 var b = a.getTime()
 var c = b/1000*60
 console.log("Current date " + a + "\n" + "Elapsed miliseconds since January 1, 1970: " + "\n" + b + "Elapsed minutes since January 1, 1970: " + "\n" + c )*/


//Task Number Eight  // 

 /*var a = new Date();
 a.setMonth(11, 31);
 console.log(  a )*/

 //Task Number Eleven//

 /*var currentDate = new Date();
 var a = new Date();
 a.setHours(a.getHours() - 1);
 console.log("Current date: " + currentDate  + "   1 hour ago, it was   " + a )*/

 //K-Electric Bill//

 /*var customerName = "ABC Customer"
 var month = "February"
 var numOfUnit = 323
 var chargPerUnit = 18
 var netAmountDueDate = numOfUnit * chargPerUnit
 var latePaySurcharge = 234
 var grossAmountAfterDueDate = netAmountDueDate + latePaySurcharge
 console.log("K-Electric Bill")
 console.log("Customer Name: " + customerName  + "\n" + "Current Month: " + month  + "\n"  +  "Number of units " + numOfUnit + "\n"  + "Charges per unit " + chargPerUnit + "\n"  + "Net Amount Payable within Due Date " + netAmountDueDate  +  "\n" + "Late Payment Charges " + latePaySurcharge  + "\n" + " Gross Amount Payable after Due Date "  + grossAmountAfterDueDate )
*/


//Chapter Number 35 to 38 Function//


//Task Number One//

/*function TodayDate(){
console.log(new Date)
 }
 TodayDate()*/

 //Task Number Two//

/* function meet(firstName,lastName){
     console.log(firstName + "  Hi  " + lastName )
     } 
     meet('Sohail','Azhar')*/

     // Task Number Three //

    /* function addtwonumber(First, Second){
          First = +prompt("Enter first Value")
          Second = +prompt("Enter second Value")
         console.log(First + Second)
         }
         addtwonumber()*/

         // Task Number Four //

        /* var calculate ,Num1 ,Num2,sign,result
         function Calculate(Num1,Num2,sign){
                 Num1 = +prompt("Enter first Value")
                 Num2 = +prompt("Enter second Value")
                 sign = prompt("Enter sign")
                 result =Num1 + sign + Num2
                console.log("Solution is " + eval(result))
             }
             Calculate()*/

             



            

    
    






