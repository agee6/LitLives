var React = require('react');

// components
var BookDescription = require("./BookDescription.jsx");
var BookImage = require("./BookImage.jsx");
var Note = require("./Note.jsx");
var UserArea = require("./UserArea.jsx");
var ReviewArea = require("./ReviewArea.jsx");

//stores
var BookSearchStore = require("../../stores/BookSearchStore.js");

var Book = React.createClass({
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
