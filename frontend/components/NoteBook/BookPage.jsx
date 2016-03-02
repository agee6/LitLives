var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');

var BookPage = React.createClass({
  getInitialState: function(){
    return({currentBook:BookSearchStore.currentBook()})
  },
  componentDidMount: function(){
    BookSearchStore.addListener(this._onChange);

  },
  _onChange: function(){
    this.setState({currentBook: BookSearchStore.currentBook()});
  },
  onClick: function(event){
    event.preventDefault();
    alert("congrats!");
  },
  render: function(){
    var book = this.state.currentBook;
    return(
      <section className="BookPage">
        <h1>{book.title}</h1>
        <div className="BookPage" id="ImageInLine">
          <img src={book.image}></img>
        </div>
        <h2>by, {book.author}</h2>
        <p>{book.description}</p>
        <footer className="BookPage" id="BookFooter">
          <p>Pages: {book.pages}</p>
          <p>language: {book.language}</p>
          <p>publisher: {book.publishing}</p>

        </footer>
        <button className="BookPage" id="BookFinishedButton" onClick={this.onClick}>Finished Reading!</button>

      </section>
    )
  }
})
module.exports = BookPage;
