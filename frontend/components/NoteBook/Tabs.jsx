var React = require('react');
var Tab = require('./Tab.jsx');

var Tabs = React.createClass({



  render: function() {
    return (
      <div>
        <ul className="tabsList">
          <Tab clickFunc={this.props.clickFunction} tabName={this.props.tabOptions[0]} />
          <Tab clickFunc={this.props.clickFunction} tabName={this.props.tabOptions[1]} />
        </ul>
      </div>
    );
  }

});

module.exports = Tabs;
