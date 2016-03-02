var React = require('react');
var BookSearchBar = require('./BookSearchBar.jsx');


var SearchArea = React.createClass({


  render: function(){
    return(


      <section id="popupbody">
        <div id="pop-outer">
          <div id="popup-q">
            <form action="#" id="popup-form" method="post">
              <img id="close" src="/assets/closeButton.png"></img>
                <h2>What book are you reading now</h2>
                <div id="searchDiv">
                  <BookSearchBar whenChosen={this.props.whenChosen} />
                </div>

            </form>
          </div>
        </div>
      </section>
    )
  }
})

module.exports = SearchArea;
