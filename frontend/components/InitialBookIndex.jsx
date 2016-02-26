var React = require('react');



var InitialBookIndex = React.createClass({
  render: function(){
    return(
      <ul className="BookList">
        <li id="image1"></li>
        <li id="image2"></li>
        <li id="image3"></li>
        <li id="image4"></li>
        <li id="image5"></li>
      </ul>

    );
  }
})

module.exports = InitialBookIndex;
