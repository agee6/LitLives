var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var RadioGroup = require('react-radio-group');
var APIUtil = require('../../util/APIUtil.js');
var NoteStore = require('../../stores/NoteStore.js');
var NoteItem = require('./NoteItem.jsx');
var Modal = require('react-modal');

var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 20,
    backgroundImage   : 'url(\'http://res.cloudinary.com/litlitves/image/upload/v1458170635/crazyVines_gqglg8.png\')',
    backgroundSize    : 'cover'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var Note = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return({noteText:"", title: "", pageNumber:null, selectedValue: true, allNotes: NoteStore.all(), chapter: null, modalIsOpen:false})
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
    this.closeModal();


  },
  handleChange: function(value){
    this.setState({selectedValue: value});
  },
  componentDidMount: function(){
    this.sI = NoteStore.addListener(this._onChange);
    APIUtil.fetchNotes(this.props.currentBook.id);
  },
  componentWillUnmount: function(){
    this.sI.remove();
  },
  _onChange: function(){
    this.setState({allNotes: NoteStore.all()})
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var noteDisplay = this.state.allNotes.map(function(note){
      return(<NoteItem note={note} key={note.body} />);
    });
    if (this.state.allNotes.length === 0){
      noteDisplay = (<div className="individual-note-area">No Notes to display</div> )
    }
    var banana = this.props.currentBook.title;
    var NoteStyle = {
      backgroundImage: 'url(\'' + this.props.currentBook.image + '\')',
      backgroundSize: 'cover'
    }

    return (
      <div className="NoteArea">
        <div className="dispay-notes" style={NoteStyle}>
          <div className="note-header">
            <div className="NoteBookTitle" id="statement">Notes on </div><div className="NoteBookTitle" id="book-title-note"> {banana}</div>


          </div>
          <div className="note-area" >
            <div className="inner-note">
              {noteDisplay}
              <button className="AddNoteButton" onClick={this.openModal}>Add Note</button>

            </div>

          </div>
        </div>


        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles} >

           <form className="NoteForm">

             <textarea className="NoteInput" rows="30" cols="100" name="comment"
               placeholder="Enter note here..." valueLink={this.linkState('noteText')}/>
             <br />
             <label className="PageInputLabel">associated page (optional):</label>
             <input className="PageInputs" valueLink={this.linkState('pageNumber')}/>
             <br />
             <label className="ChapterInputLabel">associated chapter (optional):</label>
             <input className="ChapterInputs" valueLink={this.linkState('chapter')} />
             <br />

                 <button className="NoteSubmitButton" onClick={this.saveNote}>Save</button>
               </form>

           <button onClick={this.closeModal}>close</button>

         </Modal>
      </div>
    );
  }

});

module.exports = Note;
