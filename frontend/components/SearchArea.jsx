var React = require('react');
var BookSearchBar = require('./BookSearchBar.jsx');


var SearchArea = React.createClass({


  render: function(){
    return(


      <section id="popupbody">


        <div id="landing-search-bar" >
          <BookSearchBar whenChosen={this.props.whenChosen} />
        </div>



      </section>
    )
  }
})

module.exports = SearchArea;
