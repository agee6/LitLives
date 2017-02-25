var React = require('react');
var ReactDOM = require('react-dom');

var DropDown = React.createClass({

  _fillInAddress: function() {
    this.props.handleLocChange();
    this.props.handleSearch();
  },
  componentWillUnmount: function() {
    document.getElementById('html-body').removeChild(document.getElementsByClassName("pac-container")[0])
    // ReactDOM.unmountComponentAtNode(document.getElementsByClassName("pac-container")[0]);
  },
  componentDidMount: function() {
    this.lautofill = ReactDOM.findDOMNode(this.props.locinput);
    this.autofillOptions = {
      types: ['geocode']
    };
  },
  render: function() {
    return(
      <div></div>
    )
  }
});

module.exports = DropDown;
