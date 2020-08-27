// Test Driven Development:
  // Spec: The number 32 should be replaced with "Won't you be my neighbor?"
  // Input: 32
  // Output: "Won't you be my neighbor?"

  // Spec: Behavior: The number 21 should be replaced with "Boop".
  // Input: 21
  // Output: "Boop".

  // Spec: The number 13 should be replaced with "Won't you be my neighbor?"
  // Input: 13
  // Output: "Won't you be my neighbor?"

  // Spec: Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
  // Input: 3
  // Output: "0, Beep!, Boop!, Won't you be my neighbor?"

  // Spec: Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  // Input: 2
  // Output: "0, Beep!, Boop!"

  // Spec: Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  // Input: 1
  // Output: "0, Beep!"

// Business Interface

function containsThree (number) {
  let stringNumber = number.toString();
  for (num of stringNumber){
    if (num === "3"){
      return true;
    };
  };
  return false;
};

function containsTwo (number) {
  let stringNumber = number.toString();
  for (num of stringNumber){
    if (num === "2"){
      return true;
    };
  };
  return false;
};

function containsOne (number) {
  let stringNumber = number.toString();
  for (num of stringNumber){
    if (num === "1"){
      return true;
    };
  };
  return false;
};


function robot(number) {
  let numberArray = [];
  if (isNaN(number)) { 
    alert("Please only enter a (*Beep!*)-ing number.");
    return "Enter a *BEEP*-ing Number!";
  };
  for (let i=0; i<=number; i++) {  
    if (containsThree(number)) {
    numberArray.push(" Won't you be my neighbor?");
  } else if (containsTwo(number)) {
    numberArray.push(" Boop!");
  } else if (containsOne(number)) {
    numberArray.push(" Beep!");
  } else {
    numberArray.push(" "+i);
    };
  };
  return numberArray;
};

function robotInverse(number) {
  let numberArray = [];
  if (isNaN(number)) { 
    alert("Please enter a number, and use digits rather than letters.");
    return "Enter a number!";
  };
  for (let i=number; i>=0; i--){
    if (containsThree(i)) {
      numberArray.push(" Won't you be my neighbor?");
    } else if (containsTwo(i)) {
      numberArray.push(" Boop!");
    } else if (containsOne(i)) {
      numberArray.push(" Beep!");
    } else {
      numberArray.push(" "+i);
    };
  };
  return numberArray;
};

// User Interface

$(document).ready(function() {
  let results = [];
  $("#enterNumber").submit(function(event){
    event.preventDefault();
    const numberInput = parseInt($("#number").val());
    const orderInput = parseInt($("#numOrder").val());
    if (orderInput === 1){
      results.push(" " + robot(numberInput) + " ");
      $("#result").text(results);
    } else {
      results.push(" " + robotInverse(numberInput) + " ");
      $("#result").text(results);
    };
    $("#returnMessage").fadeIn();
    $("#btnRefresh").fadeIn();
  });

    $("#btnRefresh").click(function() {  
      event.preventDefault();
      $("#returnMessage").fadeOut();
      location.reload();
    });
});