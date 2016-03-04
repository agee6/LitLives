var React = require('react');
var BookPage = require('./NoteBook/BookPage.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');
var Tabs = require('./NoteBook/Tabs.jsx');
var Note = require('./NoteBook/Note.jsx');
var Reviews = require('./NoteBook/Reviews.jsx');

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
      var customStyle = {
        backgroundImage: 'url(' + this.state.currentBook.image + ')'
      };
      return(

        <section className="Notebook" id="page-flip">
          <div id="page-area">
            <BookPage currentBook={this.state.currentBook} changeCurrentBook={this.changeCurrentBook}/>

          </div>


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
