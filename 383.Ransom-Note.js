//https://leetcode.com/problems/ransom-note/

/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote. */


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i]] = (map[magazine[i]] || 0) + 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) {
            return false;
        }
        map[ransomNote[i]]--;
    }
    return true;
};