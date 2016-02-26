var ApiActions = require('../actions/api_actions');


var APIUtil = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    console.log(uri); 
    $.get(uri, {}, function(book_list){
      ApiActions.RecieveActions(book_list);

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
