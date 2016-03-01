var ApiActions = require('../actions/api_actions');


var APIUtil = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    $.get(uri, {}, function(book_list){
      ApiActions.RecieveActions(book_list);
    });

  },
  getInitialBookIndex: function(){

    var uri = "https://www.googleapis.com/books/v1/volumes?q=Best+Novels+all+time"
    $.get(uri, {maxResults: 20}, function(book_list){
      ApiActions.ReceiveInitial(book_list);
    });
  },
  createBook: function(bookItem){

    $.post('api/books', bookItem, function(payload){
      console.log(payload.satus);
    });

  },
  createBench: function(data){
    $.post('api/benches', { bench: data }, function(bench) {
      ApiActions.receiveAll([bench]);
    });
  },
  createReview: function(data) {
    $.post('api/reviews', { review: data }, function (bench) {
      ApiActions.receiveAll([bench]);
    });
  }
};

module.exports = APIUtil;
