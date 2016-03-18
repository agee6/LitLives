var Store = require('flux/utils').Store;
var _analyses = [];
var BanalysesConstants= require('../constants/AnalysesConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var AnalysesStore = new Store(AppDispatcher);

var resetAnalyses = function(results){
  _analyses = results;
};
var addAnalysis = function(anal){
  _analyses.push(anal);
};

AnalysesStore.all = function () {

  return _analyses;
};
AnalysesStore.empty = function(){
  _analyses =  [];
};


AnalysesStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case AnalysesConstants.ReceiveUserBooks:

      var result = resetBooks(payload.books);
      AnalysesStore.__emitChange();
      break;
    case AnalysesConstants.ReceiveAddedBook:
      var added = addBook(payload.book);
      AnalysesStore.__emitChange();
      break;
    case AnalysesConstants.EmptyShelves:
      AnalysesStore.empty();
      AnalysesStore.__emitChange();
      break;
  }
};


module.exports = AnalysesStore;
