var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ApiActions = require('../../actions/api_actions.js');
var APIUtil = require('../../util/APIUtil.js');

var ShelfItem = React.createClass({
  onClick: function(event){
    event.preventDefault();

    APIUtil.updateUser({current_book: this.props.book.id});
    ApiActions.updateCurrentBook(this.props.book);

  },
  render: function(){
    return(
      <li className="ShelfItem" onClick={this.onClick}>{this.props.bookTitle}</li>
    )
  }
})

module.exports = ShelfItem;
