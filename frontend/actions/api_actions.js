var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchConstants = require('../constants/bench_constants');


var ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  RecieveActions: function(book_list){
    AppDispatcher.dispatch({
      actionType: BookSearchConstants.SearchResultsREcieved,
      results: book_list.items
    });
  }
};

module.exports = ApiActions;
