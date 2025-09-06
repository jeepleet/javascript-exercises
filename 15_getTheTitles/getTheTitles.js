const getTheTitles = function(books) {
const titles =[];
for ( let i = 0; i < books.length; i++ ) {
    const book = books[i];
    titles.push(book.title);

}
return titles;
  

};

// Do not edit below this line
module.exports = getTheTitles;
