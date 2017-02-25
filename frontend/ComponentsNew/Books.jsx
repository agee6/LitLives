var React = require('react');
var History = require('react-router').History;


var Books = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    ); 
  }
});

module.exports = Books;
