var ApiActions = require('../actions/api_actions');

var ReviewUtil = {
  createReview: function(reviewObj){
    $.post('/api/reviews', reviewObj, function(payload){
      ApiActions.RecieveAddedReview(payload)
    });
  },
  fetchReviews: function(bookToFetch){
    var data = {Review:{ISBN13: bookToFetch}};
    $.get('api/reviews', data, function(payload){
      ApiActions.receiveBookReviews(payload)
    })
  },
  updateReviews: function(reviewID){
    $.patch('api/reviews/', reviewID, function(payload){
      ApiActions.ReciveAddedReview(payload)
    })
  },
  fetchUserReviews: function(Review){
    $.get('/api/user/revews', {}, function(reviews){
      ApiActions.RecieveUserReviews(reviews);
    });
  }
};
module.exports = ReviewUtil;
