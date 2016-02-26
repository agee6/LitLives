var Store = require('flux/utils').Store;
var _bookShelf = [];
var BookShelfConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ReadShelfStore = new Store(AppDispatcher);

var resetSearchResults = function(results){
  _searchResults = [];
  _searchResults = results.slice(0);
};

BookSearchStore.all = function () {
  return _searchResults.slice(0);
};
BookSearchStore.empty = function(){
  _searchResults = [];
};

BookSearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BookSearchConstants.SearchResultsRecieved:
      var result = resetSearchResults(payload.results);
      BookSearchStore.__emitChange();
      break;
  }
};

module.exports = BookSearchStore;
