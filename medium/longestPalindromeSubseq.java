class Solution {
    public int longestPalindromeSubseq(String s) {
        int n = s.length();

        //In Java, an int matrix is automatically initialized with 0s
        int[][] dp = new int[n][n];

        //Base case: every single charater is a plindrome of length 1
        for(int i = 0; i < n; i++){
            dp[i][i] = 1;
        }

        //Build the table from bottom up
        for(int i = n - 1; i >= 0; i--){
            for(int j = i + 1; j < n; j++){
                // In Java, use .charAt(index) to access string characters
                if(s.charAt(i) == s.charAt(j)){
                    dp[i][j] = 2 + dp[i + 1][j - 1];
                } else{
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j-1]);
                }
            }
        }

        // Return the answer for the full string from index 0 to n - 1
        return dp[0][n - 1];
    }
}