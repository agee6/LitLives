var React = require('react');
var History = require('react-router').History;
var APIUtil = require('../util/APIUtil.js');

var BookConfirmation = React.createClass({
  mixins: [History],
  getInitialState:function(){
    return({})
  },
  yesClick:function(event){
      event.preventDefault();
      debugger; 
    APIUtil.createBook(this.props.book);
    var url = "/Desk"
    this.history.push({pathname: url});
    //reroute to User Show with Book Display
  },
  noClick:function(event){
      event.preventDefault();
      this.props.close();
    //closeWindow and reset state of parent
  },
  render: function(){
    var chosen = this.props.book;
    return(
      <section className="BookConfirmation">
        <div>
          <h3>Is the following the correct book?</h3>
            <h2>{chosen.title}</h2>
            <h3>by, {chosen.author}</h3>
            <img src={chosen.image}></img>

        </div>
          <button className="Confirmation" id="Yes" onClick={this.yesClick}>Yes</button>
          <button className="Confirmation" id="No" onClick={this.noClick}>No, searchAgain</button>

      </section>
    )
  }

});
module.exports = BookConfirmation;
