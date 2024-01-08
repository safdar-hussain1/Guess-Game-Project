console.log("Hello world!");

let gameNum = 25;

let num = prompt("Enter Number: ");

while(gameNum != num){
    if(num > gameNum){
        num = prompt("wrong number, Lesser than ur current number:");
    }
    else{
        num = prompt("wrong number, Greater than ur current number:");
    }
}
console.log("Congratulations, you have successfully entered the right number.");