var Store = require('flux/utils').Store;
var _books = {};
var BookShelfConstants= require('../constants/BookShelfConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var BookShelfStore = new Store(AppDispatcher);

var resetBooks = function(results){
  _books = {};
  _books = results;
};

BookShelfStore.all = function () {

  return _books;
};
BookShelfStore.empty = function(){
  _books = {};
};
BookShelfStore.read = function(){
  if(_books.read === undefined){
    return [];
  }else{
  return _books.read;
}
};
BookShelfStore.toRead = function(){
  if(_books.toRead === undefined){
    return [];
  }else {
    return _books.toRead;
  }
};
BookShelfStore.reading = function(){
  if(_books.toRead === undefined){
    return [];
  }else {
    return _books.reading;
  }

};

BookShelfStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case BookShelfConstants.RecieveUserBooks:

      var result = resetBooks(payload.books);
      BookShelfStore.__emitChange();
      break;
    case BookShelfConstants.BooksAdded:
      var added = addBook(payload.book);
      BookShelfStore.__emitChange();
      break;
  }
};

window.BookShelfStore = BookShelfStore;

module.exports = BookShelfStore;
