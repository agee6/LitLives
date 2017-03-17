var ApiActions = require('../actions/api_actions');

var ReviewUtil = {
  createReview: function(review){
    var reviewObj = {Review: review};
    $.post('/api/reviews', reviewObj, function(payload){
      ApiActions.addBookReview(payload)
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
    $.get('/api/user/reviews', {}, function(reviews){
      ApiActions.RecieveUserReviews(reviews);
    });
  }
};
module.exports = ReviewUtil;
