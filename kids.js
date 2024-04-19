var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

var hoursInADay = 24;
var secondsInaDay = secondsInAnHour * hoursInADay;
console.log(secondsInaDay);

var daysInAYear = 365;
var secondsInAYear = secondsInaDay * daysInAYear;
console.log(secondsInAYear);

var age = 30;
var sum = age * secondsInAYear;
console.log(sum);

var highFives = 0;
++highFives;
++highFives;
--highFives;
console.log(highFives);

var x = 10;
x = x + 5;
console.log(x);

var score = 10;
score += 7;
console.log(score);

var score1 = 8;
score1 -= 3;
console.log(score1);

var balloons = 100;
balloons *= 2;
console.log(balloons);

var balloons = 100;
balloons /= 4;
console.log(balloons);

var myAwesomeString = "Something RELLY awesome!!!";
console.log(myAwesomeString);

var myThing = 5;
myThing = "This is a string";
console.log(myThing);

var numberNine = 9;
var stringNine = "9";

sum = numberNine + numberNine;
sum1 = stringNine + stringNine;
console.log(sum, sum1);

var greeting = "Hello ";
var myName = "Nick";
result = greeting + myName;
console.log(result);

var text = "Supercalifragilisticexpialidocious".length;
console.log(text);

var text1 = "Java".length;
console.log(text1);

var script = "Script".length;
console.log(script);/*  */

var javascript = "java" + "script";
console.log(javascript.length);

var myName = "Nick";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

var longString = "My long string is long".slice(3, 14);
console.log(longString);
 
var longString = "My long string is long".slice(3);
console.log(longString);

var text2 = "Hello there, how are you doing?".toUpperCase();
console.log(text2);

var text3 = "HELLO THERE, HOW ARE YOU DOING?".toLowerCase();
console.log(text3);

var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);

var sillyString1 =  "hELlo THERE, hOW ARE yOu doINg?";
var result1 = sillyString1[0].toUpperCase() + sillyString.slice(1). toLowerCase();
console.log(result1);

var javascriptIsCool = true;
console.log(javascriptIsCool);

var hadShower = true;
var hasBackpack = true;
console.log(hadShower && hasBackpack);

var hasApple = false;
var hasOrange = true;
console.log(hasApple || hasOrange);

var isWeekend = true;
var needToShoweToday = !isWeekend;
console.log(needToShoweToday);

var isWeekend1 = false;
var hadshowe1 = true;
var hasApple1 = false;
var hasOrange1 = true;
var shouldGoToSchool = !isWeekend1 && hadshowe1 && (hasApple1 || hasOrange1);
console.log(shouldGoToSchool);

var height = 60;
var heightRestriction = 60;
console.log(height > heightRestriction);

var mySecretNumber = 6;
var chicoGuess = 6;
var harpoGuess = 6;
var grouchoGuess = 6;
console.log(mySecretNumber === chicoGuess);
console.log(mySecretNumber === harpoGuess);
console.log(mySecretNumber === grouchoGuess);

