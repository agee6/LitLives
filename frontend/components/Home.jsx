var React = require('react');
var InitialBookIndex = require('./InitialBookIndex.jsx');
var PopUpQuestion = require('./PopUpQuestion.jsx');

var Home = React.createClass({
  render: function(){

    return(
      <div className="homePage">
        <PopUpQuestion />
        <InitialBookIndex />
      </div>
    );

  }
});
module.exports = Home;
