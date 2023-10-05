// ! Chapter 26-30   JS Assignment 5

// ? Q1)

// var num=+prompt("Enter a positive number")
// document.write("number:"+num+"<br>");
// var num1=Math.round(num);
// document.write("round of value:"+num1+"<br>");
// var num2=Math.floor(num);
// document.write("floor value:"+num2+"<br>");
// var num3=Math.ceil(num);
// document.write("ciel value:"+num3);

// ? Q2)

// var num=+prompt("Enter a negative number")
// document.write("number:"+num+"<br>");
// var num1=Math.round(num);
// document.write("round of value:"+num1+"<br>");
// var num2=Math.floor(num);
// document.write("floor value:"+num2+"<br>");
// var num3=Math.ceil(num);
// document.write("ciel value:"+num3);

// ? Q3)

// var value=Math.abs(-4)
// document.write("The absolute value of -4 is " + value);

// ? Q4)

// var dice=Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + dice);

// ? Q5)

// var val=Math.random();
// var coin=(val<0.5) ? "heads" : "tails";
// document.write("random coin value: "+coin);

// ? Q6)

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("random number between: " + randomNumber);

// ? Q7)
 
// var userweight =+prompt("Please enter your weight.");
//     if (!isNaN(userweight)) {
//         document.write(`Your weight is: ` + userweight + ` kilograms <br> <br>`);
//     } else {
//         document.write("Invalid input. Please enter a valid number.");
//     }

// ? Q8)

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var input=prompt("Enter a number between 1 and 10");
// var userGuess = parseInt(input);
// if (userGuess === secretNumber) {
//     alert("Congratulations!");
// }
//  else {
//     alert("Try again!");
// }


// ! chapter 31-34

// ? Q1)

// var date= new Date();
// document.write(date);

// ? Q2)

// var date= new Date();
// var month=date.getMonth();
// var arr=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
// alert("Current Month: " + arr[month]);

// ? Q3)

// var date= new Date();
// var day=date.getDay();
// var array=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// alert("Today is " + array[day]);

// ? Q4)

// var date = new Date();
// var WeekDay = date.getDay();
// if (WeekDay === 6 || WeekDay === 0) {
//   alert("It's Fun day");
// }
//  else {
//   alert("It's not Fun day");
// }

// ? Q5)

// var date = new Date();
// var dayOfMonth = date.getDate();
// if (dayOfMonth < 16) {
//   alert("First fifteen days of the month");
// }
//  else {
//   alert("Last days of the month");
// }

// ? Q6)

// var date = new Date();
// document.write(date + "<br>"); 
// var milliseconds = date.getTime();                 
// document.write("Miliseconds since, January 1, 1970 :" + milliseconds +"<br>");
// var Minutes = milliseconds / (1000 * 60);
// document.write("Minutes since, January 1, 1970 :"+ Minutes);

// ? Q7)

// var date=new Date();
// var Hour = date.getHours();
// if (Hour < 12) {
//   alert("It's AM");
// } 
// else {
//   alert("It's PM");
// }

// ? Q8)

// var date = new Date(2021, 0, 1);
// date.setDate(date.getDate() - 1);
// var laterDate = date;
// alert("Later date: " + laterDate);

// ? Q9)

// var ramadanDate = new Date('June 18, 2015');
// var date = new Date();
// var difference = date - ramadanDate;
// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
// alert(days + "days have passed since 1st Ramadan, 2015");

// ? Q10)

// var date = new Date();
// var beginningOf2015 = new Date('January 1, 2015');
// var timeDifference = date - beginningOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write(secondsElapsed + " seconds had passed since begning of 2015");

// ? Q11)

// var date = new Date();
// var Hours = date.getHours();
// date.setHours(Hours + 1);
// document.write(Hours +" hour ago, it was "+ date);

// ? Q12)

// var date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// alert("100 years back, it was : " + date);

// ? Q13)

// var age = prompt("Please enter your age:");
// var Year = new Date().getFullYear();
// var birthYear = Year - parseInt(age);
// document.write("Your birth year is: " + birthYear);
