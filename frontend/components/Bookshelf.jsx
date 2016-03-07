var React = require('react');
var BookShelfStore = require('../stores/BookShelfStore.js');
var Shelf = require('./BookShelf/Shelf.jsx');

var History = require('react-router').History;

var BookShelf = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var reading = BookShelfStore.reading();
    var toRead = BookShelfStore.toRead();
    var allToRead = reading.concat(toRead);
    this.spinClass = 'fa fa-bars';
    return({readBooks: BookShelfStore.read(), toReadBooks: allToRead, shelfVisible: false})
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
    this.history.push({pathname: "/"})
  },
  booksClick: function(event){
      event.preventDefault();
      if(this.state.shelfVisible){
        this.spinClass='fa fa-bars';
        $('.menu-trigger i').transition({
          rotate: '-180deg'
        });
        // this.menuClass='menu'
        this.setState({shelfVisible: false});
      }else{
        this.spinClass='fa fa-times';
        $('.menu-trigger i').transition({
          rotate: '180deg'
        });
        // this.menuClass='menu open'
        this.setState({shelfVisible: true});

      }


      $('.menu').toggleClass('open', 200, 'easeOutQuad');

  },
  render: function(){

    return(
      <section className="bookshelf">


          <div className="menu">
            <ul>
              <li><a href="">Home</a>
              </li>
              <li><a href="">About</a>
              </li>
              <li><a href="">Click Bait</a>
              </li>
            </ul>
          </div>
          <div className="site-wrapper">
            <div className="header">
              <div className="menu-trigger" onClick={this.booksClick}><a href="/Desk"> <i className={this.spinClass}> </i></a>
              </div>
            </div>
          </div>

      </section>
    )
  }
})
module.exports = BookShelf;
