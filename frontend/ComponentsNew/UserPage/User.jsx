var React = require('react');

// components
var BookShelf = require("../Bookshelf.jsx");

//stores
var UserStore = require("../../stores/UserStore.js");

var User = React.createClass({
  render: function(){

    return(
      <div className="container">
        <div className="comment-area">
          <h1>This is for comments</h1>
        </div>
        <div className="user-shelf-area">
          <div className="user-name">
            <h1>{UserStore.currentUser().username}</h1>

          </div>
          <div className="bookshelf-area">
            <BookShelf />
          </div>
        </div>
      </div>
    )
  }
})
module.exports = User;
