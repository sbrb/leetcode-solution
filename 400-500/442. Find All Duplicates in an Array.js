/*
442. Find All Duplicates in an Array
You must write an algorithm that runs in O(n) time and uses only constant extra space.
https://leetcode.com/problems/find-all-duplicates-in-an-array/
*/

var findDuplicates = function (arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let x = Math.abs(arr[i]);
        let index = x - 1;
        if (arr[index] < 0) {
            ans.push(x);
        } else {
            arr[index] *= -1;
        }
    }
    return ans;
};//tc&sc:-O(n)