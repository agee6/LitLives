var Store = require('flux/utils').Store;
var _searchResults = [];
var _initialResults = [];
var _currentBook = null;
var BookSearchConstants = require('../constants/BookSearchConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchStore = new Store(AppDispatcher);
var APIUtil = require('../util/APIUtil.js');


var resetSearchResults = function(results){
  _searchResults = [];
  _searchResults = results.slice(0);
};
var resetCurrentBook = function(book){
  _currentBook = book;

};
var loadInitial = function(results){

  _initialResults = results.slice();
  APIUtil.addToInitial();

};
var addToInitial = function(results){

  _initialResults = _initialResults.concat(results.slice());
};
BookSearchStore.all = function () {
  return _searchResults.slice(0);
};
BookSearchStore.empty = function(){
  _searchResults = [];
};
BookSearchStore.initialData = function(){
  return _initialResults;
};
BookSearchStore.resetCurrentBook = function(book){
  _currentBook = book;

};
BookSearchStore.currentBook = function(){
  return _currentBook;
};

BookSearchStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case BookSearchConstants.SearchResultsReceived:
      var result = resetSearchResults(payload.results);
      BookSearchStore.__emitChange();
      break;
    case BookSearchConstants.InitialResultsReceived:
      var r2 = loadInitial(payload.results);
      BookSearchStore.__emitChange();
      break;
    case BookSearchConstants.ReceiveCurrentBook:
      var d2 = resetCurrentBook(payload.book);
      BookSearchStore.__emitChange();
      break;
    case BookSearchConstants.AddInitialReceived:
      var c3 = addToInitial(payload.results);
      BookSearchStore.__emitChange();
      break;
    case BookSearchConstants.DeleteCurrentBook:
      var c4 = resetCurrentBook(null);
      BookSearchStore.__emitChange();
      break; 
  }
};
window.BookSearchStore = BookSearchStore;

module.exports = BookSearchStore;
