var React = require('react');

// components
var BookShelf = require("../BookShelf.jsx");

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
