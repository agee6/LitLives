var React = require('react');
var ShelfItem = require('./ShelfItem.jsx');

var Shelf = React.createClass({

  render: function(){
    var theshelf = [];
    var theid;
    var theshelf = this.props.books.map(function(book, index){
      if(index % 2 === 0){
        theid = "book1";
      }else {
        theid = "book2";
      }
      return(<ShelfItem theid={theid} key={index} bookTitle={book.title} book={book} /> );
    }, this);
    return(
      <section className="Shelf" id={this.props.identifier}>
        <ul id="ShelfBookList">
          {theshelf}
        </ul>
      </section>
    );
  }

})

module.exports = Shelf;
