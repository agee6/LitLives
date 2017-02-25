var React = require('react');
var ReviewUtil = require('../../util/ReviewUtil.js');
var ApiActions = require('../../actions/api_actions.js');
var BookSearchStore = require('../../stores/BookSearchStore.js');
var ReviewStore = require('../../stores/ReviewStore.js')

var ReviewArea = React.createClass({
  getInitialState: function(){
    return({currentBook: BookSearchStore.currentBook(), reviews:ReviewStore.all(), rating: ReviewStore.rating() } );
  },
  componentDidMount: function(){
    this.bookStoreIndex = BookSearchStore.addListener(this._onChange);
    this.reviewStoreIndex = ReviewStore.addListener(this._onChange);
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
  render: function(){
    var book = this.state.currentBook;
    var rating = "Overall Rating: " + this.state.rating;
    var reviewList = this.state.reviews.map(function(r){
      return(<li>{r.body}</li>);
    });
    return(
      <section className="review-container">
        <div className="rating">
          <h2>{rating}</h2>
        </div>
        <ul id="reviews">
          {reviewList}
        </ul>

      </section>
    )
  }
})
module.exports = ReviewArea;
