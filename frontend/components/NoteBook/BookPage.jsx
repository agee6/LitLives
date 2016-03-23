var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var RadioGroup = require('react-radio-group');
var APIUtil = require('../../util/APIUtil.js');
var ApiActions = require('../../actions/api_actions.js');

var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex           : 20,
    backgroundImage   : 'url(\'http://res.cloudinary.com/litlitves/image/upload/v1458170635/crazyVines_gqglg8.png\')',
    backgroundSize    : 'cover'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '50%',
    backgroundImage       : 'url(\'https://images.unsplash.com/photo-1457298483369-0a95d2b17fcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f4fd0823787f85fcb27fd05027766a41\')',
    backgroundSize        : 'cover',
    borderRadius          : '10px'
  }
};
// t.string   "title",       null: false
// t.string   "publishing"
// t.datetime "created_at",  null: false
// t.datetime "updated_at",  null: false
// t.integer  "user_id",     null: false
// t.string   "genre"
// t.integer  "year"
// t.string   "read"
// t.string   "ISBN13"
// t.string   "ISBN10"
// t.string   "author"
// t.string   "image"
// t.integer  "pages"
// t.string   "language"
// t.integer  "chapters"
// t.text     "description"


var BookPage = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    var book = this.props.currentBook;
    return({modalIsOpen: false, publisher: book.publishing, genre: book.genre, year: book.year, selectedValue: book.read, ISBN13: book.ISBN13,
              ISBN10: book.ISBN10, author: book.author, image: book.image, pages: book.pages, language: book.language, chapters: book.chapters,
              description: book.description} );
  },

  openModal: function() {

    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },


  onClick: function(event){
    event.preventDefault();
    alert("congrats!");
  },
  markAsRead: function(event){
    event.preventDefault();
    console.log("read");
  },
  editClick: function(event){
    event.preventDefault();

    this.openModal();

  },
  updateBook: function(event){
    event.preventDefault();
    var pages, chapters, year;

    if(this.state.pages !== null && this.state.pages.length > 0){
      pages = parseInt(this.state.pages);
    }
    if( this.state.chapters !== null && this.state.chapters.length > 0) {
      chapters = parseInt(this.state.chapters);
    }
    if(this.state.year !== null && this.state.year.length > 0){
      year = parseInt(this.state.year);
    }
    var oldBook = this.props.currentBook;

    var newBook = {

      publishing: this.state.publisher,
      genre: this.state.genre,
      year: year,
      read: this.state.selectedValue,
      ISBN13: this.state.ISBN13,
      ISBN10: this.state.ISBN10,
      author: this.state.author,
      image: this.state.image,
      language: this.state.language,
      pages: pages,
      chapters: chapters,
      description: this.state.description

    }

    APIUtil.updateBook(this.props.currentBook.id, newBook);
    this.closeModal();
    ApiActions.updateCurrentBook(this.props.book);



  },
  handleChange: function(value){
    this.setState({selectedValue: value});
  },
  render: function(){
    var book = this.props.currentBook;
    // var bookStyle = { backgroundImage: 'url('+ book.image + ')'};
    var pages, language, publisher;

    if(book.pages === null){
      pages = "N/A";
    }else {
      pages = book.pages;
    }
    if(book.language === null){
      language = "N/A";
    }
    else {
      language = book.language;
    }
    if(book.publishing === null){
      publisher = "N/A";
    }else {
      publisher = book.publishing;
    }

    return(
      <section className="BookPage" id="BookPageArea">
        <div className="BookTitleArea">
          <div className="BookTitle">{book.title}</div>
          <div className="Author">by, {book.author}</div>

        </div>
        <div className="BookPage" id="BookDescriptionBox">
          <img src={book.image} id="CoverPhoto"></img>
          <p id="BookDescription">{book.description}</p>
        </div>
        <div className="BookPage" id="BookFooter">
          <div className="BookFooter" id="pages">pages: {pages}</div>
          <div className="BookFooter" id="language">language: {language}</div>
          <div className="BookFooter" id="publisher">publisher: {publisher}</div>

        </div>
        <div className="button-area">
          <button className="book-button-area" id="edit-book-button" onClick={this.editClick}>Edit Book</button>
          <button className="book-button-area" id="mark-as-read" onClick={this.markAsRead}>Mark as Read</button>
        </div>

        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles} >

           <div className="book-edit-title"> {this.props.currentBook.title}</div>
           <form className="book-edit-form">

             <textarea className="book-edit-description" rows="15" cols="60" name="comment"
               placeholder="Enter note here..." valueLink={this.linkState('description')}/>
             <div className="book-edit-sections" id = "book-edit-basic">
               <label className="book-edit label">genre: </label>
               <input className="book-edit book-edit-input" valueLink={this.linkState('genre')}/>
             </div>
             <div className="book-edit-sections">
               <label className="book-edit label">publisher: </label>
               <input className="book-edit book-edit-input" valueLink={this.linkState('publisher')} />

             </div>
             <div className="book-edit-sections">
               <label className="book-edit label">year published: </label>
               <input className="book-edit book-edit-input" valueLink={this.linkState('year')} />

             </div>
             <div className="book-edit-sections">
               <label className="book-edit label">author: </label>
               <input className="book-edit book-edit-input" valueLink={this.linkState('author')} />

             </div>
             <div className="book-edit-sections">
               <label className="book-edit label">language: </label>
               <input className="book-edit book-edit-input" valueLink={this.linkState('language')} />

             </div>
             <div className="book-edit-sections" id="book-edit-image">
               <label className="book-edit label">image url: </label>
               <input className="book-edit book-edit-input" id="book-edit-image" valueLink={this.linkState('image')} />

             </div>

             <div className="book-edit-sections" id="book-edit-isbn">
               <label className="book-edit label">ISBN13: </label>
               <input className="book-edit ISBN13-input" valueLink={this.linkState('ISBN13')} />
               <label className="book-edit label">ISBN10: </label>
               <input className="book-edit ISBN10-input" valueLink={this.linkState('ISBN10')} />


             </div>
             <div className="book-edit-sections" id="book-edit-length">
               <label className="book-edit label"># of pages: </label>
               <input className="book-edit pages-input" valueLink={this.linkState('pages')} />
               <label className="book-edit label">chapters: </label>
               <input className="book-edit publisher-input" valueLink={this.linkState('chapters')} />
             </div>

             <RadioGroup
               name="read"
               selectedValue={this.state.selectedValue}
               onChange={this.handleChange}>
               {Radio => (
                 <div>
                   <label>
                     <Radio value={"read"} />Read
                     </label>
                     <label>
                       <Radio value={"toRead"} />To Read
                     </label>

                     </div>
                   )}
                 </RadioGroup>
                 <button className="book-update-button" onClick={this.updateBook}>Update</button>
               </form>

           <button onClick={this.closeModal}>cancel</button>

         </Modal>

      </section>
    )
  }
})
module.exports = BookPage;
