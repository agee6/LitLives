var React = require('react');


var BookPage = React.createClass({

  onClick: function(event){
    event.preventDefault();
    alert("congrats!");
  },
  render: function(){
    var book = this.props.currentBook;
    // var bookStyle = { backgroundImage: 'url('+ book.image + ')'};
    return(
      <section className="BookPage" id="BookPageArea">
        <div className="BookTitleArea">
          <div className="BookTitle">{book.title}</div>
          <div className="Author">by, {book.author}</div>

        </div>
        <div className="BookPage" id="BookDescriptionBox">
          <img src={book.image} id="CoverPhoto"></img>
          <p id="BookDescription">{book.description}</p>
        </div>
        <footer className="BookPage" id="BookFooter">
          <div className="BookFooter" id="language">Pages: {book.pages}</div>
          <div className="BookFooter" id="language">language: {book.language}</div>
          <div className="BookFooter" id="publisher">publisher: {book.publishing}</div>

        </footer>

      </section>
    )
  }
})
module.exports = BookPage;
