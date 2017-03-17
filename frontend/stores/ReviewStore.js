var Store = require('flux/utils').Store;
var _reviews = [];
var ReviewConstants = require('../constants/ReviewConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewStore = new Store(AppDispatcher);
var _rating = 0;
var resetNotes = function(reviews){
  _reviews = [];
  if(reviews === null){
    _reviews = [];
  }else {
    _reviews = reviews.slice(0);
  }
};
var resetRating = function(reviews){
  if(reviews.length === 0){
    _rating = 0;
    return 0;
  }
  var rating = 0;
  for (var i = 0; i < reviews.length; i++) {
    rating += reviews[i].rating;
  }
  _rating = (rating/reviews.length);
}
var addReview = function(review){
  var rating = _rating * _reviews.length;
  _reviews.push(review);
  rating += review.rating;
  _rating = (rating / _reviews.length);
};
ReviewStore.all = function () {
  return _reviews.slice(0);
};
ReviewStore.rating = function(){
  return _rating;
}
ReviewStore.empty = function(){
  _reviews = [];
};
ReviewStore.__onDispatch = function (payload) {
  console.log(payload);
  switch(payload.actionType) {
    case ReviewConstants.ReceiveBookReviews:
      var result = resetNotes(payload.results);
      var result2 = resetRating(payload.results);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.AddBookReview:
      var r2 = addReview(payload.review);
      ReviewStore.__emitChange();
      break;
  }
};

module.exports = ReviewStore;
