var React = require('react');
var BookPage = require('./NoteBook/BookPage.jsx'); 


var Notebook = React.createClass({

  render: function(){

    return(
      <section className="Notebook">
        <img src={this.props.currentBook.image}></img>
        <BookPage />
      </section>
    )
  }

});

module.exports = Notebook;
