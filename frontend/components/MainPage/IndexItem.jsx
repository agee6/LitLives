var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ApiActions = require('../../actions/api_actions.js');
var History = require('react-router').History;
var browserHistory = require('react-router').browserHistory;

var IndexItem = React.createClass({
  mixins:[History],
  onClick: function(event){
    event.preventDefault();
    ApiActions.updateCurrentBook(this.props.book);
    var bookToSend = this.props.book;
    bookToSend.read = "reading";
    this.history.push("/Book/" + bookToSend.ISBN13)
  },
  render: function(){
    var placementStyle = {verticalAlign: "middle"};
    var customStyle = {width: "250px", borderRadius: "10px"};
    return(
      <div className="initial-books" style={placementStyle} onClick={this.onClick}><img style={customStyle} src={this.props.book.image}></img></div>
    );
  }
})
module.exports = IndexItem;
