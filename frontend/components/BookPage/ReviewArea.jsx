var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewUtil = require('../../util/ReviewUtil.js');
var ApiActions = require('../../actions/api_actions.js');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ReviewStore = require('../../stores/ReviewStore.js');
var UserStore = require('../../stores/UserStore.js');
// var StarRating = require('react-star-rating');
var StarRatingComponent = require('react-star-rating-component');

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 20,
    backgroundSize    : 'cover'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundImage       : 'url(\'https://images.unsplash.com/photo-1457298483369-0a95d2b17fcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f4fd0823787f85fcb27fd05027766a41\')',
    backgroundSize        : 'cover',
    borderRadius          : '10px',
    filter                : 'blur(\'4px\')',
    width                 : '50%',
    backgroundBlendMode   : 'darken'
  }
};

var ReviewArea = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState: function(){
    return({currentBook: BookSearchStore.currentBook(), reviews:ReviewStore.all(), rating: ReviewStore.rating(), modalIsOpen: false, loggedIn: UserStore.loggedIn(), newReview: "", newRating: -1, newTitle:""} );
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onBookChange);
    this.reviewStoreIndex = ReviewStore.addListener(this._onChange);
    this.userStoreIndex = UserStore.addListener(this._onUserChange);
    if(this.state.currentBook){
      ReviewUtil.fetchReviews(this.state.currentBook.ISBN13);
    }
  },
  componentWillUnmount:function(){
    this.bookStoreIndex.remove();
    this.reviewStoreIndex.remove();
  },
  _onChange:function(){
    this.setState({currentBook: BookSearchStore.currentBook(), reviews:ReviewStore.all(), rating: ReviewStore.rating()});
  },
  _onUserChange: function(){
    this.setState({loggedIn: UserStore.loggedIn()});
  },
  _onBookChange:function(){
    var book = BookSearchStore.currentBook();
    if(book){
      ReviewUtil.fetchReviews(book.ISBN13);
    }
    this.setState({currentBook:book})
  },
  openModal: function(){
    this.setState({modalIsOpen: true});
  },
  closeModal: function(){
    this.setState({modalIsOpen: false});
  },
  submitReview: function(event){
    event.preventDefault();
    if(this.state.newRating === -1 || this.state.newReview === ""){
      alert("you must set a star rating and write a review to submit!")
    }else{
      var reviewObj = {
        body: this.state.newReview,
        rating: this.state.newRating,
        ISBN13: this.state.currentBook.ISBN13,
        title: this.state.newTitle,
        user_id: UserStore.currentUser().id
      };
      ReviewUtil.createReview(reviewObj);
      this.closeModal();
    }
  },
  onStarClick: function(nextVal){
    this.setState({newRating:nextVal})
  },
  render: function(){
    var book = this.state.currentBook;
    if(this.state.reviews.length > 0){
      var reviewList = this.state.reviews.map(function(r){
        return(<li>{r.body}</li>);
      });
    }else{
      var reviewList = <li>no reviews yet</li>;
    }
    var reviewButton;
    if(this.state.loggedIn){
      reviewButton = <button onClick={this.openModal} className="review-open-button">Review this book!</button>;
    }else{
      reviewButton = <div></div>;
    }
    if(book){
      var placeholder = "Reveiw of " + book.title;
    }else{
      var placeholder = "";
    }
    return(
      <section className="review-container">
        <div className="rating">
          <div>current rating:</div>
            <StarRatingComponent
                name="currentRating"
                editing={false}
                starCount={5}
                value={this.state.rating}
                style={{fontSize: "200px"}}
            />
        </div>
        <ul id="reviews">
          {reviewList}
        </ul>
        {reviewButton}
        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={modalStyle} >
          <h1>{placeholder}</h1>
            <form className="NoteForm">
              <div className="PasswordArea">
                <StarRatingComponent
                  name="rate2"
                  editing={true}
                  starCount={5}
                  value={this.state.newRating}
                  onStarClick={this.onStarClick}
                  style={{fontSize: "200px"}}
                />
              </div>
              <div className="UserNameArea">
                <input type="textarea" rows="5"className="review-input" valueLink={this.linkState('newTitle')} placeholder="title of your review"/>
              </div>
              <textarea rows="5" className='review-input' valueLink={this.linkState('newReview')} placeholder={placeholder}></textarea>
              <button className="SignButton" onClick={this.submitReview}>Submit Review!</button>
            </form>
         </Modal>
      </section>
    )
  }
})
module.exports = ReviewArea;
