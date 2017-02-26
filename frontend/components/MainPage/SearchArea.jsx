var React = require('react');
var SearchBar = require('./SearchBar.jsx');

var SearchArea = React.createClass({
  render: function(){
    return(
      <section id="popupbody">
          <SearchBar whenChosen={this.props.whenChosen} />
      </section>
    )
  }
})

module.exports = SearchArea;
