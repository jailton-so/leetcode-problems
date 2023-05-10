// https://leetcode.com/problems/contains-duplicate/description/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


/**
 * This function takes an array of integers and checks whether the array
 * contains any duplicate elements or not. It returns a boolean value
 * indicating the presence or absence of duplicate elements.
 *
 * @param {number[]} nums - An array of integers to check for duplicates.
 * @return {boolean} - Returns true if duplicates are found, false otherwise.
 */
let containsDuplicate = function (nums){
    let result = false; // Initialize a variable to store the result and set it to false by default.
    for(let i=0; i < nums.length; i++){ // Loop through the array elements starting from the first element.
        for(let n=0; n < nums.length; n++){ // Loop through the array elements again starting from the first element.
            if(i===n) // If the loop indexes are equal, it means it's the same element so we break out of the inner loop.
                break
            if(nums[i] === nums[n]){ // If the elements at the two indexes are equal, it means a duplicate has been found.
                result = true // Set the result to true indicating that duplicates are found.
                return result // Return the result since we have found a duplicate.
            }
        }
    }
    return result // If we have looped through the array without finding any duplicates, we return the default result value of false.
}
//console.log(containsDuplicate([1,2,3,1]))