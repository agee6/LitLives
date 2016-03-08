var React = require('react');
var PropTypes = React.PropTypes;
var APIUtil = require('../../util/APIUtil.js');


var NoteItem = React.createClass({

  deleteClick:function(){
    APIUtil.deleteNote(this.props.note.id);
  },


  render: function() {
    return (
      <div className="Individual Note">
          <h4 className="NoteTitle">{this.props.note.title}</h4>
          <p className="NoteBody">{this.props.note.body}</p>
          <div className="NoteFooter">From:{this.props.note.chapter} and page:{this.props.note.page}</div>
          <button className="NoteDelete" onClick={this.deleteClick}>Delete Note!</button>
      </div>
    );
  }

});

module.exports = NoteItem;
