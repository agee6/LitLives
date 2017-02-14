var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');
var SearchListItem = require('./SearchListItem.jsx');
var History = require('react-router').History;
var browserHistory = require('react-router').browserHistory; 


var BookSearchBar = React.createClass({
  mixins: [History],
  getInitialState: function(){
    this.leave = false;
    this.needToLoad = false;
    return({value: "", searchResults: [], showGuesses: false});
  },
  handleChange: function(event){
    if(event.target.value.length > 0){
      this.setState({value: event.target.value, showGuesses: true});
    }else{
      this.setState({value: event.target.value, showGuesses: false});
    }

    if (this.state.value.length > 2 && !this.pending){
      this.pending = true;
      this.loadBar.style.display = 'block';
      this.needToLoad = false;
      APIUtil.fetchBookResults(this.state.value);
      window.setTimeout(function(){
        this.pending = false;
        if(this.needToLoad){
          this.pending = true;
          this.loadBar.style.display = 'block';
          this.needToLoad = false;
          APIUtil.fetchBookResults(this.state.value);
        }
      }.bind(this), 1800);
    }else if(this.state.value.length > 2){
      this.needToLoad = true;
    }else{
      this.needToLoad = false;
      this.loadBar.style.display = 'none';
    }
  },

  componentDidMount: function(){
    this.storeIndex = BookSearchStore.addListener(this._onChange);
    this.pending = false;
    this.loadBar = document.getElementById('loader');
  },
  componentWillUnmount: function(){
    this.storeIndex.remove();
  },
  _onChange: function(){
    if (this.state.value.length > 0 && !this.leave){
      this.loadBar.style.display = 'none';
      this.setState({searchResults: BookSearchStore.all()});
    }else if(this.leave){
      this.leave = false;
      var url = '/SearchResults';
      this.history.push({pathname: url});
    }else{
      this.loadBar.style.display = 'none';
      this.setState({searchResults: []});
    }
  },
  clickOption: function(book){

    var theChosen = book;
    var chosen = APIUtil.makeBookObject(book);
    BookSearchStore.resetCurrentBook(chosen);
    this.props.whenChosen();
  },
  blur: function(event){
    this.setState({showGuesses:false});
  },
  click: function(event){
    event.preventDefault();
    this.leave = true;
    APIUtil.fetchBookResults(this.state.value);
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
          <input id="BookSearchInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="find your next adventure"
            list="search-options"
            autoComplete="off"
            onBlur={this.blur}
            />
          <button id="BookSearchButton" className="hvr-grow-shadow fa fa-search" onClick={this.click}></button>
          <div id="loader" className='loader'></div>
          <ul className="searchGuesses" id="search-options">
            {guesses}
          </ul>
      </div>
    );
  }

})
module.exports = BookSearchBar;
