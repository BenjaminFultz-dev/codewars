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
  
  
  