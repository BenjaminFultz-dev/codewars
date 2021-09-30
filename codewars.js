//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(arr) {
    return arr.map(number => number * number).reduce((a, b) => a + b)
  }
  
  console.log(squareSum([1, 2, 2]));

  // Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeDuplicates(str) {
    return str.split("").filter(word => str.indexOf() === word.lastIndexOf()).join("");
  }
  
  console.log(removeDuplicates("alpha beta gamma delta alpha beta gamma delta"))
  
  
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };
  
  console.log(domainName("http://github.com/carbonfive/raygun"));
  console.log(domainName("http://www.zombie-bites.com"));
  console.log(domainName("https://www.cnet.com"));

  // Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    let newString = "";
      for (let i = 0; i<str.length; i++){
          if(str[i] === str[i].toLowerCase()){
              newString += str[i].toUpperCase();
          }else {
              newString += str[i].toLowerCase();
          }
      }
      return newString.split(" ").reverse().join(" ")
  }
  
  console.log(stringTransformer("iNPUT eXAMPLE"));
  
  //Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  
  console.log(count("aba"));
  
  //Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
// Test.assertEquals(high('take me to semynak'), 'semynak'); 

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }
  
  console.log(high('man i need a taxi up to ubud'));
  console.log(high('what time are we climbing up the volcano'));
  console.log(high('take me to semynak'));
  
  // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
  
  console.log(duplicateEncode("din"));
  console.log(duplicateEncode("recede"));
  console.log(duplicateEncode("Success"));
  console.log(duplicateEncode("(( @"));
  
  //In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// Test.assertDeepEquals(solve([15,11,10,7,12]),[15,7,12,10,11]);
// Test.assertDeepEquals(solve([91,75,86,14,82]),[91,14,86,75,82]);
// Test.assertDeepEquals(solve([84,79,76,61,78]),[84,61,79,76,78]);
// Test.assertDeepEquals(solve([52,77,72,44,74,76,40]),[77,40,76,44,74,52,72]);
// Test.assertDeepEquals(solve([1,6,9,4,3,7,8,2]),[9,1,8,2,7,3,6,4]);
// Test.assertDeepEquals(solve([78,79,52,87,16,74,31,63,80]),[87,16,80,31,79,52,78,63,74]);

const solve = arr => [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

console.log(solve([15,11,10,7,12]));
console.log(solve([91,75,86,14,82]));
console.log(solve([84,79,76,61,78]));
console.log(solve([52,77,72,44,74,76,40]));
console.log(solve([1,6,9,4,3,7,8,2]));
console.log(solve([78,79,52,87,16,74,31,63,80]));

//Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
// Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// Test.assertEquals(switcher(['4', '24']), 'wc'); 

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? ';
const switcher = x => x.map(item => alpha[item]).join('');

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']));
console.log(switcher(['4', '24']));

//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
// Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 

function endSort(str) {
    return str.split(" ").sort((a, b) => a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0));
  }
  
  console.log(endSort('man i need a taxi up to ubud'));
  console.log(endSort('what time are we climbing up the volcano'));
  console.log(endSort('take me to semynak'));

  // An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be [])

function findMissingNum(arr,mixArr){
    if (arr.length === mixArr.length){
      return 0
    }else{
      let arrSum = arr.reduce((a,c) => a + c, 0)
      let mixArrSum = mixArr.reduce((a,c)=> a + c, 0)
      return arrSum - mixArrSum
    }
  
  }
  console.log(findMissingNum([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), 5)
  
  //Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
  }
  
  console.log(arrayDiff([], [4,5]), []);
  console.log(arrayDiff([3,4], [3]), [4]);
  console.log(arrayDiff([1,8,2], []), [1,8,2]);
  console.log(arrayDiff([1,2,3], [1,2]), [3]);
  
  
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

function sortArray(arr) {
    const odds = arr
        .filter(x => x % 2)
        .sort((a, b) => a - b);
        
    return arr
        .map(x => x%2 ? odds.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));

//The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(arr) {
    return arr.sort((a, b) => a - b).slice(-2);
  }
  
  console.log(twoOldestAges([1, 2, 10, 8]));

  // Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

function capitals(str) {
  
}

console.log(capitals('CodEWaRs'));

//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function reverseString(string) {
    return string.split("").reverse().join("");
  };
  
  console.log(reverseString("world"));
  console.log(reverseString("oozy rat in a sanitary zoo"));
  
  //Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function combineStrings(stringOne, stringTwo, stringThree) {
    let combinedString = ""
    for (let i = 0; i < stringOne.length; i++) {
      combinedString += stringOne[i] + stringTwo[i] + stringThree[i]
    }
    return combinedString
  }
  
  console.log(combineStrings("aa", "bb", "cc"));
  console.log(combineStrings("sea", "urn", "pms"));
  
//Create a function that takes in a word and returns the word with the first letter capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  };
  
  console.log(capitalize("friendship"));
  
  //create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Ex.
// 'eloquent' => 'loquen'
// 'country' => 'ountr'

function trimString(string) {
    return string.slice(1, -1);
  };
  
  console.log(trimString("eloquent"));
  console.log(trimString("country"));
  
  //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// sumMix([9, 3, '7', '3']), 22);
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

function sumMix(arr) {
    return arr.map(number => Number(number)).reduce((a, c) => a + c);
  };
  
  console.log(sumMix([9, 3, '7', '3']));
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); 
  
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
    return Math.floor(arr.reduce((a, c) => a + c) / arr.length);
  };
  
  console.log(getAverage([2,2,2,2]));
  console.log(getAverage([1,2,3,4,5,]));
  console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
  
  //You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr) {
    return arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number)).reduce((a, c) => a + c);
  }
  
  console.log(repeats([4,5,7,5,4,8]));
  console.log(repeats([9, 10, 19, 13, 19, 13]));
  console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
  console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
  console.log(repeats([5, 10, 19, 13, 10, 13]));
  
  //Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function getThisManyEvens(arr, num) {
    return arr.filter(number => number % 2 === 0).slice(-num);
  };
  
  console.log(getThisManyEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
  console.log(getThisManyEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
  console.log(getThisManyEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
  
  //Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

function countUnique(arr) {
    const uniqueCount = arr.map(array => [...new Set(array)].length);
    return uniqueCount.reduce((a, c) => a * c);
  };
  
  console.log(countUnique([[1,2],[4],[5,6]]));
  console.log(countUnique([[1,2],[4,4],[5,6,6]]));
  console.log(countUnique([[1,2],[3,4],[5,6]]));
  console.log(countUnique([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]));
  
  //Given an array of integers, Find the Nth smallest element in this array of integers.
//Array/list size is at least 3.
//Array/list's numbers could be a mixture of poitives, negativs, and zeroes.
//Repetiotion in array/list's numbers could occur, so don't remove duplications.

//nthSmallest([3, 1, 2], 2) ==> 2
//nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5) ==> 92
function nthSmallest(arr, num) {
    return arr.sort((a, b) => a - b)[num - 1]
  }
  
  console.log(nthSmallest([3, 1, 2], 2));
  console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5));
  
  function sortedArray(arr) {
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a, b) => b - a)
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
  }
  
  
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.
// The input will be a (non-empty) string of screws, e.g. : "---+++"
// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.
// Each action takes a set amount of time:
// •	remove one screw : 1 second
// •	move to the next screw: 1 second
// •	switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

function sc(screws){
  return screws.split('').reduce((time, screw, i) => screw == screws[i+1] ? time + 2 : time + 7, 1) - 7;
}

// Filter the number
// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?
// Task
// Your task is to return a number from a string.
// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

let filterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes
// •	The number can be negative already, in which case no change is required.
// •	Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
	function makeNegative(num) {
	  return -Math.abs(num);
	}

//     Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1);
}

// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// 123 --> "123"
// 999 --> "999"
function numberToString(num) {
  return num.toString();
}

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
// Example
// For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be false.
// Input/Output
// •	[input] integer yourLeft
// A non-negative integer representing the heaviest weight you can lift with your left arm.
// •	[input] integer yourRight
// A non-negative integer representing the heaviest weight you can lift with your right arm.
// •	[input] integer friendsLeft
// A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.
// •	[input] integer friendsRight
// A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.
// •	[output] a boolean value
	function areEquallyStrong(a1, a2, b1, b2) {
	  return a1+a2 == b1+b2 && a1*a2 == b1*b2;
	}

//     This is a problem that involves adding numbers to items in a list. In a list you will have to add the item's remainder when divided by a given divisor to each item.
// For example if the item is 40 and the divisor is 3 you would have to add 1 since 40 minus the closest multiple of 3 which is 39 is 1. So the 40 in the list will become 41. You would have to return the modified list in this problem.
// For this problem you will receive a divisor called div as well as simple list of whole numbers called nums. Good luck and happy coding.
// Examples
// nums = [2, 7, 5, 9, 100, 34, 32, 0], div = 3
//   ==>  [4, 8, 7, 9, 101, 35, 34, 0] 

// nums = [1000, 999, 998, 997], div = 5
//    ==> [1000, 1003, 1001, 999]

// nums = [], div = 2
//    ==> []
// Note: random tests check lists containing up to 10000 elements.
function solve(nums, div) {
  return nums.map(x => x + x % div)
}




