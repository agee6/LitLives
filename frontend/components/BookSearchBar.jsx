var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');
var SearchListItem = require('./SearchListItem.jsx');

var BookSearchBar = React.createClass({
  getInitialState: function(){

    return({value: "", searchResults: [], showGuesses: false});
  },
  handleChange: function(event){

    this.setState({value: event.target.value});

    if (this.state.value.length > 2 && !this.pending){
      this.pending = true;
      APIUtil.fetchBookResults(this.state.value);
      window.setInterval(function(){
        this.pending = false;

      }.bind(this), 1800);
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
      // this.setState({
      //   showGuesses: false,
      // });
    //     // debugger;
    // }.bind(this), 500);
  },
  clickOption: function(book){

    var theChosen = book;
    var chosen = APIUtil.makeBookObject(book);
    BookSearchStore.resetCurrentBook(chosen);
    debugger;
    this.props.whenChosen();

  },
  click: function(event){
    event.preventDefault();
    var theChosen = this.state.searchResults[0].volumeInfo.title;
    var chosen = APIUtil.makeBookObject(this.state.searchResults[0]);
    BookSearchStore.resetCurrentBook(chosen);
    this.props.whenChosen();

  },
  removeSearchGuesses: function(){
    this.setState({showGuesses:false});
  },
  render: function(){
    var that = this;
    if (this.state.showGuesses){
      var guesses = this.state.searchResults.map(function(result, index){
        return(<SearchListItem key={result.id} book={result} clickOption={this.clickOption} />);
      }, this);
    }else{
      guesses = null;
    }


    return (
      <div id="landing-search-bar">
        <label id="BookSearchLabel">What book do you want to explore?</label>
        <br/>
        <form className="SearchForm">
          <input id="BookSearchInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.searchBarMoveUp}
            onBlur={this.searchBarMoveBack}
            placeholder="enter book title"
            list="search-options"
            autoComplete="off"
            />
          <button id="BookSearchButton" className="hvr-grow-shadow fa fa-search" onClick={this.click}></button>
          <datalist className="searchGuesses" id="search-options">
            {guesses}
          </datalist>

        </form>



      </div>
    );
  }

})
module.exports = BookSearchBar;
