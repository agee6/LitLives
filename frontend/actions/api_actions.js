var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchConstants = require('../constants/BookSearchConstants');
var BookShelfConstants = require('../constants/BookShelfConstants');


var ApiActions = {

  RecieveActions: function(book_list){

    AppDispatcher.dispatch({
      actionType: BookSearchConstants.SearchResultsRecieved,
      results: book_list.items
    });
  },
  ReceiveInitial: function(book_list){

    AppDispatcher.dispatch({
      actionType: BookSearchConstants.InitialResultsRecieved,
      results: book_list.items
    });
  },
  recieveUserBooks: function(books){
    AppDispatcher.dispatch({
      actionType: BookShelfConstants.RecieveUserBooks,
      books: books
    });
  },
  updateCurrentBook: function(book){
    AppDispatcher.dispatch({
      actionType: BookSearchConstants.ReceiveCurrentBook,
      book: book
    });
  }
};

module.exports = ApiActions;
