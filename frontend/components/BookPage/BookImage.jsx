var React = require('react');
var RadioGroup = require('react-radio-group');
var BookUtil = require('../../util/BookUtil.js');
var ApiActions = require('../../actions/api_actions.js');
var BookSearchStore = require('../../stores/BookSearchStore');
var UserStore = require('../../stores/UserStore');

var BookImage = React.createClass({
  getInitialState: function(){
    var book = BookSearchStore.currentBook();
    if(book){
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
    }else{
      return({currentBook: null});
    }
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount:function(){
    this.bookStoreIndex.remove();
  },
  _onChange:function(){
    var book = BookSearchStore.currentBook();
    if(book){
      this.setState({image: book.image, currentBook: BookSearchStore.currentBook()});
    }
  },
  handleChange: function(value){
    this.setState({selectedValue: value});
  },
  render: function(){
    var book = this.state.currentBook;
    if(book){
      var customStyle = {width: "100%"}
      return(
        <section className="book-image" id="book-image-container">
          <img src={book.image} id="book-cover" style={customStyle}></img>
        </section>
      )
    }else{
      return(
        <div>no book to display</div>
      )
    }
  }
})
module.exports = BookImage;
