var React = require('react');

// components
var BookDescription = require("./Book/BookDescription.jsx");
var BookImage = require("./Book/BookImage.jsx");
var NoteArea = require("./NoteBook/Note.jsx");
var UserShelfArea = require("./User/UserShelfArea.jsx");

//stores

var Book = React.createClass({

  render: function(){

    return(
      <div className="book-main">
        <div className="book-area">
          <div className="book-column">
            <BookDescription />
          </div>
          <div className="book-column">
            <BookImage />
          </div>

        </div>
        <div className="user-shelf-area">
          <UserShelfArea />
        </div>
      </div>

    )
  }
})
module.exports = Book;
