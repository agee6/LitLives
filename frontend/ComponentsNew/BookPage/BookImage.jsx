var React = require('react');
var RadioGroup = require('react-radio-group');
var APIUtil = require('../../util/APIUtil.js');
var ApiActions = require('../../actions/api_actions.js');
var BookSearchStore = require('../../stores/BookSearchStore');
var UserStore = require('../../stores/UserStore');

var BookImage = React.createClass({
  getInitialState: function(){
    var book = BookSearchStore.currentBook();
    var inDatabase = true;
    if(book.id === undefined){
      inDatabase = false;
    }
    if(book.read === "read"){
      var finishedRead = true;
    }else{
      var finishedRead = false;
    }
    return({image: book.image, currentBook: BookSearchStore.currentBook(), onShelf: inDatabase} );
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount:function(){
    this.bookStoreIndex.remove();
  },
  _onChange:function(){
    var book = BookSearchStore.currentBook();
    this.setState({image: book.image, currentBook: BookSearchStore.currentBook()});
  },
  handleChange: function(value){
    this.setState({selectedValue: value});
  },
  render: function(){
    var book = this.state.currentBook;
    var customStyle = {width: "70%"}
    return(
      <section className="book-image" id="book-image-container">
        <img src={book.image} id="book-cover" style={customStyle}></img>
      </section>
    )
  }
})
module.exports = BookImage;
