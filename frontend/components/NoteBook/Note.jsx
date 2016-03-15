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
    zIndex           : 20
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
    return({noteText:"", pageNumber:null, selectedValue: true, allNotes: NoteStore.all(), chapter: null, modalIsOpen:false})
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
    var noteHash = {body: this.state.noteText, page: pn, public: this.state.selectedValue,chapter: chap, book_id: this.props.currentBook.id};
    APIUtil.createNote(noteHash);
    this.closeModal()

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
      return(<NoteItem note={note} />);
    });
    var banana = this.props.currentBook.title;


    return (
      <div className="NoteArea">
        <button className="AddNoteButton" onClick={this.openModal}>Add Note</button>
        <h3 className="NoteBookTitle">Notes on</h3><h3 className="NoteBookTitle"> {banana}</h3>

        {noteDisplay}

        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles} >

           <form className="NoteForm">
             <textarea className="NoteInput" rows="20" cols="60" name="comment"
               placeholder="Enter note here..." valueLink={this.linkState('noteText')}/>
             <br />
             <label className="PageInputLabel">associated page (optional):</label>
             <input className="PageInputs" valueLink={this.linkState('pageNumber')}/>
             <br />
             <label className="ChapterInputLabel">associated chapter (optional):</label>
             <input className="ChapterInputs" valueLink={this.linkState('chapter')} />
             <br />
             <RadioGroup
               name="fruit"
               selectedValue={this.state.selectedValue}
               onChange={this.handleChange}>
               {Radio => (
                 <div>
                   <label>
                     <Radio value={true} />Public
                     </label>
                     <label>
                       <Radio value={false} />Private
                       </label>

                     </div>
                   )}
                 </RadioGroup>
                 <button className="NoteSubmitButton" onClick={this.saveNote}>Save!</button>
               </form>

           <button onClick={this.closeModal}>close</button>

         </Modal>
      </div>
    );
  }

});

module.exports = Note;
