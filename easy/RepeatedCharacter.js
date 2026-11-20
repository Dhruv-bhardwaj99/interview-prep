/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    // const map = new Map();
    // for(const char of s){
    //     map.set(char, (map.get(char) || 0) + 1);
    //     if(map.get(char) === 2){
    //         return char;
    //     }
    // }

    const seen = new Set();
    for(const char of s){
        if(seen.has(char)){
            return char;
        }
        seen.add(char);
    }
};