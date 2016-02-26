var React = require('react');

var BookShelfItem = React.createClass({
  render: function({
    return(
      <li className="BookShelfItem">{this.props.bookTitle}</li>
    )
  })
})

module.exports = BookShelfItem; 
