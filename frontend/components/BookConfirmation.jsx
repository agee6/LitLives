var React = require('react');
var History = require('react-router').History; 

var BookConfirmation = React.createClass({
  mixins: [History],
  getInitialState:function(){
    return({})
  },
  yesClick:function(){
   
    var chosen = this.props.selection.volumeInfo; 
    var newBook = {title: chosen.title, 
                    author: chosen.authors[0],
                    description: chosen.description, 
                    ISBN13: chosen.industryIdentifiers[0].identifier,
                    ISBN10: chosen.industryIdentifiers[1].identifier, 
                    publisher: chosen.publisher
                  }
                  debugger; 
    APIUtil.addBook(newBook); 
    var url = "/Desk"
    this.history.push({pathname: url}); 
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
