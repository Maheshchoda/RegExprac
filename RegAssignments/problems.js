// 1)Write a regex which matches 'car' anywhere in the test string

const carRegex = /[^\w]car[^\w]/g;

// 2)Write a regex which matches '2011' in the test string

const numRegex = /2011/g;

// 3) Write a regex which matches all instances of 'tree', either 'Tree' or tree

const treeRegex = /[Tt]ree/g;

// 4)Write a regex which matches only firt occurence of the word 'pen'

const penRegex = /pen/;

// 5) Write a regex which only matches all occurence of car but oes not match
// car in the word cartoon

const cartRegex  = /car[^\w]/g;

// 6) Write a regex which matches the all spaces between words but doesnot
// match any character

const spaceRegex = /\s/g;

// 7) Write a regex which doesn't matches the all whitespaces i.e space or

const exprectspaceRegex = /\S/g;

// 8) Write a regex which mactches the all digits 2018 2017 without using
// numbers in regex

const numRegex = /\d{4}/g;

// 9) Write a regex which mactches the everything leaving the numbers in test string

const leaveRegex = /\D/g;

// 10) Write a regex to match everything in the test string, but you can not use
// alphabets from a to z numbers from 0 to 9 and underscore

const everyRegex = /\w/g;

// 11) match /.ear /g

 Ans: near pear dear clear

 // 12) 45.67 match what

 Ans: 45.67 45*67 45-67 45+67 //45$67


// 13) peroid matches evert character but does not match new line. How can
// you make to match new line character
Ans: make it multiline

// 14) Match the similar files

 const fileRegex = /file\w{1,}\.php/g;

 // 15)Write a regex which leaves the number and match everything

 const exceptRegex = /[\D]/g;
