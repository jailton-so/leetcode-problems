// https://leetcode.com/problems/valid-anagram/description/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false


/**
 * This function takes in two strings and checks if they are anagrams of each other. 
 * @param {string} s - the first string
 * @param {string} t - the second string
 * @return {boolean} - true if s and t are anagrams of each other, false otherwise
 */
var isAnagram = function(s, t) {

    // check if s and t have the same length. If not, they can't be anagrams
    if(s.length != t.length)
        return false

    // create two empty arrays to store the unique characters in s and their respective counts
    let chars = []
    let count = []

    // this helper function checks if a character is already in chars array
    // if so, it returns the index of that character in the chars array
    // if not, it returns -1
    function checkChar(ccChar){
        for(let i=0; i<chars.length; i++){
            if(chars[i] === ccChar)
                return i
        }
        return -1
    }

    // count the characters in s and store the count for each unique character in the count array
    let check = 0
    for(let i=0; i < s.length; i++){
        check = checkChar(s[i])
        if(check === -1){
            // if the character is not in the chars array, add it to the end of the array
            // and add a new count for that character to the end of the count array
            chars.push(s[i]);
            count.push(0)
            count[count.length - 1] += 1
        } else{
            // if the character is already in the chars array, increment the count for that character
            count[check] += 1
        }
    }

    // check if t is an anagram of s
    let check2 = 0
    for(let n=0; n < t.length; n++){
        check2 = checkChar(t[n])
        if(check2 != -1){
            // if the character in t is also in s, decrement its count in the count array
            count[check2] -= 1
        }else{
            // if the character in t is not in s, return false because they can't be anagrams
            return false
        }
    }
    
    // check if all the counts in the count array are 0. If so, s and t are anagrams of each other
    for(let x=0; x<count.length; x++){
        if(count[x] !== 0){
            return false
        }
        else{
            return true
        }
    }
};
//console.log(isAnagram("anagram", "nagaram"))