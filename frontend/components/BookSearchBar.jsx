var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');

var BookSearchBar = React.createClass({
  getInitialState: function(){
    return{value: "", searchResults: []}
  },
  handleChange: function(){
    if (this.state.value.length > 2){
      APIUtil.fetchBookResults(this.state.value);
    }
  },
  componentDidMount: function(){
    BookSearchStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState({searchResults = BookSearchStore.all()});
  },
  render: function(){
    render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
})
