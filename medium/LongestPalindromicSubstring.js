/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length < 1){
        return "";
    }
    let start = 0;
    let maxLen = 0;

    const expandAroundCenter = (left, right) =>{
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }

        //Subract 1 because the loop decrements/increments once past the match
        return right - left - 1;
    }

    for(let i = 0; i < s.length; i++){
        //Case 1: Odd-length palindromes
        let len1 = expandAroundCenter(i, i);

        //Case 2: Even-length plaindroms
        let len2 = expandAroundCenter(i, i + 1);

        let len = Math.max(len1, len2);

        //Update boundaries if a longer palindrome is found
        if(len > maxLen){
            maxLen = len;
            start = i - Math.floor((len - 1) / 2)
        } 
    }

    return s.slice(start, start + maxLen);
};