// HOMEWORK 1

/*Task1:
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them
*/

console.log('I start to practice "JavaScript" today, and I like it.');
console.log("The secret of getting ahead is getting started.");
console.log('"Don\'t lim it yourself. "');
console.log("Invest in your dreams. Grind now. Shine later.");
console.log(
  "It's not the load that breaks you down, it's the way you carry it."
);
console.log("The hard days are what make you stronger.");
console.log(
  "You can waste your lives drawing lines. Or you can live your life crossing them"
);

/*Task2:
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() statement
 (you can use escape sequences to insert line or a tab)
 
   JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.
   It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.

*/

console.log(
  `    JavaScript is a high-level programming language primarily used to 
build web applications. It is not limited to the web; it can also be used 
for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means 
there are plenty of resources and support available for learning. It 
uses a syntax like other programming languages and easy to learn.`
);

/*Task3:
Requirement
-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter

*/

let myAge = 22,
  myFavoriteNumber = 8,
  myHeight = '5 ft 10"',
  myWeight = "160lbs",
  myFavoriteLetter = "M";

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);

/*Task4:
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. 
Then, output the sum of the numbers with a proper message as given below.

Test Data:25, 35

Expected output: 
The sum of the numbers = 60

*/

let num1 = 25,
  num2 = 35;
let sum = num1 + num2;
console.log(`The sum of the numbers = ${sum}.`);
/*Task5:
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively.
 Then, output the product of the numbers with a proper message as given below.

Test Data:5, 7

Expected output: 
The product of the numbers = 35

*/

let n1 = 5,
  n2 = 7;
console.log(`The product of the numbers = ${n1 * n2}.`);

/*Task6:
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively. 
Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

let number1 = 24,
  number2 = 10;

let sum2 = number1 + number2;
let product = number1 * number2;
let sub = number1 - number2;
let div = number1 / number2;
let remainder = number1 % number2;

console.log(`The sum of the numbers is = ${sum}`);
console.log(`The product of the numbers is = ${product}`);
console.log(`The subtraction of the numbers is = ${sub}`);
console.log(`The division of the numbers is = ${div}`);
console.log(`The remainder of the numbers is = ${remainder}`);

/*Task7:
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers.
Test Data:7, 11
Expected Output:
The average of the numbers is: 9

*/

let i1 = 7,
  i2 = 11;
console.log(`The average of the numbers is: ${(i1 + i2) / 2}`);

/*Task8:
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively.
 Then, output the average of the numbers.
Test Data:6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12

*/
let a1 = 6,
  a2 = 10,
  a3 = 12,
  a4 = 15,
  a5 = 17;
let average = (a1 + a2 + a3 + a4 + a5) / 5;

console.log(`The average of the numbers is: ${average}`);

/*Task9:
Requirement:
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. 
Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data:5, 6, 10
Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100

*/
let b1 = 5,
  b2 = 6,
  b3 = 10;

console.log(`The ${b1} multiplied with ${b1} is = ${b1 * b1}`);
console.log(`The ${b2} multiplied with ${b2} is = ${b2 * b2}`);
console.log(`The ${b3} multiplied with ${b3} is = ${b3 * b3}`);

/*Task10:
Requirement:
- Create a variable called as side to be assumed as one side of a square and store value of 7 in that variable. 
Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
            perimeter of a square = 4 * side
 
Test Data:7
Expected Output:
The perimeter of the square = 28 
The area of the square = 49
*/

let side = 7;

let area = side * side;
let perimeter = 4 * side;

console.log(`The perimeter of the square = ${perimeter}`);
console.log(`The area of the square = ${area}`);

/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

let favBook = "JS Algorithms & Data Structures";
let favColor = "Blue";
let favNumber = 7;

console.log(
  `The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`
);
// console.log('The favorite book is ' + favBook +
// "\nThe favorite color is " + favColor +
// "\nThe favorite number is " + favNumber
// )

/*Task12:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)
          User who joined this program is John Doe. John's age is 45. John's email address is johndoe@gmail.com, phone number is (123) 123 1234, and address is 123 St Chicago IL 12345.


*/
let firstName = "John";
let lastName = "Doe";
let age = 45;
let emailAddress = "johndoe@gmail.com";
let phoneNumber = "(123) 123 1234";
let address = "123 St Chicago IL 12345";

console.log(
  `   User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.
${firstName}'s email address is ${emailAddress}, phone number is 
${phoneNumber}, and address is ${address}`
);

// HOMEWORK 2

// Task-1
/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!
*/
let str1 = "5",
  str2 = "2";
let num1 = Number(str1),
  num2 = Number(str2);
//let num1 = parseInt(str1), num2 = parseInt(str2)
//let num1 = str1 * 1, num2 = str2 * 1

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);

// Task-2
/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!
*/
console.log("\n------------Task-2------------\n");
let s1 = "200",
  s2 = "-50";
let n1 = Number(s1),
  n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(num1, num2)}`);
console.log(`The smallest value is = ${Math.min(num1, num2)}`);
console.log(`The average is = ${(num1 + num2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`);

// Task-3
/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
console.log("\n------------Task-3------------\n");

let rand1 = Math.ceil(Math.random() * 50);
let rand2 = Math.ceil(Math.random() * 50);

console.log(rand1);
console.log(rand2);

console.log(
  `The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`
);

// Task-4
/*
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
console.log("\n------------Task-4------------\n");

let randNum3 = Math.ceil(Math.random() * 50);
let randNum4 = Math.ceil(Math.random() * 50);
let randNum5 = Math.ceil(Math.random() * 50);
let randNum6 = Math.ceil(Math.random() * 50);
let randNum7 = Math.ceil(Math.random() * 50);

console.log(
  `The max value = ${Math.max(
    randNum3,
    randNum4,
    randNum5,
    randNum6,
    randNum7
  )}`
);
console.log(
  `The min value = ${Math.min(
    randNum3,
    randNum4,
    randNum5,
    randNum6,
    randNum7
  )}`
);

// Task-5
/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
console.log("\n------------Task-5------------\n");

let randNum8 = Math.floor(Math.random() * 51) + 50;
let randNum9 = Math.floor(Math.random() * 51) + 50;
let randNum10 = Math.floor(Math.random() * 51) + 50;

console.log(`The number 1 = ${randNum8}`);
console.log(`The number 2 = ${randNum9}`);
console.log(`The number 3 = ${randNum10}`);
console.log(`The sum of numbers is = ${randNum8 + randNum9 + randNum10}`);

// Task-6
/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/
console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);

// Task-7
/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
console.log("\n------------Task-7------------\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[name.length - 1]}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);

console.log(
  `The last 3 characters in the name are = ${name.slice(name.length - 3)}`
);

// HOMEWORK 3

//Task 1
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1:
false

Test data 2:
65, 80, 90

Expected Output 2: 
true
*/
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

let average = Math.floor((num1 + num2 + num3) / 3);
console.log(average >= 50 ? true : false);

//Task 2
/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print "NO MATCH"
-If any of those 2 numbers are equal, then print 
"DOUBLE MATCH"
-If all 3 numbers are equal, then print "TRIPLE MATCH"

Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
let rand1 = Math.floor(Math.random() * 3 + 1);
let rand2 = Math.floor(Math.random() * 3 + 1);
let rand3 = Math.floor(Math.random() * 3 + 1);

console.log(`${rand1} ${rand2} ${rand3} `);

if (rand1 === rand2 && rand2 === rand3) console.log("TRIPLE MATCH");
else if (rand1 !== rand2 && rand2 !== rand3) console.log("NO MATCH");
else console.log("DOUBLE MATCH");

//Task 3
/*
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

function hasA(str) {
  return str.includes("a") || str.includes("A");
}

console.log(hasA("Tech")); //false
console.log(hasA("Global")); //true
console.log(hasA("")); //false
console.log(hasA("Apple")); //true

//Task 4
/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple"
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
const doubleOrTripleWord = (str) => {
  if (str.length % 2 === 0) return `${str}${str}${str}`;
  else return `${str}${str}`;
  /*
    WAY2: 
    if(str.length % 2 === 0) return str.padStart(str.length * 3, str)
    else return str.padStart(str.length * 2, str)
*/
};

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

//Task 5
/*
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/
function firstWord(str) {
  str = str.trim();
  if (str.includes(" ")) return str.slice(0, str.indexOf(" "));
  else return str;
  // return str.trim().split(' ')[0]
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("   "));

//Task 6
/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript"
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(str) {
  str = str.trim().split(" ");
  return str[str.length - 1];
  // str = str.trim();
  // if(str.includes(' ')) return str.slice(str.lastIndexOf(' ') + 1)
  // else return str;
}

console.log(lastWord("Hello World")); // [hello, world]
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello")); // [Hello]
console.log(lastWord(""));
console.log(lastWord("   "));

//Task 7
/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript"
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(str) {
  //  str = str.trim().split(' ');
  //  return str[0] + str[str.length - 1];

  str = str.trim();
  if (str.includes(" "))
    return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1);
  else return str + str;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));

//Task 8
/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str) {
  // str = str.toLowerCase()
  // if(str.startsWith('a')) return true;
  // else if(str.startsWith('e'))return true;
  // else if(str.startsWith('i'))return true;
  // else if(str.startsWith('o'))return true;
  // else if(str.startsWith('u'))return true;
  // return false;

  return "aeiouAEIOU".includes(str[0]);
}

console.log(startVowel("Hello")); // false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange")); // true
console.log(startVowel("")); //false
console.log(startVowel("    ")); //false
console.log(startVowel("123")); //false

//Task 9
/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(str) {
  if (str.length < 8) return "";

  let first4 = str.slice(0, 4);
  let middle = str.slice(4, -4);
  let last4 = str.slice(-4);

  return last4 + middle + first4;
}

console.log(swap4("abc"));
console.log(swap4("Javascript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));

//Task 10
/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/

const swapFirstLastWord = (str) => {
  str = str.trim();

  if (str.includes(" ")) {
    let firstWord = str.slice(0, str.indexOf(" "));
    let middle = str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1);
    let lastWord = str.slice(str.lastIndexOf(" ") + 1);

    return lastWord + middle + firstWord;
  }

  return "";
};

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));

// HOMEWORK 4

/*
Task 1
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

/*
Task 2
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

/*
Task 3
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

/*
Task 4
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
*/

for (let i = 0; i <= 7; i++) {
  console.log(`The square of 0 is ${i ** 2}`);
}

/*
Task 5
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/

let num = 0;

for (i = 1; i <= 10; i++) {
  num += i;
}
console.log(num);

/*
Task 6
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
*/

let n = Math.floor(Math.random() * 11);
for (let i = n; i > 1; i--) {
  n *= i - 1;
}

console.log(n);

/*
Task 7
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/

let ranNum = 1;
let attempts = 0;

while (ranNum % 5 !== 0) {
  ranNum = Math.floor(Math.random() * 101);
  attempts++;
}
console.log(
  `The random number is ${ranNum} and it took ${attempts} attempt/s to generte it`
);

/*
Task 8
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
*/

const aray_countries = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(aray_countries);
console.log(aray_countries.sort());

const array_cartoon_cats = ["Garfield", "Tom", "Sylvester", "Azrael"];

/*
Task 9
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
*/

const array_cartoon = [
  "Scooby Doo",
  "Snoopy",
  "Blue",
  "Pluto",
  "Dino",
  "Sparky",
];
console.log(array_cartoon);
console.log(array_cartoon.includes("Pluto"));

/*
Task 10
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
*/

console.log(array_cartoon_cats.sort());
console.log(array_cartoon_cats.includes("Garfield" && "Felix"));

/* 
Task 11
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
*/

const array_numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(array_numbers);
console.log(array_numbers.join("\n"));

/* 
Task 12
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

const names = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];

let count = 0;
let counter1 = 0;

for (const name of names) {
  if (name[0].toLowerCase() === "p" || name[0].toLowerCase() === "b") count++;
  if (name.toLowerCase().includes("book") || name.toLowerCase().includes("pen"))
    counter1++;
}
console.log(`Elements starting with 'B' or 'P' = ${count}`);
console.log(`Elements having 'book' or 'pen' = ${counter1}`);

/*
Task 13
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/

const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
count = 0;
let counter = 0;
let counteR = 0;
for (const number of numbers) {
  if (number > 10) count++;
  else if (number < 10) counter++;
  else if (number === 10) counteR++;
}
console.log(`Elements that are more than 10 = ${count}`);
console.log(`Elements that are less than 10 = ${counteR}`);
console.log(`Elements that are 10 = ${counteR}`);

/*
Task 14
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
*/

const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];

const thirdArray = [];

for (i = 0; i < firstArray.length; i++) {
  thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}
console.log(`1st array is = [ ${firstArray} ]`);
console.log(`2nd array is = [ ${secondArray} ]`);
console.log(`3rd aaray is [ ${thirdArray} ]`);

/* 
Task 15
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
*/

function firstDuplicate(x) {
  let firstDuplicate1 = null;
  for (let i = 0; i < x.length; i++) {
    let duplicate = x[i];
    let rest = x.slice(i + 1);
    if (rest.includes(duplicate)) {
      firstDuplicate1 = duplicate;
      break;
    }
  }
  if (firstDuplicate1 === null) return -1;
  else return firstDuplicate1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([12]));

/*
Task 16
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
*/

function getDuplicates(x) {
  let duplicates = [];
  for (let i = 0; i < x.length; i++) {
    let duplicate = x[i];
    let rest = x.slice(i + 1);
    if (rest.includes(duplicate) && !duplicates.includes(duplicate))
      duplicates.push(duplicate);
  }
  return duplicates;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

/*
Task 17
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
*/

function reverseStringWords(string) {
  const word = string.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("");
  }
  const word1 = word.join(" ");

  return word1;
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("Hello World JavaScript"));

/*
Task 18
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
*/

function getEvens(x, y) {
  let even = [];
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    if (i % 2 === 0) even.push(i);
  }
  return even;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/*
Task 19
Write a function named as getMultipleOf5() which takes 2
number arguments and returns all the numbers divisible by 5
as an array stored from first found match to last found match
when invoked.
NOTE: Make your code dynamic that works for any numbers
and return empty array if there are no numbers divisible by 5
in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(x, y) {
  let even = [];
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    if (i % 5 === 0) even.push(i);
  }
  if (x > y) return even.reverse();
  else return even;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

/*
Task 20
Write a function named as fizzBuzz() which takes 2 number
arguments and returns a string composed with below
requirements when invoked.
•You need to find all the numbers within the range of given 2
numbers (both inclusive) and store them in a string from
smallest to greatest number with a ' | ' separator for each
number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5
to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> 13 | 14 | FizzBuzz | 16 | 17 | Fizz
fizzBuzz(12, 5) -> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
fizzBuzz(5, 5) -> Buzz
fizzBuzz(9, 6) -> Fizz | 7 | 8 | Fizz
*/

function fizzBuzz(x, y) {
  let array = [];
  for (i = Math.min(x, y); i <= Math.max(x, y); i++) {
    if (i % 15 === 0) array.push("FiizBuzz");
    else if (i % 3 === 0) array.push("Fiiz");
    else if (i % 5 === 0) array.push("Fiiz");
    else array.push(i);
  }
  return array.join(" | ");
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(9, 6));

function reverseStringWords(string) {
  return string
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords("I like Javascript"));

// HOMEWORK 5

/*
Task 1
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  
*/

function countPos(array) {
  let count = 0;
  for (const num of array) {
    if (num > 0) count++;
  }
  return count;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Task 2
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress") 
*/

function countA(array) {
  let count = 0;

  for (const word of array.toLowerCase()) {
    if (word.toLowerCase().includes("a")) count++;
  }
  return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*
Task 3
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")
*/

function countVowels(array) {
  let count = 0;
  for (const word of array) {
    if ("AEOUIaeoui".includes(word)) count++;
  }
  return count;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*
Task 4
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/

function countConsonants(array) {
  let count = 0;

  for (const word of array) {
    if (!"AEOUIaeoui".includes(word)) count++;
  }
  return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
Task 5
Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
*/

/*
function countWords(string) {
    return string.trim().split(' ').length
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));
*/

function reverseStringWords(string) {
  const word = string.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("");
  }
  const word1 = word.join(" ");

  return word1;
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("Hello World JavaScript"));

/*
Task 6
Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

function factorial(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
Task 7
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

function isPalindrome(string) {
  let word2 = string.split("").reverse().toString().replaceAll(",", "");
  return word2.toLowerCase() === string.toLowerCase();
}
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

/*
Task 8
Requirement: 
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ]) 
-> 0
*/

function countMultipleWords(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let str = array[i].trim();
    let word = str.split(" ");
    if (word.length > 1) count++;
  }
  return count;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(
  countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])
);
console.log(countMultipleWords([]));

/*
Task 9
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 3
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/

function count3OrLess(array) {
  const str = array.split(" ");
  let count = 0;
  for (const word of str) {
    if (word.length <= 3 && word.length !== 0) count++;
  }
  return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

/*
Task 10
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) return true;
  }
  return false;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*
Task 11
Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
  if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
  for (let i = 0; i < arr2.length; i++) {
    arr1[i] += arr2[i];
  }
  return arr1;
};
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/*
Task 12
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun")  -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

function removeExtraSpaces(string) {
  return string
    .split(" ")
    .filter((x) => x.length >= 1)
    .join(" ");
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/*
Task 13
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

const findClosestTo10 = (arr) => {
  const dup = arr.sort((x, y) => x - y);
  return dup[1];
};

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));

/*
Task 14
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

function isEmailValid(string) {
  if (string.includes(" ") || !string.includes(".com")) return false;
  const atCount = string.split("@").length - 1;
  if (atCount !== 1) return false;
  const beforeAtCount = string.split("@")[0].length;
  if (beforeAtCount < 2) return false;
  const domainName = string.split("@")[1].split(".")[0].length;
  if (domainName < 2) return false;

  return true;
}

console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

/*
Task 15
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/

function isPasswordValid(string) {
  if (string.length < 8 || string.length > 16 || string.includes(" "))
    return false;
  let hasDigit = false;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasCharacter = false;
  for (const char of string) {
    if (char >= 0 && char <= 9) hasDigit = true;
    else if (char >= "A" && char <= "Z") hasUpperCase = true;
    else if (char >= "a" && char <= "z") hasLowerCase = true;
    else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(char)) hasCharacter = true;
  }
  return hasDigit && hasUpperCase && hasLowerCase && hasCharacter;
}
console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd12345"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

let date = new Date();
console.log(date);

const hasVowel = (string) =>
  string.split("").some((x) => "AEOUIaeoui".includes(x));
console.log(hasVowel("Javascript"));

function getEvens(n1, n2) {
  let arr = [];
  for (let i = Math.min(n1, n2); i > Math.max(n1, n2); i--) {
    if (i % 5 === 0) arr.push(i);
  }
  return arr;
}

console.log(getEvens(5, 23));

// HOMEWORK 6

/*
Task 1
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

function noSpace(string) {
  return string.replaceAll(" ", "");
}
console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tach Global"));

/*
Task 2
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("Tech Global") 
replaceFirstLast("Hello")  
replaceFirstLast("Tech Global")  
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")
*/

function replaceFirstLast(string) {
  if (string.trim().length < 2) return "";
  return string.slice(-1) + string.slice(1, -1) + string[0];
}

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

/*
Task 3
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/

function hasVowel(array) {
  for (const word of array) {
    if ("aeoui".includes(word.toLowerCase())) return true;
  }
  return false;
}
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

/*
Task 4
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

function checkAge(number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - number;
  if (number > currentDate) {
    return "AGE IS NOT VALID";
  } else if (age < 16) return "AGE IS NOT ALLOWED";
  else if (age >= 16 && age <= 120) return "AGE IS ALLOWED";
  else return "AGE IS NOT VALID";
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

/*
Task 5
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/

function averageOfEdges(arr1, arr2, arr3) {
  return (Math.max(arr1, arr2, arr3) + Math.min(arr1, arr2, arr3)) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

/*
Task 6
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", 
"###"
*/

const noA = (array) => {
  return array.map((str) => {
    if (str.startsWith("a") || str.startsWith("A")) {
      return "###";
    } else return str;
  });
};
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

/*


/*
7
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = (array) => {
  return array.map((num) => {
    if (num % 15 === 0) {
      return 101;
    } else if (num % 5 === 0) {
      return 99;
    } else if (num % 3 === 0) {
      return 100;
    } else return num;
  });
};
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/*
Task 8
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])
*/

const countPrimes = (array) => {
  count = 0;
  for (const num of array) {
    if (num < 2) count;
    else if (num % Math.sqrt(num) === 0) count;
    else count++;
  }
  return count;
};

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

/*
Task 9
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/
const removeDuplicates = (array) =>
  array.filter((value, index) => array.indexOf(value) === index);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

/* 
Task 10
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/

const isDateFormatValid = (string) => {
  if (string.trim() === "") {
    return false;
  }
  const dateParts = string.split("/");
  if (dateParts.length !== 3) {
    return false;
  }
  if (dateParts[0].length !== 2) return false;
  if (dateParts[1].length !== 2) return false;
  if (dateParts[2].length !== 4) return false;

  const month = parseInt(dateParts[0], 10);
  const day = parseInt(dateParts[1], 10);
  if (day < 1 || day > 31) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
};

console.log(isDateFormatValid(""));
console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid("10-30-2020 "));
console.log(isDateFormatValid("10.30.2020"));
console.log(isDateFormatValid("5/30/2020"));
console.log(isDateFormatValid("05/30/2020 "));
console.log(isDateFormatValid("10/2/2020"));
console.log(isDateFormatValid("10/02/2020 "));

/*
Task 11
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/

const secondMax = (array) => {
  if (array.length < 2) {
    return array[0];
  }
  const numbersSort = array.sort((x, y) => y - x);
  const dup = numbersSort.filter(
    (value, index) => array.indexOf(value) === index
  );

  return dup[1];
};
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

/*
12
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/

const secondMin = (array) => {
  let arr = array.sort((a, b) => a - b);
  for (const num of arr) {
    if (num !== arr[0]) return num;
  }
};
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));

/*
const secondMin = array => {
    if (array.length < 2) {
        return array[0]
    }
    const numbersSort = array.sort((x, y) => x - y);
    const dup = numbersSort.filter((value, index) => array.indexOf(value) === index);

    return dup[1];

}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));
*/

/*
13
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> 
"pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> 
"TechGlobal"
*/

function mostRepeated(array) {
  if (array.length < 2) return array[0];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) arr1.push(array[i]);
    }
    if (arr1.length > arr2.length) arr2 = arr1;
    arr1 = [];
  }
  return arr2;
}
console.log(mostRepeated([3, 4, 7, 4, 4, 4, 23, 23, 23]));
console.log(
  mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])
);
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));

// HOMEWORK 7

// Task 1
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

const hasUpperCase = (str) =>
  str.split("").filter((i) => i >= "A" && i <= "Z").length > 0;

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("")); // false

// Task 2
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/
const noDigit = (str) =>
  str
    .split("")
    .filter((i) => i < "0" || i > "9")
    .join("");

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

// Task 3
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/
const noVowel = (str) =>
  str
    .split("")
    .filter((i) => !"aeiou".includes(i.toLowerCase()))
    .join("");

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

// Task 4
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/
const no13 = (arr) => arr.map((i) => (i === 13 ? 0 : i));

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));

// Task 5
/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/
const middleInt = (num1, num2, num3) =>
  [num1, num2, num3].sort((a, b) => a - b)[1];

//    if(num1 >= num2 && num1 <= num3) return num1
//    else if(num2 >= num1 && num2 <= num3) return num2
//    else return num3;
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// Task 6
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

const sumOfDigits = (str) =>
  str
    .split("")
    .filter((i) => i >= "0" && i <= "9")
    .reduce((sum, num) => (sum += Number(num)), 0);

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

// Task 7
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/
const arrFactorial = (arr) => {
  return arr.map((num) => {
    let fac = 1;
    for (let i = 2; i <= num; i++) {
      fac *= i;
    }
    return fac;
  });
};

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

// Task 8
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/
const categorizeCharacters = (str) => {
  return str.split("").reduce(
    (cat, i) => {
      if (i.toLowerCase() >= "a" && i.toLowerCase() <= "z") cat[0] += i;
      else if (i >= "0" && i <= "9") cat[1] += i;
      else cat[2] += i;
      return cat;
    },
    ["", "", ""]
  );
};
console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));

// HOMEWORk 8

/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/

function hasLowerCase(string) {
  for (const word of string) {
    if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) return true;
  }
  return false;
}

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/

const noZero = (array) => array.filter((x) => (x === 0 ? (x = "") : x));

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));

/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/

const numberAndSquare = (array) => array.map((x) => [x, x * x]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

/*
Requirement:
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/

function containsValue(arr, value) {
  return arr.includes(value);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

function reverseSentence(string) {
  let str = string.split(" ");
  if (str.length <= 1) {
    return "There is not enough words!";
  }
  let str1 = str.reverse().join(" ");
  return str1;
}

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));

/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/

function removeStringSpecialsDigits(string) {
  let word = "";
  for (const char of string) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      char === " "
    )
      word += char;
  }
  return word;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]
*/

const removeArraySpecialsDigits = (string) => {
  return string.map((str) =>
    str
      .split("")
      .filter((char) => char.toLowerCase() >= "a" && char.toLowerCase() <= "z")
      .join("")
  );
};

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));

/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 
-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

const getCommons = (str1, str2) => {
  const str4 = str1.filter((el) => str2.includes(el));
  return str4.filter((x, y) => {
    return str4.indexOf(x) === y;
  });
};

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(
  getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])
);
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]));

/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/

const noXInVariables = (array) => {
  arr1 = array.map((word) => {
    return word
      .toString()
      .split("")
      .filter((letter) => !(letter.toUpperCase() === "X"))
      .join("");
  });
  return arr1.filter((word) => word.length > 0);
};

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));

// HOMEWORK 9

/*
1
Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself.

Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz"
*/

function fizzBuzz1(number) {
  if (number % 15 === 0) return "FizzBuzz";
  else if (number % 5 === 0) return "Buzz";
  else if (number % 3 === 0) return "Fizz";
  else return number;
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

/*
2
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:

fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
*/

function fizzBuzz2(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) arr.push("FizzBuzz");
    else if (i % 5 === 0) arr.push("Buzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else arr.push(i);
  }
  return arr;
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

/*
3
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

function findSumNumbers(string) {
  let sum = [];
  for (let word of string) {
    if ("0123456789".includes(word)) sum.push(word);
    else sum.push(" ");
  }
  const sum1 = sum.join("").split(" ");
  let num3 = 0;
  for (const num of sum1) {
    num3 += Number(num);
  }
  return num3;
}

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

/*
4
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

function findBiggestNumber(string) {
  let sum = [];
  for (let word of string) {
    if ("0123456789".includes(word)) sum.push(word);
    else sum.push(" ");
  }
  const sum1 = sum.join("").split(" ");

  let number = 0;
  for (const num of sum1) {
    if (Number(num) > number) number = num;
  }
  return number;
}

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

/*
6
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/

const fibonacciSeries1 = (num) => {
  let fib = [0, 1];
  if (num <= 1) return [0];
  for (let i = 0; i < num - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib;
};
console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

/*
7
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/

const fibonacciSeries2 = (string) => {
  let fib = [0, 1];
  for (let i = 0; i < string - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib[string - 1];
};

console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));

/*
8
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
*/

/*
const findUniques = (arr1, arr2) => {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const unic = a.concat(b);
    const u = []
    for(const el of unic){
        if(!a.includes(el) || !b.includes(el)) u.push(el)
    }
    return u

}
console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));
*/

const findUniques = (arr1, arr2) => {
  let arr4 = [...arr1, ...arr2];
  let unic = arr4.filter((value, index) => arr4.indexOf(value) === index);
  const empty = [];
  for (const el of unic) {
    if (!arr1.includes(el) || !arr2.includes(el)) empty.push(el);
  }
  return empty;
};

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

/*
9
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/

function isPowerOf3(string) {
  if (string === 3 || string === 1) return true;
  let n = string;
  for (let i = 0; i <= string; i++) {
    n = n / 3;
    if (n === 3) return true;
    else if (n < 3) return false;
  }
  return false;
}
console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(2));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

// HOMEWORK 10

/*
Task 1
Requirement:
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

const calculateTotalPrice1 = (fruits) => {
  const items = {
    apple: 2,
    orange: 3.29,
    mango: 4.99,
    pineapple: 5.25,
  };
  let sum = 0;
  for (const product in fruits) {
    for (const price in items) {
      if (product === price) sum += fruits[product] * items[price];
    }
  }
  return sum;
};
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(
  calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })
);

/*
Task 2
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
*/

const calculateTotalPrice2 = (items) => {
  const prices = {
    Apple: 2.0,
    Orange: 3.29,
    Mango: 4.99,
    Pineapple: 5.25,
  };
  let total = 0;

  for (let item in items) {
    const noSale = items[item] * prices[item];
    let sale = 0;

    if (item === "Apple")
      sale = (Math.floor(items[item] / 2) * prices[item]) / 2;
    else if (item === "Mango")
      sale = Math.floor(items[item] / 4) * prices[item];

    total += noSale - sale;
  }
  return total === 0 ? total : total.toFixed(2);
};

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }));
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }));
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }));
console.log(
  calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })
);

/*
Task 3
Requirement:
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2)  -> "like"
nthWord("QA stands for Quality Assurance", 4)   -> "Quality"
nthWord("Hello World", 3)  -> ""
nthWord("Javascript", 1)  -> "Javascript”
nthWord("", 1)  -> ""
*/

const nthWord = (string, number) => {
  let str = string.split(" ");
  if (str.length < number) return "";
  else return str[number - 1];
};

console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));

/*
Task 4
Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of cubes of its 
digits
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
*/

const isArmstrong = (number) => {
  let numbers = number.toString().split("");
  let empty = [];
  for (const num of numbers) {
    empty.push(num ** numbers.length);
  }
  let numbs = empty.reduce((a, b) => a + b, 0);
  return numbs === number;
};
console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(153));
console.log(isArmstrong(1111));

/*
Task 5
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
 */

const reverseNumber = (...number) => {
  let num = number.join(",");
  let empty = "";
  for (let i = num.length - 1; i >= 0; i--) {
    empty += num[i];
  }
  return empty;
};

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

/*
Task 6
Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false. 
Examples:
doubleOrTriple([1, 5, 10], true)  -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) -> [9, 21, 6]
doubleOrTriple([-1, -2], true)  -> [-2, -4]
doubleOrTriple([0], false)  -> [0]
doubleOrTriple([-1, 0, 1], true)  -> [-2, 0, 2]
*/

const doubleOrTriple = (numbers, boolean) => {
  if (boolean === true) return numbers.map((x) => x * 2);
  else return numbers.map((x) => x * 3);
};

console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));

/*
Task 7
Requirement:
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/

const splitString = (string, number) => {
  if (string.length % number !== 0) return "";
  else return string.slice(0, number) + " " + string.slice(number);
};

console.log(splitString("JavaScript", 5));
console.log(splitString("Java", 2));
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));

// HOMEWORK 11

/*
1
Requirement:
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
*/

const countPalindrome = (string) => {
  let palindrome = "";
  let count = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    palindrome += string[i];
  }

  palindrome
    .toLowerCase()
    .split(" ")
    .filter((x) => {
      for (const word of string.split(" ")) {
        if (word === "") return 0;
        else if (x === word.toLowerCase()) count++;
      }
    });
  return count;
};
console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));

/*
2
Requirement:
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true)  -> 11
sum([3, 7, 2, 5, 10], false)  -> 12
sum([-1, 1, -2, 2], true)  -> -3
sum([0, -1, 15, 1], false)  -> 0
sum([1, 2, 3, 4, -4], true)  -> 0
*/

const sum = (number, boolean) => {
  let total = 0;
  for (const el of number) {
    if (number.indexOf(el) % 2 === 0 && boolean === true) total += el;
    else if (number.indexOf(el) % 2 !== 0 && boolean === false) total += el;
  }
  return total;
};
console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));

/*
3
Requirement:
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters. 
Examples:
nthChars("Java", 2)  -> "aa"
nthChars("JavaScript", 5)   -> "St"
nthChars("Java", 3)   -> "v"
nthChars("Hi", 4)   -> ""
nthChars("0123456789", 2)  -> "13579"
*/

const nthChats = (string, number) =>
  string
    .split("")
    .filter((value, index) => index % number === number - 1)
    .join("");

console.log(nthChats("Java", 2));
console.log(nthChats("JavaScript", 5));
console.log(nthChats("Java", 3));
console.log(nthChats("Hi", 4));
console.log(nthChats("0123456789", 2));

/*
4
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")   -> false
canFormString("programming", "gaming")   -> true
canFormString("halogen", "hello")   -> false
canFormString("CONVERSATION", "voices rant on")   -> true
canFormString("12", "123")  -> false
*/

const canFormString = (str1, str2) => {
  let arr1 = str1.toLowerCase().split("");
  let arr2 = str2
    .toLowerCase()
    .split("")
    .filter((x) => x != " ");

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1);
    else return false;
  }
  return true;
};

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

/*
5
Requirement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/

function isAnagram(str1, str2) {
  str1 = str1
    .toLowerCase()
    .split(" ")
    .filter((x) => !" ".includes(x))
    .join("");
  str2 = str2
    .toLowerCase()
    .split(" ")
    .filter((x) => !" ".includes(x))
    .join("");
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
}

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));

/*
6
Requirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
Examples:
count([1, 5, 10], true)  -> 1
count([3, 7, 2, 5, 10], false)  -> 3
count([-1, 1, -2, 2], true)  -> 2
count([0, -1, 15, 1], false)  -> 3
count([1, 2, 3, 4, -4], true)  -> 3
*/

const count = (array, boolean) => {
  let counter = 0;
  for (const el of array) {
    if (el % 2 === 0 && boolean === true) counter++;
    else if (el % 2 !== 0 && boolean === false) counter++;
  }
  return counter;
};

console.log(count([1, 5, 10], true));
console.log(count([3, 7, 2, 5, 10], false));
console.log(count([-1, 1, -2, 2], true));
console.log(count([0, -1, 15, 1], false));
console.log(count([1, 2, 3, 4, -4], true));

/*
7
Requirement:
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript")  -> -1
sumDigitsDouble("23abc45")   -> 28
sumDigitsDouble("Hi-23")  -> 10
sumDigitsDouble("ab12")  -> 6
sumDigitsDouble("n0numh3r3")  -> 12
*/

function sumDigitsDouble(string) {
  let sum = 0;
  for (let number of string) {
    if (Number(number)) sum += Number(number) * 2;
  }
  if (sum === 0) return -1;
  else return sum;
}

console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));

/*
8
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2
*/

const countOccurrence = (str1, str2) => {
  let count = 0;
  let arr = str2.toLowerCase().split("").sort().join("");
  for (let i = 0; i < arr.length; i++) {
    if (str1.toLowerCase().includes(arr[i])) count++;
  }
  return count;
};

console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversations", "IT"));

// HOMEWORK 12

/*
Requirement:
Write a function named makeNegative() that takes a number and returns its 
negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense. So, zero will stay as zero.
Examples
makeNegative(10)       -> -10
makeNegative( -7)      -> -7
makeNegative( 0)        -> 0
makeNegative(0.45)    -> -0.45
*/

const makeNegative = (number) => {
  if (number > 0) return 0 - number;
  else return number;
};
console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

/*
    Requirement:
    Write a function isSumEvenOrOdd() which takes three numbers as 
    arguments and determines if the sum of these numbers is odd or even.
    Examples:
    isSumEvenOrOdd(0, 1, 4)  -> "odd"
    isSumEvenOrOdd(0, -1, -5)      -> "even"
    isSumEvenOrOdd(0, 0, 0)  -> "even"
    isSumEvenOrOdd(7, 1, 9)        -> "odd"
    isSumEvenOrOdd(1, 1, 1)        -> "odd"
    */

const isSumEvenOrOdd = (num1, num2, num3) => {
  if ((num1 + num2 + num3) % 2 === 0) return "even";
  else return "odd";
};
console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));

/*
    Requirement:
    Write a function named decimal2() which takes an array of numbers as an 
    argument and returns the array with the same numbers rounded up or down and 
    represented with only two decimals.
    Examples:
    decimal2( [94.356, 8.9752] )  -> [ 94.36, 8.98 ]
    decimal2( [76.62, 128.4, 84] )  -> [ 76.62, 128.4, 84 ]
    decimal2( [20987, 3.53245, 12.345, 32.9] )  -> [ 20987, 3.53, 12.35, 32.90 
    ]
    decimal2( [ ] )  -> [  ]
    decimal2( [4.35623, 8.9742] )  -> [ 4.36, 8.97 ]
    */

const decimal2 = (numbers) => numbers.map((num) => Number(num.toFixed(2)));

console.log(decimal2([94.356, 8.9752]));
console.log(decimal2([76.62, 128.4, 84]));
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
console.log(decimal2([]));
console.log(decimal2([4.35623, 8.9742]));

/*
    Requirement:
    Write a function named myPow() which takes two numbers, x and n, as its 
    arguments and returns x to the power of n without using Math.pow(). 3 to the 
    power of 3 is 3*3*3 = 27. 
    NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 
    equals the number itself.
    myPow(3, 3)  -> 27
    myPow(10, 1)  -> 10
    myPow(100, 0)  -> 1
    myPow(1, 1)  -> 1
    myPow(4, 2)    -> 16
    myPow(0, 0)    -> 1
    myPow(5, 3)    -> 125
    */

const myPow = (x, n) => {
  if (n > 0) return x ** n;
  else return 1;
};

console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));

/*
    Requirement:
    Write a function named findLongestWord() which takes a string as input and 
    returns the longest word in the string.
    NOTE: If the string is empty or consists of spaces only, then return empty string.
    NOTE: If the string consists of multiple words having the longest word, then 
    return the first occurrence.
    findLongestWord("The quick brown fox jumped over the lazy dog")  -> 
    "jumped"
    findLongestWord("This is a sample string for testing")  -
    >"testing" 
    findLongestWord("One two ten")  -> "One"
    findLongestWord("")  -> ""
    findLongestWord("      ")  -> ""
    */

const findLongestWord = (str) =>
  str.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));

// HOMEWORK 13

/*
1
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
*/

const countVC = (string) => {
  let result = { vowels: 0, consonants: 0 };
  for (const char of string.toLowerCase()) {
    if (
      char.charCodeAt(0) >= 97 &&
      char.charCodeAt(0) <= 122 &&
      "aeoui".includes(char)
    )
      result.vowels++;
    else if (
      char.charCodeAt(0) >= 97 &&
      char.charCodeAt(0) <= 122 &&
      !"aeoui".includes(char)
    )
      result.consonants++;
  }
  return result;
};
console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123Abc"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

/*
2
Requirement:
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {}
*/

const countChars = (str) => {
  str = str.replaceAll(" ", "");
  let charCount = {};

  let letterCount = str
    .split("")
    .filter((x) => x.toLowerCase() >= "a" && x.toLowerCase() <= "z").length;
  letterCount > 0 ? (charCount["letters"] = letterCount) : "";

  let numberCount = str.split("").filter((x) => x >= "0" && x <= "9").length;
  numberCount > 0 ? (charCount["numbers"] = numberCount) : "";

  let specialCount = str
    .split("")
    .filter((x) => !(x.toLowerCase() >= "a" && x.toLowerCase() <= "z"))
    .filter((x) => !(x >= "0" && x <= "9")).length;
  specialCount > 0 ? (charCount["specials"] = specialCount) : "";

  return charCount;
};

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("     "));
console.log(countChars(""));

/*
3
Requirement:
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/

function maxOccurrences(string) {
  let empty = [];
  if (string === "") return "";
  for (let i = 0; i < string.length; i++) {
    first = string[i];
    rest = string.slice([i + 1]);
    if (rest.includes(first)) empty.push(first);
  }
  return empty[0];
}

console.log(maxOccurrences("Hello"));
console.log(maxOccurrences(""));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences("      "));
console.log(maxOccurrences(""));

/*
4
Requirement:
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

const starOut = (string) => {
  for (const el of string.split(" ")) {
    if (el.includes("*"))
      return (
        el.replaceAll("*", "").slice(0, 1) + el.replaceAll("*", "").slice(-1)
      );
  }
  return string;
};
console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("***"));
console.log(starOut("   "));
console.log(starOut(""));

/*
5
Requirement:
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

const romanToInt = (str) => {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = roman[str[i]];
    const next = roman[str[i + 1]];
    if (curr < next) num -= curr;
    else if ((num += curr));
  }
  return num;
};

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));
console.log(romanToInt("IX"));
console.log(romanToInt("IXX"));

// HOMEWORK 14

/*
Requirement:
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx")  -> false
repeatingX("Hello Xx World")  -> true
repeatingX("x x")  -> false
repeatingX("")  -> false
repeatingX("xxxxx")  -> true
*/

const repeatingX = (string) => {
  let str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ("xX".includes(str[i]) && str[i] === str[i + 1]) return true;
  }
  return false;
};
console.log(repeatingX("xTechxGlobalx"));
console.log(repeatingX("Hello Xx World"));
console.log(repeatingX("x x"));
console.log(repeatingX(""));
console.log(repeatingX("xxxxx"));

/*
Requirement:
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is a 
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers.
Examples:
isPerfectSquare(25) -> true
isPerfectSquare(24) -> false
isPerfectSquare(0)  -> true
isPerfectSquare(1)  -> true
isPerfectSquare(-1)  -> false
isPerfectSquare(144)  -> true
*/

const isPerfectSquare = (number) => {
  return (
    Math.floor(Math.sqrt(number)) * Math.floor(Math.sqrt(number)) === number
  );
};
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(-1));
console.log(isPerfectSquare(144));

/*
Requirement:
Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’)  -> 212
convertTemperature(32, 'Fahrenheit’)  -> 0
convertTemperature(0, 'Celsius’)  -> 32
convertTemperature(212, 'Fahrenheit’)  -> 100
convertTemperature(-40, 'Celsius’)  -> -40
convertTemperature(-40, 'Fahrenheit’)  -> -40
*/

const convertTemperature = (number, string) => {
  return string === "Celsius" ? (number * 9) / 5 + 32 : ((number - 32) * 5) / 9;
};
console.log(convertTemperature(100, "Celsius"));
console.log(convertTemperature(32, "Fahrenheit"));
console.log(convertTemperature(0, "Celsius"));
console.log(convertTemperature(212, "Fahrenheit"));
console.log(convertTemperature(-40, "Celsius"));
console.log(convertTemperature(-40, "Fahrenheit"));

/*
Requirement:
Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )  -> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )  -> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )  -> 0
sumOfEvenNumbers( [ ] )  -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )  -> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] )  -> 150
*/

const sumOfEvenNumbers = (number) => {
  sum = 0;
  for (const num of number) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
};
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]));

/*
Requirement:
Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"])  -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"])  -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])  -> ["Apple", "BANANA", 
"123", "456", "Peach", "KIWI"]
capsOdds([ ])  -> [ ]
capsOdds(["John !@#$%", "^&*() Doe"])  -> ["John !@#$%", "^&*() DOE"]
*/

const capsOdds = (array) =>
  array.map((value, index) => (index % 2 !== 0 ? value.toUpperCase() : value));

console.log(capsOdds(["Hello", "World"]));
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]));
console.log(capsOdds([]));
console.log(capsOdds(["John !@#$%", "^&*() Doe"]));

// HOMEWORK 15

/*
1
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/

const toCamelCase = (string) => {
  if (!string.includes(" ")) return string;
  arr = "";
  let str = string.trim();
  for (const el of str.split(" ")) {
    if (str.indexOf(el) === 0) arr += el.toLowerCase();
    else if (str.indexOf(el) !== 0)
      `${(arr += el[0].toUpperCase() + el.slice(1).toLowerCase())}`;
  }
  return arr;
};

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));
console.log(toCamelCase("I Learn Java Script"));
console.log(toCamelCase("helloWorld"));

/*   
2
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello
*/

const toSnakeCase = (string) => {
  arr = [];
  for (const el of string.split(" ")) {
    if (el.length >= 1) arr.push(el.toLowerCase());
  }
  return arr.join("_");
};

console.log(toSnakeCase("first name"));
console.log(toSnakeCase("last    name"));
console.log(toSnakeCase("    I love Java Script"));
console.log(toSnakeCase("already_snake_case"));
console.log(toSnakeCase("hello"));

/*
3
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"
*/

const alternatingCases = (string) =>
  string
    .split(" ")
    .map((value) => {
      return value
        .split("")
        .map((value1, index) =>
          index % 2 !== 0 ? value1.toLowerCase() : value1.toUpperCase()
        )
        .join("");
    })
    .join(" ");

console.log(alternatingCases("Hello"));
console.log(alternatingCases("basketball"));
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases(""));
console.log(alternatingCases("123!@#aB"));

/*
4
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
*/

const isNeutral = (str1, str2) =>
  str1
    .split("")
    .map((value, index) => (value === str2[index] ? value : "0"))
    .join("");

console.log(isNeutral("-", "+"));
console.log(isNeutral("-+", "-+"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isNeutral("--++--", "++--++"));
console.log(isNeutral("+++", "+++"));

/*
5
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
*/

const isTrueOrFalse = (string) => {
  let firstCount = 0;
  let secondCount = 0;
  let str = string.split(" ");
  for (const el of str) {
    if ("ABCDEFGHIJKLM".toLowerCase().includes(el[0].toLowerCase()))
      firstCount++;
    else secondCount++;
  }
  return firstCount >= secondCount;
};

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"));
console.log(isTrueOrFalse("Got stuck in the Traffic"));

// HOMEWORK 16

/*
Requirement:
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
Examples
toInitials( "Joe Doe")  -> "J. D."
toInitials( "Alex Reyes")  -> "A. R."
toInitials( "Tom Cruise")  -> "T. C."
toInitials( "Bruce Willis")  -> "B. W."
toInitials( "Ja Le")  -> "J. L."
*/

const toInitials = (string) =>
  string
    .split(" ")
    .map((value) => value[0].toUpperCase() + ".")
    .join("");

console.log(toInitials("Joe Doe"));
console.log(toInitials("Alex Reyes"));
console.log(toInitials("Tom Cruise"));
console.log(toInitials("Bruce Willis"));
console.log(toInitials("Ja Le"));

/*
Requirement:
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
Examples:
hasNumbers("")  -> false
hasNumbers("John is 34 years old")  -> true
hasNumbers("Hello 3")  -> true
hasNumbers("125$")  -> true
hasNumbers("   a   ")  -> false
hasNumbers("      ")  -> false
hasNumbers("!@#$%^&*()_+")  -> false
*/

const hasNumbers = (string) =>
  string.split("").some((value) => Number(value) === parseInt(value));

console.log(hasNumbers(""));
console.log(hasNumbers("John is 34 years old"));
console.log(hasNumbers("Hello 3"));
console.log(hasNumbers("125$"));
console.log(hasNumbers("   a   "));
console.log(hasNumbers("      "));
console.log(hasNumbers("!@#$%^&*()_+"));

// console.log(Number(2) === parseInt('2'))

/*
Requirement:
Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
Examples:
elementLength( [ "Hello", "World" ] )  -> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )  -> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] )  -> [ 3, 8, 4 ]
elementLength( [ ] )  -> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )  -> [ 10, 0, 6, 10 ]
*/

const elementLength = (array) => array.map((value) => value.length);

console.log(elementLength(["Hello", "World"]));
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"]));
console.log(elementLength(["BMW", "Mercedes", "Audi"]));
console.log(elementLength([]));
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"]));

/*
4
Requirement:
Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] )  -> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] )  ->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”
*/

const isArraySumEvenOrOdd = (array) =>
  array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";

console.log(isArraySumEvenOrOdd([]));
console.log(isArraySumEvenOrOdd([0, -1, -5]));
console.log(isArraySumEvenOrOdd([7, 1, 8, 1]));
console.log(isArraySumEvenOrOdd([0, 0]));
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1]));

/*
5
  Requirement:
Write a function named reverse() which takes a string argument and returns the given string 
reversed. 
Examples:
reverse("Hello World")  -> "dlroW olleH"
reverse("TechGlobal")  -> "labolGhceT"
reverse("Basketball is fun")  -> "nuf si llabteksaB"
reverse("")  -> ""
reverse("Apples 456")  -> "654 selppA"
*/

const reverse = (string) =>
  string
    .split("")
    .map((value) => value)
    .reverse()
    .join("");

console.log(reverse("Hello World"));
console.log(reverse("TechGlobal"));
console.log(reverse("Basketball is fun"));
console.log(reverse(""));
console.log(reverse("Apples 456"));

/*
Requirement:
Write a function named reverseWords() which takes a string argument and returns a string 
with each word within that string reversed but still in the same order as the initial string. 
Examples:
reverseWords("Hello World")  -> "olleH dlroW"
reverseWords("TechGlobal")  -> "labolGhceT"
reverseWords("Basketball is fun")  -> "llabteksaB si nuf"
reverseWords("")  -> "”
reverseWords("Apples 456")  -> "selppA 654"
*/

const reverseWords = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse
    .split(" ")
    .map((value) => value)
    .reverse()
    .join(" ");
};

console.log(reverseWords("Hello World"));
console.log(reverseWords("TechGlobal"));
console.log(reverseWords("Basketball is fun"));
console.log(reverseWords(""));
console.log(reverseWords("Apples 456"));

// HOMEWORK 17

/*
1
Requirement:
Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
findMedian([1, 3], [2])  -> 2
findMedian([1, 2], [3, 4])  -> 2.5
findMedian([4], [3])  -> 3.5
findMedian([4], [])   -> 4
findMedian([0], [0,1])    -> 0
*/

const findMedian = (arr1, arr2) => {
  const arr3 = [...arr1, ...arr2].sort((a, b) => a - b);
  const arr4 = arr3.map((value) => value).length / 2;
  return arr3.length % 2 !== 0
    ? arr3[Math.floor(arr4)]
    : (arr3[arr3.length / 2] + arr3[arr3.length / 2] - 1) / 2;
};
console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([4], [3]));
console.log(findMedian([4], []));
console.log(findMedian([0], [0, 1]));

/*
2
Requirement:
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
calculateFactorial(0)  -> 1
calculateFactorial(1)  -> 1
calculateFactorial(5)  -> 120
calculateFactorial(6)  -> 720
calculateFactorial(10)  -> 3628800
calculateFactorial(4)  -> 24
*/

const calculateFactorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(5));
console.log(calculateFactorial(6));
console.log(calculateFactorial(10));
console.log(calculateFactorial(4));

/*
3
Requirement:
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12)  -> 4
calculateGCD(17, 5)  -> 1
calculateGCD(48, 18)  -> 6
calculateGCD(0, 5)  -> 5
calculateGCD(21, 14)  -> 7
calculateGCD(60, 48)  -> 12
*/

const calculateGCD = (n1, n2) => {
  for (let i = Math.max(n1, n2); i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) return i;
  }
};

console.log(calculateGCD(8, 12));
console.log(calculateGCD(17, 5));
console.log(calculateGCD(48, 18));
console.log(calculateGCD(0, 5));
console.log(calculateGCD(21, 14));
console.log(calculateGCD(60, 48));

/*
4
Requirement:
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12)  -> 24
calculateLCM(17, 5)  -> 85
calculateLCM(48, 18)  -> 144
calculateLCM(0, 5)  -> 0
calculateLCM(21, 14)  -> 42
calculateLCM(60, 48)  -> 240
*/

const calculateLCM = (n1, n2) => {
  for (let i = Math.max(n1, n2); i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) return (n1 * n2) / i;
  }
};

console.log(calculateLCM(8, 12));
console.log(calculateLCM(17, 5));
console.log(calculateLCM(48, 18));
console.log(calculateLCM(0, 5));
console.log(calculateLCM(21, 14));
console.log(calculateLCM(60, 48));
