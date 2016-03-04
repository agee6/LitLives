var React = require('react');
var Notebook = require('./Notebook.jsx');
var BookShelf = require('./BookShelf.jsx');

var Desk = React.createClass({

  render: function(){

    return(
      <section className="Desk" id="Desk">
        <Notebook  />

        <BookShelf />
      </section>
    )
  }
})
module.exports = Desk;
