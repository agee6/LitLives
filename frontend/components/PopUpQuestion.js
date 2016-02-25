var React = require('react');

var PopUpQuestion = React.createClass({

  render: function(){
    return(
      <section id="popupbody" style="overflow:hidden;">
        <div id="pop-outer">
          <div id="popup-q">
            <form action="#" id="popup-form" method="post">
              <img id="close" src="/assets/closeButton.png">
                <h2>What book are you reading now</h2>
                <hr>
                  <BookSearchBar />
                </form>
          </div>
        </div>
      </section>
    )
  }
})

module.exports = PopUpQuestion;
