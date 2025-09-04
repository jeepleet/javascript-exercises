const palindromes = function (str) {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    return cleaned === cleaned.split("").reverse("").join("");

};

// Do not edit below this line
module.exports = palindromes;
