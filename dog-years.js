//age of user that will be converted into dog years
const myAge = 29;

//the first 2 human years equal 10.5 dog years per year
let earlyYears = 2;

earlyYears *= 10.5;

//take to years off of myAge to account for earlyYears
let laterYears = myAge - 2;

//each human year after the first 2 are equal to 4 dogs years
laterYears *= 4;

//the sum of earlyYears and laterYears is the users age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//get users name and make it lowercase
let myName = 'Matt'
myName = myName.toLowerCase()

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);



//this is a program that calculates a users age into dog years

//ask for users name
const usersName = prompt('What is your name?')


//ask if user wants to know their age in dog years
prompt(`Hello ${usersName} would you like to know how are you are in Dog Years?`)


//ask for users age
const usersAge = prompt('How old are you?')

let earlyYears = 2 * 10.5;
let laterYears = (usersAge - 2) * 4;
const usersAgeInDogYears = earlyYears + laterYears;
console.log(`Thanks ${usersName}. You are ${usersAgeInDogYears} years old in dog years.`);













// end
