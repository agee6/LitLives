var Store = require('flux/utils').Store;
var _reviews = [];
var ReviewConstants = require('../constants/ReviewConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewStore = new Store(AppDispatcher);
var APIUtil = require('../util/APIUtil.js');

var resetNotes = function(reviews){
  _reviews = [];
  if(reviews === null){
    _reviews = [];
  }else {
    _reviews = reviews.slice(0);
  }
};

var addReview = function(review){
  _reviews.push(note);
};

ReviewStore.all = function () {
  return _reviews.slice(0);
};

ReviewStore.empty = function(){
  _reviews = [];
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ReviewConstants.ReceiveReviews:
      var result = resetNotes(payload.results);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.AddReview:
      var r2 = addReview(payload.result);
      ReviewStore.__emitChange();
      break;
  }
};

module.exports = ReviewStore;
