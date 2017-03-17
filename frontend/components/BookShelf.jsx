var React = require('react');
var BookUtil = require('../util/BookUtil.js');
var Dropdown = require('react-dropdown');
var Select = require('react-select');
var ApiActions = require('../actions/api_actions.js');
var History = require("react-router").History;
// components
var BookShelfItem = require("./BookShelfItem.jsx");
//stores
var UserStore = require("../stores/UserStore.js");
var BookShelfStore = require("../stores/BookShelfStore.js")

//util
var ReviewUtil = require('../util/ReviewUtil.js');

var BookShelf = React.createClass({
  mixins:[History],
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), bookshelves: UserStore.bookshelves(), currentShelf: "reading", books: BookShelfStore.all()})
  },
  componentDidMount:function(){
    this.bookshelfIndex = BookShelfStore.addListener(this._onChange);
    this.userIndex = UserStore.addListener(this._onUserChange);
    BookUtil.getUserBooks();
  },
  componentWillUnmount:function(){
    this.bookshelfIndex.remove();
    this.userIndex.remove();
  },
  bookClick:function(event){
    if(event.target.data){
      ApiActions.updateCurrentBook(event.target.data);
      ReviewUtil.fetchReviews(event.target.data.ISBN13);
      this.history.push({pathname: "Book/" + event.target.data.ISBN13});
    }else{

    }
  },
  _onChange:function(){
    this.setState({books:BookShelfStore.all()});
  },
  _onUserChange:function(){
    this.setState({loggedIn:UserStore.loggedIn(), bookshelves:UserStore.bookshelves()});
  },
  _onSelect:function(option){
    this.setState({currentShelf: option});
  },
  render: function(){
    var page;
    var customStyle = {width: "100%"};
    var options = [{value: "reading", label: "Currently Reading"}, {value: "read", label: "Finished Reading"}, {value: "toRead", label: "Want to Read"}];
    var bookList = this.state.books[this.state.currentShelf].map(function(b){
      return <BookShelfItem book={b} />;
    })
    if(this.state.loggedIn){
      page = <div className="bookshelf">
                <div className="bookshelf-title">
                  <div>{UserStore.currentUser().username + "'s bookshelf"}</div>
                </div>
                <Select
                      name="form-field-name"
                      value={this.state.currentShelf}
                      options={options}
                      onChange={this._onSelect}
                      style={customStyle}
                      clearable={false}
                  />
                <ul className="bookshelf-list">{bookList}</ul>
            </div>;
    }else{
      page = <h2>Login to see your bookshelf</h2>;
    }
    return(
      <div className="container">
        {page}
      </div>
    )
  }
})
module.exports = BookShelf;
