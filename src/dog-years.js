

// //age of user that will be converted into dog years
// const myAge = 29;
//
// //the first 2 human years equal 10.5 dog years per year
// let earlyYears = 2;
//
// earlyYears *= 10.5;
//
// //take to years off of myAge to account for earlyYears
// let laterYears = myAge - 2;
//
// //each human year after the first 2 are equal to 4 dogs years
// laterYears *= 4;
//
// //the sum of earlyYears and laterYears is the users age in dog years
// const myAgeInDogYears = earlyYears + laterYears;
//
// //get users name and make it lowercase
// let myName = 'Matt'
// myName = myName.toLowerCase()
//
// console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);



// //this is a program that calculates a users age into dog years
//
// //ask for users name
// const usersName = prompt('What is your name?')
//
//
// //ask if user wants to know their age in dog years
// let getResponse = prompt(`Hello ${usersName} would you like to know how old you are in Dog Years?`)
// const response = getResponse.toLowerCase();
// const continueYesNo = response => {
//   if (response == 'yes') {
//     return alert ("Let's do this!")
//   } else {
//     alert ("Fine hate dogs and age!!");
//     return false;
//   }
// };
// continueYesNo(response);
//
// //ask for users age
// const usersAge = () => {
//   if (continueYesNo(response) == true ) {
//     return prompt('How old are you?');
//   } else {
//     return false;
//   }
// };
//
//
// //the first 2 human years equal 10.5 dog years per year
// let earlyYears = 2 * 10.5;
//
// //each human year after the first 2 are equal to 4 dogs years
// let laterYears = (usersAge - 2) * 4;
//
// //the sum of earlyYears and laterYears is the users age in dog years
// const usersAgeInDogYears = earlyYears + laterYears;
//
// const logYears = () => {
//   if ()
// }
//
// console.log(`Thanks ${usersName}. You are ${usersAgeInDogYears} years old in dog years.`);


// //first try to get the program to stop when user says no, not working
// const usersName = prompt('What is your name?')
//
// const getResponse = prompt(`Hello ${usersName} would you like to know how old you are in Dog Years?`)
//
// const response = getResponse.toLowerCase();
//
//
// const continueYesNo = response => {
//   if (response === 'yes') {
//     return true;
//   } else {
//     return false;
//   }
// };
// continueYesNo(response);
// console.log(continueYesNo());
//
// const continueAlert = () => {
//   if (continueYesNo === true) {
//     alert ("Let's do this!")
//   } else {
//     alert ("Why do you hate dogs and life?!?")
//   }
// };
// continueAlert();
//
//
// const usersAge = () => {
//   if (continueYesNo(response) === true ) {
//     prompt('How old are you?');
//   } else {
//     return false;
//   }
// };
//
//
// let earlyYears = 2 * 10.5; //the first 2 human years equal 10.5 dog years per year
//
// let laterYears = (usersAge() - 2) * 4; //each human year after the first 2 are equal to 4 dogs years
//
// const usersAgeInDogYears = earlyYears + laterYears; //the sum of earlyYears and laterYears is the users age in dog years
//
//
// const outcome = () => {
//   if (continueYesNo(response) === true ) {
//     console.log(`Thanks ${usersName}. You are ${usersAgeInDogYears} years old in dog years.`);
//   } else {
//     console.log(`Thanks ${usersName} for hating life!`)
//     return false;
//   }
// };
//
// outcome();



// //working attempt try to get program to stop
//
// //jshint esnext:true
//
// const usersName = prompt('What is your name?');
//
// const getResponse = prompt(`Hello ${usersName} would you like to know how old you are in Dog Years? Yes/No`)
//
// const response = getResponse.toLowerCase();
//
//
// const continueYesNo = userResponse => {
//   if (userResponse == 'yes') {
//     return true;
//   } else {
//     return false;
//   }
// };
// continueYesNo(response);
//
//
// const continueAlert = () => {
//   if (continueYesNo(response) === true) {
//     alert("Let's do this!")
//   } else {
//     alert("Why do you hate dogs and age?!?")
//   }
// };
// continueAlert();
//
//
// const usersAge = () => {
//   if (continueYesNo(response) === true ) {
//     return prompt('How old are you?');
//   } else {
//     return false;
//   }
// };
//
//
// let earlyYears = 2 * 10.5; //the first 2 human years equal 10.5 dog years per year
//
// let laterYears = (usersAge() - 2) * 4; //each human year after the first 2 are equal to 4 dogs years
//
// const usersAgeInDogYears = earlyYears + laterYears; //the sum of earlyYears and laterYears is the users age in dog years
//
//
// const outcome = () => {
//   if (continueYesNo(response) === true ) {
//     alert ('Thanks ' + usersName + '. You are ' + usersAgeInDogYears + ' years old in dog years.')
//   } else {
//     alert ('Thanks ' + usersName + ' for hating life!')
//   }
// };
// outcome();
//

const stringJoin = ('string') => {
  for (var i = 0; i < array.length; i++) {
    if (true) {

    }
  }
  let newString = string.replace('_')
  return newString
}

stringJoin("matt_join-John-usa");



const stringJoin = (string) => {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "_" || "-") {
      string.charAt(i + 1).toUpperCase
    }
  console.log(string);
}

const stringJoin = (string) => {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "_") {
      string.charAt(i + 1).toUpperCase()
      console.log(string);
      return;
    }
  }
}

/*
For a given input string
inputString = "matt_join-John-usa"
output = "mattJoinJohnUsa"
*/


const newString = "";
const stringJoin = (string) => {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "_" || string.charAt(i) == "-") {
      string.charAt(i + 1).toUpperCase();
      console.log(string);
    }
  }
}

stringJoin("matt_join-John-usa");














//
//
//
//
//
//
//
//
//
// // end
