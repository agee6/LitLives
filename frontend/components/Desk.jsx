var React = require('react');
var BookSearchStore = require('../stores/BookSearchStore');
var Notebook = require('./Notebook.jsx');
var Desk = React.createClass({

  render: function(){
    return(
      <section className="Desk">
        <Notebook currentBook={BookSearchStore.currentBook()}/>
      </section>
    )
  }
})
module.exports = Desk;
