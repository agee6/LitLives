var ApiActions = require('../actions/api_actions');
var FilterParamsStore = require('../stores/filter_params');

var APIUtil = {
  fetchBookResults: function(){

    console.log("dancing");
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
