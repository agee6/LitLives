var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');


var BookSearchBar = React.createClass({
  getInitialState: function(){
    return{value: "", searchResults: []}
  },
  handleChange: function(event){

    this.setState({value: event.target.value});

    if (this.state.value.length > 0 ){
      APIUtil.fetchBookResults(this.state.value);
    }

  },

  componentDidMount: function(){
    this.storeIndex = BookSearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.storeIndex.remove();
  },
  _onChange: function(){
    if (this.state.value.length > 0){
    this.setState({searchResults: BookSearchStore.all()});
    }
    else{
      this.setState({searchResults: []});
    }
  },
  searchBarMoveUp: function() {
    // debugger;
    // this.refs.searchbar.style{{bottom: "10%"}}
    $("#landing-search-bar").css("bottom", "40%");
    setTimeout(function(){
        this.setState({
          showAutocomplete: true
        });
        // debugger;
    }.bind(this), 1800);
    // this.hideAutocomplete();
    // this.tempToken = setTimeout(this.showAutocomplete, 2000);
  },
  searchBarMoveBack: function() {
    $("#landing-search-bar").css("bottom", "20%");
    // this.hideAutocomplete();

    // setTimeout(function(){
      this.setState({
        showAutocomplete: false
      });
    //     // debugger;
    // }.bind(this), 500);
  },
  clickOption: function(event){
    this.click(event);
  },
  click: function(event){
    event.preventDefault();
    var theChosen = this.state.searchResults[0].volumeInfo.title;
    var chosen = APIUtil.makeBookObject(this.state.searchResults[0]);
    BookSearchStore.resetCurrentBook(chosen);
    this.props.whenChosen();

  },
  render: function(){
    var that = this;
    var guesses = this.state.searchResults.map(function(result, index){
      return( <li key={index} onClick={that.clickOption} className="searchGuess">{result.volumeInfo.title }</li>);
    })


    return (
      <div>
        <label id="BookSearchLabel">What book would you like to explore?</label>
        <br/>
        <form className="SearchForm">
          <input id="BookSearchInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.searchBarMoveUp}
            onBlur={this.searchBarMoveBack}
            placeholder="enter book title"
            />
          <button id="BookSearchButton" className="hvr-grow-shadow" onClick={this.click}>Find!</button>

        </form>
        <ul className="searchGuesses">
          {guesses}
        </ul>



      </div>
    );
  }

})
module.exports = BookSearchBar;
