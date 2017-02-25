var React = require('react');

// components
var BookShelf = require("../Bookshelf.jsx");

var UserArea = React.createClass({

  render: function(){

    return(
      <div className="user-shelf-area">
        <BookShelf />
      </div>
    )
  }
})
module.exports = UserArea;
