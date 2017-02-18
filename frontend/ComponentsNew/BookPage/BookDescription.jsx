var React = require('react');
// components
//stores
var BookSearchStore=require('../../stores/BookSearchStore.js');

var BookDescription = React.createClass({
  getInitialState: function(){
    return({currentBook: BookSearchStore.currentBook(), modalIsOpen: false});
  },
  componentDidMount: function(){
    this.BookIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.BookIndex.remove();
  },
  _onChange:function(){
    this.setState({currentBook: BookSearchStore.currentBook()})
  },
  render: function(){
    console.log(this.state.currentBook);
    return(
      <div className="book-description">
        <h1>{this.state.currentBook.title}</h1>
        <h2>{this.state.currentBook.author}</h2>
        <p>{this.state.currentBook.description}</p>

      </div>
    )
  }
})
module.exports = BookDescription;
