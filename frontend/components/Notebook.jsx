var React = require('react');
var BookPage = require('./NoteBook/BookPage.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');
var Tabs = require('./NoteBook/Tabs.jsx');
var Note = require('./NoteBook/Note.jsx');
var Reviews = require('./NoteBook/Reviews.jsx');

var Notebook = React.createClass({
  getInitialState: function(){
    this.tabs = ["Book Page", "Notes"]
    return({currentBook:BookSearchStore.currentBook(), tab: "Book Page"});
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
  changeTab: function(tab){
    this.setState({tab:tab});
  },

  render: function(){
    if(this.state.currentBook){
      var customStyle = {
        backgroundImage: 'url(' + this.state.currentBook.image + ')'
      };
      var currentTab;
      if(this.state.tab === "Book Page"){
        currentTab = <BookPage currentBook={this.state.currentBook} />;
      }else if(this.state.tab === "Notes"){
        currentTab = <Note currentBook={this.state.currentBook} />;
      }

      return(

        <section className="Notebook" id="page-flip">
          <div id="page-area">
            {currentTab}

          </div>
          <Tabs clickFunction={this.changeTab} tabOptions={this.tabs}/>


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
