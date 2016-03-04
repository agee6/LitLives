var React = require('react');

var Note = React.createClass({

  render: function() {
    return (
      <div className="NoteArea">
        <form action="demo_form.asp" id="usrform">
          Name: <input type="text" name="usrname" />
          <input type="submit" />
        </form>
      <br />
        <textarea rows="4" cols="50" name="comment" form="usrform">
        Enter text here...</textarea>
      </div>
    );
  }

});

module.exports = Note;
