var React = require('react');


var Notebook = React.createClass({

  render: function(){

    return(
      <section className="Notebook">
        <img src={this.props.currentBook.volumeInfo.imageLinks.thumbnail}></img>
      </section>
    )
  }

});

module.exports = Notebook;
