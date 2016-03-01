var AppDispatcher = require('../dispatcher/dispatcher');
var BookSearchConstants = require('../constants/BookSearchConstants');


var ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
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
  }
};

module.exports = ApiActions;
