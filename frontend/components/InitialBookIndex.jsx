var React = require('react');
var BookSearchStore = require('../stores/BookSearchStore.js');
var APIUtil = require('../util/APIUtil.js');
var IndexItem = require('./IndexItem.jsx');


var InitialBookIndex = React.createClass({

  getInitialState: function(){
    return({bookIndex: BookSearchStore.initialData()});
  },
  componentDidMount: function(){
    APIUtil.getInitialBookIndex();
    this.iIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.iIndex.remove();
  },
  _onChange: function(){
    this.setState({bookIndex:BookSearchStore.initialData()})
  },
  render: function(){
    var bookOptions;
    var that = this;

    bookOptions = this.state.bookIndex.map(function(book, index){
        return(<IndexItem key={index} book={book} />);
    });
    return(
      <div id="BookArea">
        <ul className="BookList">
          {bookOptions}
        </ul>

      </div>

    );
  }
})

module.exports = InitialBookIndex;
