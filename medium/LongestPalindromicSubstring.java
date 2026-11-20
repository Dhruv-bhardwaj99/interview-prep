class Solution {
    public String longestPalindrome(String s) {
        if(s== null || s.length() < 1){
            return "";
        }

        int start = 0;
        int maxLen = 0;

        for(int i = 0; i < s.length(); i++){
            //Odd-length palaindromes
            int len1 = expandAroundCenter(s, i, i);
            
            //Even-length palindromes
            int len2 = expandAroundCenter(s, i, i+1);

            int len = Math.max(len1, len2);

            if(len > maxLen){
                maxLen = len;
                start = i - (len - 1) / 2;
            }
        }

        return s.substring(start, start + maxLen);
    }

    private int expandAroundCenter(String s, int left, int right){
        //Expand outwards while within bounds and characters match
        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)){
            left--;
            right++;
        }
        //Return total length of palindrome found
        return right - left - 1;
    }
}