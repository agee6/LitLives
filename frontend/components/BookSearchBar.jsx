var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx'); 

var BookSearchBar = React.createClass({
  getInitialState: function(){
    return{value: "", searchResults: [], chosen: false}
  },
  handleChange: function(event){

    this.setState({value: event.target.value});

    if (this.state.value.length > 0 ){
      APIUtil.fetchBookResults(this.state.value);
    }

  },
  componentDidMount: function(){
    BookSearchStore.addListener(this._onChange);
  },
  _onChange: function(){
    if (this.state.value.length > 0){
    this.setState({searchResults: BookSearchStore.all()});
    }
    else{
      this.setState({searchResults: []});
    }
  },
  clickOption: function(event){
    this.click(event);
  },
  click: function(event){
    event.preventDefault();
    var theChosen = this.state.searchResults[0].volumeInfo.title;
    this.setState({chosen: this.state.searchResults[0]});

  },
  render: function(){
    var that = this;
    var guesses = this.state.searchResults.map(function(result, index){
      return( <li key={index} onClick={that.click} className="searchGuess">{result.volumeInfo.title }</li>);
    })
    if (this.state.chosen){

      var bookConfirmation = <BookConfirmation selection={this.state.chosen}/>;

    }else {
      var bookConfirmation = <div></div>;
    }

    return (
      <div>
        <label id="BookSearch" >Enter the book title:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      <button onClick={this.click}>Find my book!</button>
      <ul className="searchGuesses">
        {guesses}
      </ul>
        {bookConfirmation}

      </div>
    );
  }

})
module.exports = BookSearchBar;
