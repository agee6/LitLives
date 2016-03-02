var React = require('react');
var Notebook = require('./Notebook.jsx');
var BookShelf = require('./BookShelf.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');
var Desk = React.createClass({

  render: function(){

    return(
      <section className="Desk">
        <Notebook  />

        <BookShelf />
      </section>
    )
  }
})
module.exports = Desk;
