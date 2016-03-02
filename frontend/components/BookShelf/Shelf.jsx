var React = require('react');
var ShelfItem = require('./ShelfItem.jsx');

var Shelf = React.createClass({

  render: function(){
    var theshelf = [];
    var theshelf = this.props.books.map(function(book, index){
      return(<ShelfItem key={index} bookTitle={book.title} book={book} /> );
    }, this);
    return(
      <section className="BookShelf" id="Shelf">
        <ul>
          {theshelf}
        </ul>
      </section>
    );
  }

})

module.exports = Shelf;
