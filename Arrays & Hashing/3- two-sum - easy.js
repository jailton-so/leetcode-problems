// https://leetcode.com/problems/two-sum/description/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * This function takes an array of integers and a target number and returns
 * an array of two integers such that they add up to the target. If no such
 * pair is found, it returns an empty array.
 *
 * @param {number[]} nums - An array of integers to find the pair from.
 * @param {number} target - The target sum to find the pair for.
 * @return {number[]} - An array of two integers that add up to the target sum.
 */
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){ // Loop through the array elements starting from the first element.
        for(let n=0; n<i; n++){ // Loop through the array elements again starting from the first element until the current element.
            if(nums[i]+nums[n] === target) // If the sum of the two elements is equal to the target, we have found the pair.
                return [i, n] // Return the pair as an array.
        }
    }
};
//console.log(twoSum([2,7,11,15], 9))