var React = require('react');
var BookSearchStore = require('../stores/BookSearchStore.js');
var APIUtil = require('../util/APIUtil.js');


var InitialBookIndex = React.createClass({

  getInitialState: function(){
    return({bookIndex: BookSearchStore.initialData()});
  },
  componentDidMount: function(){
    APIUtil.getInitialBookIndex();
    this.iIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    
  },
  _onChange: function(){
    this.setState({bookIndex:BookSearchStore.initialData()})
  },
  click: function(event){
    event.preventDefault();
    var li = event.currentTarget;
    debugger;
    console.log(li);
  },
  render: function(){
    var bookOptions;
    var that = this;

    bookOptions = this.state.bookIndex.map(function(book, index){
      if(book.volumeInfo === undefined || book.volumeInfo.imageLinks === undefined){
        return(<li key={index}></li>);
      }else{
        return(<li key={index} data-book={book} className="InitialIndex" onClick={that.click}><img src={book.volumeInfo.imageLinks.thumbnail}></img></li>);
      }
    });
    return(
      <ul className="BookList">
        {bookOptions}
      </ul>

    );
  }
})

module.exports = InitialBookIndex;
