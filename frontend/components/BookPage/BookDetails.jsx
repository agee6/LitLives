var React = require('react');
//stores
var BookSearchStore = require("../../stores/BookSearchStore.js");
//util
var BookUtil = require("../../util/BookUtil.js");


var BookDetails = React.createClass({
  getInitialState: function(){
    return({chosen: BookSearchStore.currentBook()});
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.bookStoreIndex.remove();
  },
  _onChange: function(){
    this.setState({chosen: BookSearchStore.currentBook()});
  },
  render: function(){
    var book = this.state.chosen;
    if(book){
      var pages, language, publisher, genre, year, chapters;
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
      genre = book.genre === undefined ? "N/A" : book.genre;
      year = book.year === undefined ? "N/A" : book.year;
      chapters = book.chapters === undefined ? "N/A" : book.chapters;
      console.log(chapters);
      return(
        <div className='book-info'>
          <div id="BookFooter">
            <div className="book-footer" id="pages">pages: {pages}</div>
            <div className="book-footer" id="language">language: {language}</div>
            <div className="book-footer" id="publisher">publisher: {publisher}</div>
            <div className="book-footer" id="year"> year: {year}</div>
            <div className="book-footer" id="genre">genre: {genre}</div>
            <div className="book-footer" id="chapter">chapters: {chapters}</div>
          </div>
        </div>
      );
    }else{
      return(
        <div>no book info</div>
      )
    }
  }
});

module.exports = BookDetails;
