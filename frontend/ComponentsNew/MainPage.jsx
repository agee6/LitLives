var React = require('react');
var SplashIndex = require('./MainPage/SplashIndex.jsx');
var SearchArea = require('./MainPage/SearchArea.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');
var APIUtil = require('../util/APIUtil.js');
var History = require('react-router').History;
var browserHistory = require('react-router').browserHistory;

var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex           : 20
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
};

var MainPage = React.createClass({
  getInitialState: function(){
    return({chosen: BookSearchStore.currentBook(), modalIsOpen: false});
  },
  bookChosen: function(){
    event.preventDefault();
    var bookToSend = BookSearchStore.currentBook();
    bookToSend.read = "toRead";
    var url = "/Desk";
    browserHistory.push("/Books/" + bookToSend.ISBN13);
  },
  render: function(){
    return(
      <div className="homePage">
        <SearchArea whenChosen={this.bookChosen}/>
        <SplashIndex whenChosen={this.bookChosen}/>
      </div>
    );
  }
});

module.exports = MainPage;
