var React = require('react');


var BookPage = React.createClass({

  onClick: function(event){
    event.preventDefault();
    alert("congrats!");
  },
  markAsRead: function(event){
    event.preventDefault();
    console.log("read");
  },
  editClick: function(event){
    event.preventDefault();
    console.log("edit")
  },
  render: function(){
    var book = this.props.currentBook;
    // var bookStyle = { backgroundImage: 'url('+ book.image + ')'};
    var pages, language, publisher;

    if(book.pages === null){
      pages = "N/A";
    }else {
      pages = book.pages;
    }
    if(book.language === null){
      language = "N/A";
    }
    else {
      language = book.language;
    }
    if(book.publishing === null){
      publisher = "N/A";
    }else {
      publisher = book.publishing;
    }
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
        <div className="BookPage" id="BookFooter">
          <div className="BookFooter" id="pages">pages: {pages}</div>
          <div className="BookFooter" id="language">language: {language}</div>
          <div className="BookFooter" id="publisher">publisher: {publisher}</div>

        </div>
        <div className="button-area">
          <button className="book-button-area" id="edit-book-buton" onclick={this.editClick}>Edit Book</button>
          <button className="book-button-area" id="mark-as-read" onClick={this.markAsRead}>Mark as Read</button>
        </div>

      </section>
    )
  }
})
module.exports = BookPage;
