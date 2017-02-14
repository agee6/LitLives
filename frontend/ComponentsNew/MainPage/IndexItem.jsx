var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ApiActions = require('../../actions/api_actions.js');
var History = require('react-router').History;
var browserHistory = require('react-router').browserHistory;
var APIUtil = require('../../util/APIUtil.js');

var IndexItem = React.createClass({
  onClick: function(event){
    event.preventDefault();
    ApiActions.updateCurrentBook(this.props.book);
    var bookToSend = this.props.book;
    bookToSend.read = "toRead";
    var url = "/Desk"
    this.props.history.push("/Books/book/" + bookToSend.ISBN13)
  },
  render: function(){
    var customStyle;
    var placements = ["middle", "top", "bottom"];
    var placementStyle = {verticalAlign: placements[Math.floor(Math.random() * 3)], margin: Math.floor(Math.random() * 40) - 20}
    var heights = ["200px", "250px", "300px", "350px"];
    var posH = this.props.book.title.length * 9;
    if(posH > 450){
      customStyle = {height: "350px"}
    } else if(posH < 100){
      customStyle = {height: heights[Math.floor(Math.random() * heights.length)]};
    }else{
      customStyle = {height: this.props.book.title.length * 9};
    }
    return(
      <div className="InitialBooks" style={placementStyle} onClick={this.onClick}><img style={customStyle} src={this.props.book.image}></img></div>
    );
  }
})
module.exports = IndexItem;
