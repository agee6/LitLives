var React = require('react');

var ToReadShelf = React.createClass({
  getInitialState: function(){
    return({books: ToReadShelfStore.all()})
  },
  componentDidMount: function(){
    ToReadShelfStore.addListener(this._onChange);
    APIUtil.fetchReadBooks();
  },
  _onChange: function(){
    this.setState({books:ToReadShelfStore.all()});
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

module.exports = ToReadShelf; 
