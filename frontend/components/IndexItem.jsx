var React = require('react');
var BookSearchStore = require('../stores/BookSearchStore.js');
var ApiActions = require('../actions/api_actions.js');
var History = require('react-router').History;

var IndexItem = React.createClass({
  mixins: [History],
  onClick: function(event){
    event.preventDefault();
    ApiActions.updateCurrentBook(this.props.book);
    //APIUtil.createBook(this.props.book);
    this.history.push("/Desk");
  },
  render: function(){
    return(
      <li className="InitialIndex" onClick={this.onClick}><img src={this.props.book.image}></img></li>
    );
  }
})
module.exports = IndexItem;
