var React = require('react');
// components
var BookShelf = require("../BookShelf.jsx");

//stores
var UserStore = require("../../stores/UserStore.js");

var User = React.createClass({
  getInitialState: function(){
    return({currentUser: UserStore.currentUser()});
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.userIndex.remove();
  },
  _onChange: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },
  render: function(){
    if(this.state.currentUser){
      return(
        <div className="container">
          <div className="comment-area">
          </div>
          <div className="user-shelf-area">
            <div className="user-name">
              <h1>{UserStore.currentUser().username}</h1>
            </div>
            <div className="bookshelf-area">
              <BookShelf />
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="no-user">
          <h1>Log in or sign up to view your profile</h1>
        </div>
      )
    }
  }
})
module.exports = User;
