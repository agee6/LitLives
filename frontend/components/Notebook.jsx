var React = require('react');
var BookPage = require('./NoteBook/BookPage.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');

var Notebook = React.createClass({
  getInitialState: function(){
    return({currentBook:BookSearchStore.currentBook()})
  },
  componentDidMount: function(){
    this.storeIndex = BookSearchStore.addListener(this._onChange);

  },
  componentWillUnmount: function(){
    this.storeIndex.remove(); 
  },
  _onChange: function(){
    this.setState({currentBook: BookSearchStore.currentBook()});
  },

  render: function(){

    return(
      <section className="Notebook">
        <img src={this.state.currentBook.image}></img>
        <BookPage currentBook={this.state.currentBook} changeCurrentBook={this.changeCurrentBook}/>
      </section>
    )
  }

});

module.exports = Notebook;
