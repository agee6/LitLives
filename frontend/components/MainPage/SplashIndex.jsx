var React = require('react');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var BookUtil = require('../../util/BookUtil.js');
var IndexItem = require('./IndexItem.jsx');

var SplashIndex = React.createClass({
  getInitialState: function(){
    return({bookIndex: BookSearchStore.initialData()});
  },
  componentDidMount: function(){
    BookUtil.getInitialBookIndex();
    this.iIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.iIndex.remove();
  },
  _onChange: function(){
    this.setState({bookIndex:BookSearchStore.initialData()})
  },
  shuffle: function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },
  render: function(){
    var bookOptions;
    var that = this;
    bookOptions = this.state.bookIndex.map(function(book, index){
        return(<IndexItem key={index} book={book} whenChosen={this.props.whenChosen}/>);
    }, this);
    return(
      <div id="BookArea">
        <div className="book-list">
          {bookOptions}
        </div>
      </div>
    );
  }
})

module.exports = SplashIndex;
