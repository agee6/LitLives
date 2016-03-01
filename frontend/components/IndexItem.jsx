var React = require('react');
var BookSearchStore = require('../store/BookSearchStore.js');

var IndexItem = React.createClass({
  onClick: function(event){
    event.preventDefault();
    BookSearchStore.resetCurrentBook(this.props.book);
    APIUtil.addBook({this.props.book}); 
  },
  render: function(){
    return(
      <li className="InitialIndex" onClick={this.onClick}><img src={this.props.book.volumeInfo.imageLinks.thumbnail}></img></li>
    );
  }
})