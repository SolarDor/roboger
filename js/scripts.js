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


function robot (number) {
  let result = [];
  if (isNaN(number)){ 
    alert("Please only enter number.");
    return;
  } else if (containsThree(number)) {
    return "Won't you be my neighbor?";
  } else if (containsTwo(number)) {
    return "Boop!";
  } else if (containsOne(number)) {
    return "Beep!";
  } else {
    for (i=0; i<=number; i++){
      result.push(i);
    };
    stringResult = result.join(", "); 
    return stringResult;
  };
};

// User Interface

$(document).ready(function(){
  $("#enterNumber").submit(function(event){
    event.preventDefault();
    const numberInput = parseInt($("#number").val());
    $("#message").append(robot(numberInput)+ "  ");
  });
});