var React = require('react');

var LinkedStateMixin = require('react-addons-linked-state-mixin');
var RadioGroup = require('react-radio-group');

var Modal = require('react-modal');
var NoteItem = require('./NoteItem.jsx');
var Editor = require('./Editor.jsx');

var APIUtil = require('../../util/APIUtil.js');
var NoteStore = require('../../stores/NoteStore.js');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var UserStore = require('../../stores/UserStore.js');

var Note = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return({noteText:"", title: "", pageNumber:null, selectedValue: true, allNotes: NoteStore.all(), chapter: null, modalIsOpen:false, loggedIn: UserStore.loggedIn(), currentBook: BookSearchStore.currentBook()})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onUserChange);
    this.noteIndex = NoteStore.addListener(this._onNotesChange);
    this.bookIndex = BookSearchStore.addListener(this._onBookChange);
    if(this.state.loggedIn && this.state.currentBook && this.state.currentBook.id !== undefined){
      APIUtil.fetchNotes(this.state.currentBook.id);
    }
  },
  componentWillUnmount: function(){
    this.noteIndex.remove();
    this.userIndex.remove();
    this.bookIndex.remove();
  },
  saveNote:function(event){
    event.preventDefault();
    var pn = parseInt(this.state.pageNumber);
    var chap = parseInt(this.state.chapter);
    if(isNaN(pn)){
      pn = null;
    }
    if(isNaN(chap)){
      chap = null;
    }
    var noteHash = { body: this.state.noteText, page: pn, public: true,chapter: chap, book_id: this.props.currentBook.id};
    APIUtil.createNote(noteHash);
    this.state.noteText = "";
    this.state.title = "";
    this.state.pageNumber = null;
    this.state.chapter= null;
    this.closeModal();
  },
  submitNote: function(noteText){
    var noteHash = { body: noteText, page: null, public: true,chapter: null, book_id: this.state.currentBook.id};
    APIUtil.createNote(noteHash);
    this.state.noteText = "";
    this.state.title = "";
    this.state.pageNumber = null;
    this.state.chapter= null;
  },
  addNote: function(noteText){
    debugger;
    var noteHash = { body: noteText, page: pn, public: true,chapter: chap, book_id: this.state.currentBook.id};
    this.state.noteText = "";
    this.state.title = "";
    this.state.pageNumber = null;
    this.state.chapter= null;
  },
  handleChange: function(value){
    this.setState({selectedValue: value});
  },
  _onNotesChange: function(){
    console.log("what???");
    this.setState({allNotes: NoteStore.all()})
  },
  _onUserChange: function(){
    if(UserStore.loggedIn() && this.state.currentBook && this.state.currentBook.id){
      APIUtil.fetchNotes(this.state.currentBook.id);
    }
    this.setState({loggedIn: UserStore.loggedIn()});
  },
  _onBookChange: function(){
    APIUtil.fetchNotes(BookSearchStore.currentBook().id);
    this.setState({currentBook: BookSearchStore.currentBook()});
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  addNoteState: function(content){
    debugger;
  },
  passUpState: function(contentState){
    this.currentNoteContent = contentState;
    debugger;
  },
  render: function() {
    if(this.state.loggedIn && this.state.currentBook && this.state.currentBook.id){
      var noteDisplay = this.state.allNotes.map(function(note){
        return(<NoteItem note={note} key={note.body} />);
      });
      if (this.state.allNotes.length === 0){
        noteDisplay = (<div className="individual-note-area">No Notes to display</div> )
      }

      return (
        <div className="NoteArea">
              <div className="inner-note">
                <div className="notes">
                  {noteDisplay}
                </div>
                <Editor submitNote={this.submitNote} passUpState={this.passUpState}/>
              </div>
        </div>
      );
    }else if(!this.state.loggedIn){
      return(
        <div className="NoteArea">
          <h2>Sign Up/Login to be able to add books to your shelf and write notes about them. </h2>
        </div>
      )
    }else{
      return(
        <div className="NoteArea">
          <h2>You can only add/edit notes that are on your shelf.</h2>
        </div>
      )
    }
  }

});

module.exports = Note;
