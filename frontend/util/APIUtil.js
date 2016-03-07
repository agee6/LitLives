var ApiActions = require('../actions/api_actions');


var APIUtil = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    $.get(uri, {}, function(book_list){
      console.log(book_list);
      ApiActions.ReceiveActions(book_list);
    });

  },
  getInitialBookIndex: function(){

    var uri = "https://www.googleapis.com/books/v1/volumes?q=best+selling+novels+all+time";
    $.get(uri, {maxResults: 40}, function(book_list){

      var newBookList = book_list.items.map(function(book, index){
        return(APIUtil.makeBookObject(book));
      });
      ApiActions.ReceiveInitial(newBookList);
    });
  },
  logoutUser: function(){

    $.ajax({
      url: '/session',
      type: 'DELETE'
    });

  },
  addToInitial: function(){
    var uri = "https://www.googleapis.com/books/v1/volumes?q=best+classic+novels";
    $.get(uri, {maxResults: 40}, function(book_list){
      var newBookList = book_list.items.map(function(book, index){
        return(APIUtil.makeBookObject(book));
      });
      ApiActions.AddToInitial(newBookList);
    });
  },
  createBook: function(bookItem){

    $.post('/api/books', bookItem, function(payload){

      ApiActions.ReceiveAddedBook(payload);
    });

  },
  createReview: function(data) {
    $.post('/api/reviews', { review: data }, function (bench) {
      ApiActions.receiveAll([bench]);
    });
  },
  getCurrentBook: function() {

    $.get('/api/user', {}, function(book){

      ApiActions.updateCurrentBook(book);
    });
  },
  updateUser: function(params){

    $.ajax({
      url: '/api/user',
      type: 'PATCH',
      data: params,
      success: function(book) {
          // Do something with the result
          console.log(book);
    }});
  },
  makeBookObject: function(bookData){
    var chosen = bookData.volumeInfo;
    var newBook = {title: chosen.title,
                description: chosen.description,
                publishing: chosen.publisher,
                pages: chosen.pageCount,
                language: chosen.language,
                read: "toRead",
              };
      if(chosen.imageLinks !== undefined){
        newBook.image = chosen.imageLinks.thumbnail;
      }
      if(chosen.authors !== undefined){
        newBook.author = chosen.authors[0];
      }
      if(chosen.industryIdentifiers !== undefined){
        if(chosen.industryIdentifiers[0] !== undefined){
          newBook.ISBN13 = chosen.industryIdentifiers[0].identifier;
        }
        if(chosen.industryIdentifiers[1] !== undefined){
          newBook.ISBN10 = chosen.industryIdentifiers[1].identifier;
        }
      }
      return newBook;
  },
  getUserBooks: function(){
    $.get('/api/books', {}, function(books){
      ApiActions.receiveUserBooks(books);
    });
  },

};

module.exports = APIUtil;
