var React = require('react');
var BookSearchStore = require('../stores/BookSearchStore.js');
var ApiActions = require('../actions/api_actions.js');
var History = require('react-router').History;
var APIUtil = require('../util/APIUtil.js');

var IndexItem = React.createClass({
  mixins: [History],
  onClick: function(event){
    event.preventDefault();
    ApiActions.updateCurrentBook(this.props.book);
    this.props.whenChosen(); 
    // APIUtil.createBook(this.props.book);
    // this.history.push("/Desk");
  },
  render: function(){
    return(
      <li className="InitialBooks hvr-grow" onClick={this.onClick}><img src={this.props.book.image}></img></li>
    );
  }
})
module.exports = IndexItem;
