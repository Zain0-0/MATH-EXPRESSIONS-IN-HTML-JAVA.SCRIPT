var variable=undefined;

document.write("value after variable declaration is " + variable +"<br>");
variable=prompt("please enter a number");
document.write("initial value :"+variable+"<br>");
variable++;
document.write("value after increment is :" +variable+"<br>");
var add= variable+7;
document.write("value after addition is : "+  add+"<br>");
add--;
document.write("valu after decrement is : "+ add+"<br>");
var reminder=add%3;
document.write("reminder is : "+ reminder);
