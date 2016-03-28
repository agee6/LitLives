var React = require('react');
var PropTypes = React.PropTypes;

var SearchListItem = React.createClass({
  click: function(event){
    event.preventDefault();
    debugger;
    this.props.clickOption(this.props.book);
  },
  render: function() {
    return (
      <option onClick={this.click} className="searchGuess" value={this.props.book.volumeInfo.title} />
    );
  }

});

module.exports = SearchListItem;
