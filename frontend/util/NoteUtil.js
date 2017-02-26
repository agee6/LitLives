var ApiActions = require('../actions/api_actions');

var NoteUtil = {
  createNote: function(noteHash){
    $.post('/api/notes', {note: noteHash}, function(payload){
      ApiActions.addNote(payload);
    });
  },
  fetchNotes: function(bookId){
    $.get('api/notes', {book_id: bookId}, function(notes){
      ApiActions.receiveNotes(notes);
    });
  },
  deleteNote: function(noteId){
      var uri = '/api/notes/' + noteId;
    $.ajax({
      url: uri,
      type: 'DELETE',
      success: function(notes) {
          ApiActions.receiveNotes(notes);
    }});
  }
};

module.exports = NoteUtil;
