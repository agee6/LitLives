var React = require('react');
var BookShelfStore = require('../stores/BookShelfStore.js');
var Shelf = require('./BookShelf/Shelf.jsx');

var History = require('react-router').History;

var BS = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var reading = BookShelfStore.reading();
    var toRead = BookShelfStore.toRead();
    var allToRead = reading.concat(toRead);
    this.spinClass = 'fa fa-bars';

    return({readBooks: BookShelfStore.read(), toReadBooks: allToRead, shelfVisible: false});
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
  onAddClick: function(event){
    event.preventDefault();
    this.history.push({pathname: "/Search"})
  },
  booksClick: function(event){
      event.preventDefault();
      if(this.state.shelfVisible){
        this.spinClass='fa fa-bars';

        // this.menuClass='menu'
        this.setState({shelfVisible: false});
      }else{
        this.spinClass='fa fa-times';

        // this.menuClass='menu open'
        this.setState({shelfVisible: true});

      }


       $('.menu').toggleClass('open', 200, 'easeOutQuad');

  },
  render: function(){

    return (
      <section className="bookshelf">

          <div className="menu">
            <div className="FullBookShelf">
              <label className="ShelfLabel" id="ToRead">Want to read shelf</label>
              <Shelf books={this.state.toReadBooks} identifier="BooksToRead"/>
              <label className="ShelfLabel" id="Read">read shelf</label>
              <Shelf books={this.state.readBooks} identifier="BooksRead"/>
              <button className="shelf-button" onClick={this.onAddClick}>Add to Shelf</button>
            </div>
          </div>
          <div className="site-wrapper">
            <div className="header">
              <div className="menu-trigger" onClick={this.booksClick}><i className={this.spinClass}> </i>
              </div>
            </div>
          </div>


      </section>
    );
  }
})
module.exports = BS;
