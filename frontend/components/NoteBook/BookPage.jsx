var React = require('react');


var BookPage = React.createClass({

  onClick: function(event){
    event.preventDefault();
    alert("congrats!");
  },
  render: function(){
    var book = this.props.currentBook;
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

      </section>
    )
  }
})
module.exports = BookPage;
