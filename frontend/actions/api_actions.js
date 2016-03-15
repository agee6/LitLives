var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchConstants = require('../constants/BookSearchConstants');
var BookShelfConstants = require('../constants/BookShelfConstants');
var NoteConstants = require('../constants/NoteConstants');
var UserConstants = require('../constants/UserConstants');

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
  emptyShelves: function(){

    AppDispatcher.dispatch({
      actionType: BookShelfConstants.EmptyShelves
    });
  },
  deleteCurrentBook: function(){
    AppDispatcher.dispatch({
      actionType: BookSearchConstants.DeleteCurrentBook
    });
  },
  AddToInitial: function(newBookList){
    AppDispatcher.dispatch({
      actionType: BookSearchConstants.AddInitialReceived,
      results: newBookList
    });
  },
  receiveNotes: function(notes){
    AppDispatcher.dispatch({
      actionType: NoteConstants.ReceiveNotes,
      results: notes
    });
  },
  addNote: function(payload){
    AppDispatcher.dispatch({
      actionType: NoteConstants.AddNote,
      result: payload
    });
  },
  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.ReceiveUser,
      results: user
    })
  }
};

module.exports = ApiActions;
