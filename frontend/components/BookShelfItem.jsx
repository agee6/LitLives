var React = require('react');
var History = require("react-router").History;
var ReviewUtil = require("../util/ReviewUtil.js");
var ApiActions = require("../actions/api_actions.js"); 

var BookShelfItem = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return({currentBook: this.props.book});
  },
  onClick: function(){
    ApiActions.updateCurrentBook(this.state.currentBook);
    ReviewUtil.fetchReviews(this.state.currentBook.ISBN13);
    this.history.push({pathname: "Book/" + this.state.currentBook.ISBN13});
  },
  render: function(){
    return(
      <li className="bookshelf-item" onClick={this.onClick}>{this.state.currentBook.title}</li>
    )
  }
});
module.exports = BookShelfItem;
