var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var SearchResultItem = require('./SearchResultItem.jsx');
var History = require('react-router').History;

var SearchResults = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return({chosen: BookSearchStore.currentBook(), currentBooks: BookSearchStore.all()});
  },
  bookChosen: function(){
    // this.openModal();
    event.preventDefault();
    var bookToSend = BookSearchStore.currentBook();
    bookToSend.read = "toRead";
    var url = "/Book/" + bookToSend.ISBN13;
    this.history.push({pathname: url});
  },
  openModal: function() {
    this.setState({modalIsOpen: true, chosen: BookSearchStore.currentBook()});
  },

  closeModal: function() {
    BookSearchStore.resetCurrentBook(null);
    this.setState({modalIsOpen: false});
  },
  render: function(){

    var searchResults = [];
    for (var i = 0; i < this.state.currentBooks.length; i++) {
      searchResults.push(<SearchResultItem book={this.state.currentBooks[i]} />);
    }

    return(
      <div className="homePage">
        <ul className="search-results-list">
          {searchResults}
        </ul>

      </div>
    );

  }
});
module.exports = SearchResults;
