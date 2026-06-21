class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int carry = 0;
        
        // Initialize pointers at the end of both strings
        int i = a.length() - 1;
        int j = b.length() - 1;
        
        // Loop as long as there are digits to process or a carry remains
        while (i >= 0 || j >= 0 || carry > 0) {
            int sum = carry;
            
            if (i >= 0) {
                // Convert char to int by subtracting '0'
                sum += a.charAt(i) - '0';
                i--;
            }
            if (j >= 0) {
                // Convert char to int by subtracting '0'
                sum += b.charAt(j) - '0';
                j--;
            }
            
            // Append the remainder (0 or 1)
            result.append(sum % 2);
            
            // Calculate the next carry
            carry = sum / 2;
        }
        
        // Reverse the StringBuilder to get the correct order
        return result.reverse().toString();
    }
}