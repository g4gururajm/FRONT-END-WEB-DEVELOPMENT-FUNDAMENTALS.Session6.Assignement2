/* prompt to get first number*/
 var a = prompt("Please set the first number: ");
 /* prompt to get second number */
 var b = prompt("Please set the second number: ");
 /* prompt to get thrid number */
 var c = prompt("Please set the thired number: ");
 /* console to print received first number*/
 console.log("a: " + a);
 /* console to print received second number*/
 console.log("b: " + b);
 /* console to print received third number*/
 console.log("c: " + c);
 /* declared variable to hold first big number */
 var big = 0;
 /* declared variable to hold final big(large) number*/
 var large = 0;
/* compare first and second number to find big number among those and place it in big variable*/
 big = ((a > b) ? a : b);
 /* compare big variable  with third number and stored in large variable*/
 large = ((big > c) ? big : c);
/* print on console about big number from 3 number */
 console.log("biggest number amoung " + a + ", " + b + ", " + c + " : " + large);