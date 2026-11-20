/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length
    console.log("here", n)
    // Create an n X n table initialized with 0
    const dp = Array.from({length: n}, () => new Array(n).fill(0));
    console.log("testing: ", dp)
    //Base Case: every single character is a palindrome with length 1
    for(let i = 0; i < n; i++){
        dp[i][i] = 1;
    }

    //Build the table from bottom up:
    // i moves backwards from the end of the string to the start
    for (let i = n - 1; i >=0; i--){
        //j moves forwards from i + 1 to the end of the sting
        for(let j = i + 1; j < n; j++){
            if(s[i] === s[j]){
                // If characters match, take 2 + the best aswer from the inner substring
                dp[i][j] = 2 + dp[i + 1][j - 1];
            } else {
                //If they don't match, take the maximum fo skipping s[i] or skipping s[j]
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j-1])
            }
        }
    }

    //The answer for the whole string 
    return dp[0][n-1];
};