var React = require("react");

var BookConfirmation = React.createClass({
  getInitialState:function(){
    return({})
  },
  yesClick:function(){
    //reroute to User Show with Book Display
  },
  noClick:function(){
    //closeWindow and reset state of parent
  },
  render: function(){
    var chosen = this.props.selection.volumeInfo;
    return(
      <section className="BookConfirmation">
        <div>
          <h3>Is the following the correct book?</h3>
            <h2>{chosen.title}</h2>
            <h3>by, {chosen.authors[0]}</h3>
            <img src={chosen.imageLinks.smallThumbnail}></img>

        </div>
          <button className="Confirmation" id="Yes" onClick={this.yesClick}>Yes</button>
          <button className="Confirmation" id="No" onClick={this.noClick}>No, searchAgain</button>

      </section>
    )
  }

});
module.exports = BookConfirmation;
