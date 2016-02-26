var React = require('react');

var ReadShelf = React.createClass({
  getInitialState: function(){
    return({books: ReadShelfStore.all()})
  },
  componentDidMount: function(){
    ReadShelfStore.addListener(this._onChange);
    APIUtil.fetchReadBooks();
  },
  _onChange: function(){
    this.setState({books:ReadShelfStore.all()});
  },
  render: function(){
    var shelf = [];
    var shelf = this.state.books.map(function(book, index){
      return(<BookShelfItem key={index} bookTitle={this.state.bookTitle} /> );
    }).bind(this);
    return(
      <section className="BookShelf">
        <ul>
          {shelf}
        </ul>
      </section>
    );
  }

})
module.exports = ReadShelf; 
