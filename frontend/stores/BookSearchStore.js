var Store = require('flux/utils').Store;
var _searchResults = [];
var BookSearchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchStore = new Store(AppDispatcher);

var resetSearchResults = function(results){
  _searchResults = results.slice(0);
};

BookSearchStore.all = function () {
  return _searchResults.slice(0);
};

BookSearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.SearchResultsRecieved:
      var result = resetBenches(payload.benches);
      BookSearchStore.__emitChange();
      break;
  }
};

module.exports = BookSearchStore;
