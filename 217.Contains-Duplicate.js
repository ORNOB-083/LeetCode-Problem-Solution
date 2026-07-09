// https://leetcode.com/problems/contains-duplicate/

/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = true;
    }
    return false;
};