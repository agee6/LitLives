var React = require('react');
var APIUtil = require('../util/APIUtil.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
var BookConfirmation = require('./BookConfirmation.jsx');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var BookSearchBar = React.createClass({
  getInitialState: function(){
    return{value: "", searchResults: [], chosen: false, modalIsOpen: false}
  },
  handleChange: function(event){

    this.setState({value: event.target.value});

    if (this.state.value.length > 0 ){
      APIUtil.fetchBookResults(this.state.value);
    }

  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  componentDidMount: function(){
    BookSearchStore.addListener(this._onChange);
  },
  _onChange: function(){
    if (this.state.value.length > 0){
    this.setState({searchResults: BookSearchStore.all()});
    }
    else{
      this.setState({searchResults: []});
    }
  },
  clickOption: function(event){
    this.click(event);
  },
  click: function(event){
    event.preventDefault();
    var theChosen = this.state.searchResults[0].volumeInfo.title;
    this.openModal();
    this.setState({chosen: this.state.searchResults[0]});

  },
  render: function(){
    var that = this;
    var guesses = this.state.searchResults.map(function(result, index){
      return( <li key={index} onClick={that.clickOption} className="searchGuess">{result.volumeInfo.title }</li>);
    })
    if (this.state.chosen){

      var bookConfirmation = <BookConfirmation selection={this.state.chosen}/>;

    }else {
      var bookConfirmation = <div></div>;
    }

    return (
      <div>
        <label id="BookSearch" >Enter the book title:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      <button onClick={this.click}>Find my book!</button>
      <ul className="searchGuesses">
        {guesses}
      </ul>
      <Modal
         isOpen={this.state.modalIsOpen}
         onRequestClose={this.closeModal}
         style={customStyles} >

         <h2>Hello</h2>
         <button onClick={this.closeModal}>close</button>
         <div>I am a modal</div>
         <form>
           <input />
           <button>tab navigation</button>
           <button>stays</button>
           <button>inside</button>
           <button>the modal</button>
         </form>
       </Modal>
        

      </div>
    );
  }

})
module.exports = BookSearchBar;
