var React = require('react');
var InitialBookIndex = require('./InitialBookIndex.jsx');
var SearchArea = require('./SearchArea.jsx');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');
var Modal = require('react-modal');

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var Search = React.createClass({

  getInitialState: function(){
    return({chosen: BookSearchStore.currentBook(), modalIsOpen: false});
  },
  bookChosen: function(){
    this.openModal();
  },
  openModal: function() {
    this.setState({modalIsOpen: true, chosen: BookSearchStore.currentBook()});
  },

  closeModal: function() {
    BookSearchStore.resetCurrentBook(null);
    this.setState({modalIsOpen: false});
  },
  render: function(){

    return(
      <div className="homePage">
        <SearchArea whenChosen={this.bookChosen}/>
        <InitialBookIndex whenChosen={this.bookChosen}/>
          <Modal
             isOpen={this.state.modalIsOpen}
             onRequestClose={this.closeModal}
             style={customStyles} >

            <BookConfirmation book={this.state.chosen} close={this.closeModal}/>
             <button onClick={this.closeModal}>close</button>

           </Modal>
      </div>
    );

  }
});
module.exports = Search;
