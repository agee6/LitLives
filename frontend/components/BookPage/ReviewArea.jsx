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
    backgroundImage   : 'url(\'http://res.cloudinary.com/litlitves/image/upload/v1458170635/crazyVines_gqglg8.png\')',
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
    width                 : '300px',
    backgroundBlendMode   : 'darken'
  }
};

var ReviewArea = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState: function(){
    return({currentBook: BookSearchStore.currentBook(), reviews:ReviewStore.all(), rating: ReviewStore.rating(), modalIsOpen: false, loggedIn: UserStore.loggedIn(), newReview: "", newRating: 0} );
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onChange);
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
  openModal: function(){
    this.setState({modalIsOpen: true});
  },
  closeModal: function(){
    this.setState({modalIsOpen: false});
  },
  submitReview: function(event){
    event.preventDefault();
    var reviewObj = {
      review: this.state.newReview,
      rating: this.state.newRating,
      book_id: this.state.currentBook.id,
      user_id: UserStore.currentUser().id
    };
    ReviewUtil.createReview(reviewObj);
  },
  render: function(){
    var book = this.state.currentBook;
    var rating = "Overall Rating: " + this.state.rating;
    var reviewList = this.state.reviews.map(function(r){
      return(<li>{r.body}</li>);
    });
    var reviewButton;
    if(this.state.loggedIn){
      reviewButton = <button onClick={this.openModal} className="review-open-button">Review this book!</button>;
    }else{
      reviewButton = <div></div>;
    }
    return(
      <section className="review-container">
        <div className="rating">
          <h2>{rating}</h2>
            <StarRatingComponent
                      name="rate2"
                      editing={false}
                      starCount={5}
                      value={3.5}
                      style={{fontSize: "100px"}}
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
          <h1>What did you think?</h1>
            <form className="NoteForm">
              <div className="UserNameArea">
                <input type="text" className="UserNameInput" valueLink={this.linkState('review')} placeholder="enter a valid username"/>
              </div>
              <div className="PasswordArea">

              </div>
              <div className="LoginButtonArea">
                <button className="SignButton" onClick={this.submitReview}>Submit Review!</button>
              </div>
              </form>
         </Modal>
      </section>
    )
  }
})
module.exports = ReviewArea;
