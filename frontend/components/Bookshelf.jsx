var React = require('react');
var BookShelfStore = require('../stores/BookShelfStore.js');
var Shelf = require('./BookShelf/Shelf.jsx');
var BookSearch = require('./BookSearch.jsx');
var Modal = require('react-modal');
var History = require('react-router').History;

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var BookShelf = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var reading = BookShelfStore.reading();
    var toRead = BookShelfStore.toRead();
    var allToRead = reading.concat(toRead);
    return({readBooks: BookShelfStore.read(), toReadBooks: allToRead, modalIsOpen: false})
  },
  openModal: function() {
    this.setState({modalIsOpen: true, chosen: BookSearchStore.currentBook()});
  },

  closeModal: function() {
    BookSearchStore.resetCurrentBook(null);
    this.setState({modalIsOpen: false});
  },
  componentDidMount: function(){
    this.bookShelfIndex = BookShelfStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.bookShelfIndex.remove();
  },
  _onChange: function(){
    var reading = BookShelfStore.reading();
    var toRead = BookShelfStore.toRead();
    var allToRead = reading.concat(toRead);
    this.setState({readBooks: BookShelfStore.read(), toReadBooks: allToRead});
  },
  click: function(event){
    event.preventDefault();
    this.history.push({pathname: "/"})
  },
  render: function(){

    return(
      <section className="bookshelf">

        <Shelf books={this.state.toReadBooks} />
        <Shelf books={this.state.readBooks} />
        <button className="AddBooks" onClick={this.click}>Add to shelf</button>

      </section>
    )
  }
})
module.exports = BookShelf;
