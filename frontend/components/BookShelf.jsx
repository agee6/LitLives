var React = require('react');
var BookUtil = require('../util/BookUtil.js');
var Dropdown = require('react-dropdown');
var Select = require('react-select');
var ApiActions = require('../actions/api_actions.js');
var History = require("react-router").History;

// components
//stores
var UserStore = require("../stores/UserStore.js");
var BookShelfStore = require("../stores/BookShelfStore.js")

var BookShelf = React.createClass({
  mixins:[History],
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), bookshelves: UserStore.bookshelves(), currentShelf: "read", books: BookShelfStore.all()})
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
    ApiActions.updateCurrentBook(event.target.data);
    this.history.push({pathname: "Book/" + event.target.data.ISBN13});
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
    var options = [{value: "read", label: "read"}, {value: "toRead", label: "to read"}, {value: "reading", label: "reading"}];
    var bookList = this.state.books[this.state.currentShelf].map(function(b){
      return <li className="bookshelf-item" onClick={this.bookClick} data={b}>{b.title}</li>;
    }, this)
    if(this.state.loggedIn){
      page = <div className="bookshelf">
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
