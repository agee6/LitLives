var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');


var BookSearchBar = React.createClass({
  getInitialState: function(){
    return{value: "", searchResults: [], showGuesses: false}
  },
  handleChange: function(event){

    this.setState({value: event.target.value});

    if (this.state.value.length > 0 && !this.pending){
      this.pending = true;
      APIUtil.fetchBookResults(this.state.value);
      window.setInterval(function(){
        this.pending = false;

      }.bind(this), 1000);
    }

  },

  componentDidMount: function(){
    this.storeIndex = BookSearchStore.addListener(this._onChange);
    this.pending = false;
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
          showGuesses: true
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
        showGuesses: false,
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
    if (this.state.showGuesses){
      var guesses = this.state.searchResults.map(function(result, index){
        return(<li key={index} onClick={that.clickOption} className="searchGuess"> {result.volumeInfo.title} </li>);
      });
    }else{
      guesses = <div />
    }


    return (
      <div id="landing-search-bar">
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
          <button id="BookSearchButton" className="hvr-grow-shadow fa fa-search" onClick={this.click}></button>
          <ul className="searchGuesses">
            {guesses}
          </ul>

        </form>



      </div>
    );
  }

})
module.exports = BookSearchBar;
