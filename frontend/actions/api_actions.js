var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchConstants = require('../constants/BookSearchConstants');
var BookShelfConstants = require('../constants/BookShelfConstants');


var ApiActions = {

  ReceiveActions: function(book_list){

    AppDispatcher.dispatch({
      actionType: BookSearchConstants.SearchResultsReceived,
      results: book_list.items
    });
  },
  ReceiveInitial: function(book_list){


    AppDispatcher.dispatch({
      actionType: BookSearchConstants.InitialResultsReceived,
      results: book_list
    });
  },
  receiveUserBooks: function(books){
    AppDispatcher.dispatch({
      actionType: BookShelfConstants.ReceiveUserBooks,
      books: books
    });
  },
  ReceiveAddedBook: function(book){
    AppDispatcher.dispatch({
      actionType: BookShelfConstants.ReceiveAddedBook,
      book: book
    });

  },
  updateCurrentBook: function(book){

    AppDispatcher.dispatch({
      actionType: BookSearchConstants.ReceiveCurrentBook,
      book: book
    });
  },
  AddToInitial: function(newBookList){
    AppDispatcher.dispatch({
      actionType: BookSearchConstants.AddInitialReceived,
      results: newBookList
    });
  }
};

module.exports = ApiActions;
