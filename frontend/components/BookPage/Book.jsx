var React = require('react');
var BookUtil = require('../../util/BookUtil.js');

// components
var BookDescription = require("./BookDescription.jsx");
var BookImage = require("./BookImage.jsx");
var Note = require("./Note.jsx");
var UserArea = require("./UserArea.jsx");
var ReviewArea = require("./ReviewArea.jsx");

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
  render: function(){
    return(
      <div className="book-main">
        <div className="book-area">
          <div className='book-block'>
            <div className="book-column">
              <BookDescription />
            </div>
            <div className="book-column">
              <BookImage />
              <ReviewArea />
            </div>
          </div>
          <div className='note-area'>
            <Note />
          </div>
        </div>
        <div className="user-area">
          <UserArea />
        </div>
      </div>
    )
  }
})
module.exports = Book;
