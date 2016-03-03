var React = require('react');
var BookPage = require('./NoteBook/BookPage.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');

var Notebook = React.createClass({
  getInitialState: function(){
    return({currentBook:BookSearchStore.currentBook()})
  },
  componentDidMount: function(){
    this.storeIndex = BookSearchStore.addListener(this._onChange);

  },
  componentWillUnmount: function(){
    this.storeIndex.remove();
  },
  _onChange: function(){
    this.setState({currentBook: BookSearchStore.currentBook()});
  },

  render: function(){
    if(this.state.currentBook){
      return(

        <section className="Notebook">
          <img src={this.state.currentBook.image}></img>
          <BookPage currentBook={this.state.currentBook} changeCurrentBook={this.changeCurrentBook}/>
        </section>
      )
    }else{
      return(
        <div>currently loading</div>
      )
    }
  }

});

module.exports = Notebook;
