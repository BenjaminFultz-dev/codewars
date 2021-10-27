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

// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.
// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:
// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.
// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
function josephusSurvivor(n, k){
  return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}

// Buddy pairs
// You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.
// Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:
// (n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1
// For example 48 & 75 is such a pair:
// •	Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
// •	Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
// Task
// Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); m can be greater than limit and has to be greater than n
// If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil or (for Dart) null; (for Lua, Pascal, Perl) [-1, -1].
// Examples
// (depending on the languages)
// buddy(10, 50) returns [48, 75] 
// buddy(48, 50) returns [48, 75]
// or
// buddy(10, 50) returns "(48 75)"
// buddy(48, 50) returns "(48 75)"
const s = (n) => {
  let res = 0
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) i === n/i ? res+= i : res += i + n/i
  }
  return res
}

function buddy(start,limit) {
  for(let i=start; i<= limit; i++) {
    let si = s(i)
    if(i < si && i === s(si)) return [i,si]
  }
  return "Nothing"
}


// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

// Given an array of integers your solution should find the smallest integer.
// For example:
// •	Given [34, 15, 88, 2] your solution will return 2
// •	Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// •	make as few changes as possible.
// •	if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!
function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}


// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
// The keypad has the following layout:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.
// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.
// Detective, we are counting on you!
function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}

// Your function takes two arguments:
// 1.	current father's age (years)
// 2.	current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
const number = array => array.map((n, i) => `${i + 1}: ${n}`);


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}


// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


// Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:
// •	If D > (the number of digits of N), return all the digits.
// •	If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]
function lastDigit(n, d) {
  const nums = String(n).split('').map(Number);
  const len = nums.length;
  let index = 0;
  return nums.filter(el => index++ >= len - d);
}


// Write a function to split a string and convert it into an array of words. For example:
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
  return string.split(' ');
}

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// For Example:
//   usdcny(15)  => '101.25 Chinese Yuan'
//   usdcny(465) => '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`;


// Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:
// 0 <= a <= b <= n
// The pairs should be sorted by increasing values of a then increasing values of b.
// For example,
// generatePairs(2) should return
// [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
const generatePairs = function(n) {
  const arr = []
  for (let i=0; i <= n; i++){
    for (let j=i; j <= n; j++){
      arr.push([i,j])
    }
  }
  return arr
}

// Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.
// For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].
// n/$n can be any integer greater than or equal to 0.
let generateIntegers = (n) => [...Array(n+1).keys()]


// Task
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.
// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.
// Example
// generateIntegers(2, 5) // --> [2, 3, 4, 5]
const generateIntegers=(m,n)=>[...Array(n+1).keys()].slice(m);


// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};


// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.
function testEven(n) {
    return n%2===0;
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;
}

// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0);
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!
function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}


// Now you have to write a function that takes an argument and returns the square of it.
const square = (n) => n * n;

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


