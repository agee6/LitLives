var ApiActions = require('../actions/api_actions');


var APIUtil = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    $.get(uri, {}, function(book_list){
      ApiActions.RecieveActions(book_list);
    });

  },
  getInitialBookIndex: function(){

    var uri = "https://www.googleapis.com/books/v1/volumes?q=Best+Novels+all+time"
    $.get(uri, {maxResults: 20}, function(book_list){
      ApiActions.ReceiveInitial(book_list);
    });
  },
  createBook: function(bookItem){

    $.post('/api/books', bookItem, function(payload){
      console.log(payload.satus);
    });

  },
  createReview: function(data) {
    $.post('/api/reviews', { review: data }, function (bench) {
      ApiActions.receiveAll([bench]);
    });
  },
  makeBookObject: function(bookData){
    var chosen = bookData.volumeInfo;
    var newBook = {title: chosen.title,
                description: chosen.description,
                publishing: chosen.publisher,
                pages: chosen.pageCount,
                language: chosen.language,
                read: "reading",
                image: chosen.imageLinks.thumbnail
              };
      if(chosen.authors !== undefined){
        newBook.author = chosen.authors[0];
      }
      if(chosen.industryIdentifiers !== undefined){
        newBook.ISBN13 = chosen.industryIdentifiers[0].identifier;
        newBook.ISBN10 = chosen.industryIdentifiers[1].identifier;
      }
      return newBook;
  },
  getUserBooks: function(){
    $.get('/api/books', {}, function(books){
      ApiActions.recieveUserBooks(books); 
    })
  },
};

module.exports = APIUtil;
