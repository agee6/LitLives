var React = require('react');
var BookUtil = require('../../util/BookUtil.js');
// components
var BookDescription = require("./BookDescription.jsx");
var BookImage = require("./BookImage.jsx");
var Note = require("./Note.jsx");
var UserArea = require("./UserArea.jsx");
var ReviewArea = require("./ReviewArea.jsx");
var SearchArea = require("../MainPage/SearchArea.jsx");
var BookDetails = require("./BookDetails.jsx");
//stores
var BookSearchStore = require("../../stores/BookSearchStore.js");
var UserStore = require("../../stores/UserStore.js");

var Book = React.createClass({
  componentDidMount: function(){
    if(!BookSearchStore.currentBook()){
      var ISBN13 = this.props.location.pathname.split("/")[2];
      if(UserStore.loggedIn()){
        BookUtil.getUserBook(ISBN13, true);
      }else{
        BookUtil.getBookByISBN(ISBN13);
      }
    }
  },
  bookChosen: function(){
    event.preventDefault();
    var bookToSend = BookSearchStore.currentBook();
    bookToSend.read = "toRead";
    this.history.push("/Book/" + bookToSend.ISBN13);
  },
  render: function(){
    return(
      <div className="page-frame">
        <div className="book-main">
          <div className="book-search-area">
            <SearchArea whenChosen={this.bookChosen} />
          </div>
          <div className="book-details">
            <BookImage />
            <BookDetails />
            <ReviewArea />
          </div>
          <div className="book-area">
            <BookDescription />
          </div>
          <div className="user-area">
            <UserArea />
          </div>
          <Note />
        </div>
      </div>
    )
  }
})
module.exports = Book;
