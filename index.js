// Exercise 1:
// Use a for loop to print numbers -3 through 8.
for(var i =-3; i<=8;i++){
    console.log(i);
   }
//
//
// Exercise 2:
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
for(var j =0; j<=50;j++){
    if(j==10){
        console.log("TEN")
    }
    else
    {
        console.log(j);
    }
}
// //
// //     Exercise 3:
// // Prompt the user to enter a number. Prompt the user to enter another number.
// // Create a for loop that counts from the first number to the second number.
var userEntry1 = parseInt(prompt("Please enter a number."));
var userEntry2 = parseInt(prompt("Please enter a second number"));
//
for(var x = userEntry1; x<=userEntry2; x++)
{
    console.log(x);
}