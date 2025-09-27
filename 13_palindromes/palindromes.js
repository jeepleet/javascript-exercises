const palindromes = function (string) {
    
    let str = string.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    return str === str.split("").reverse().join("");
        
};

// Do not edit below this line
module.exports = palindromes;
