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

var dinosaurs1 = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Pteranodon",
    "Apatosaurus",
    "Diplodocus",
    "Compsognathus"
   ];

   console.log(dinosaurs1[0] = "Tyrannosaurus Rex");
   console.log(dinosaurs1);

   var dinosaurs = [];
dinosaurs[10] = "Philosoraptor";
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";

console.log(dinosaurs);


var maniacs = ["Yakko", "Wakko", "Dot", "Koko", "Moko"];
maniacs[0];
"Yakko"
maniacs[1];
"Wakko"
maniacs[2];
"Dot"
maniacs[3];
"Koko"
maniacs[4];
"Moko"

console.log(maniacs.length - 1);

var maniacs1 = ["Yakko", "Wakko", "Dot", "Koko", "Moko"];
console.log(maniacs1.unshift("monkey"));
console.log(maniacs1.unshift("dog"));
console.log(maniacs1.unshift("cat"));
console.log(maniacs1);

var animals = ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"];
var lastAnimal = animals.shift();
console.log(lastAnimal);
console.log(animals);

var vaisiai = ["Kriause", "Obuolys", "Slyva"];
var darzoves = ["Morka", "Bulve", "Kopustas"];
var grudai = ["mieziai", "rugiai"];
var maistas = vaisiai.concat(darzoves,grudai);
console.log(maistas);

var colors = ["red", "green", "blue"];
console.log(colors.indexOf("purple"));

var boringAnimals = ["Monkey", "Cat", "Dog", "Mouse"];
console.log(boringAnimals.join(" - "));

var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
console.log(myNames[0] + " " + myNames[1] + " " + myNames[2]);

