var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ApiActions = require('../../actions/api_actions.js');

var ShelfItem = React.createClass({
  onClick: function(event){
    event.preventDefault();
    ApiActions.updateCurrentBook(this.props.book);
    
  },
  render: function(){
    return(
      <li className="ShelfItem" onClick={this.onClick}>{this.props.bookTitle}</li>
    )
  }
})

module.exports = ShelfItem;
