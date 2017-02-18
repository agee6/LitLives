var React = require('react');

// components
var BookShelf = require("../Bookshelf.jsx");

var UserArea = React.createClass({

  render: function(){

    return(
      <div className="user-shelf-area">
        <h1>User Shelf Area</h1>
        <BookShelf />
      </div>
    )
  }
})
module.exports = UserArea;
