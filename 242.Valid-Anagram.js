// https://leetcode.com/problems/valid-anagram/

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise. */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        }
        map[t[i]]--;
    }
    return true;
};