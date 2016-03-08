var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var RadioGroup = require('react-radio-group');
var APIUtil = require('../../util/APIUtil.js');
var NoteStore = require('../../stores/NoteStore.js');


var Note = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return({noteText:"", pageNumber:null, selectedValue: true, allNotes: NoteStore.all(), chapter: null})
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

  render: function() {
    var noteDisplay = this.state.allNotes.map(function(note){
      return(<p>{note.body}</p>);
    });

    return (
      <div className="NoteArea">
        <br />
        <h3 className="NoteBookTitle">Note on</h3><h3 className="NoteBookTitle Title"> {this.props.currentBook.title}</h3>
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
        {noteDisplay}
      </div>
    );
  }

});

module.exports = Note;
