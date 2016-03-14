var React = require('react');
var History = require('react-router').History;
var APIUtil = require('../util/APIUtil.js');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/UserStore.js');
var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex           : 20
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var Navbar = React.createClass({
  mixins: [History, LinkedStateMixin],
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, modalIsOpen: false, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  searchClick:function(event){

    this.history.push({pathname: "/Search"});
  },
  deskClick:function(event){
    this.history.push({pathname: "/Desk"});
  },
  openModal: function() {
    this.setState({modalIsOpen: true, chosen: BookSearchStore.currentBook()});
  },

  closeModal: function() {

    this.setState({modalIsOpen: false});
  },
  signOutClick: function(event){

    APIUtil.logoutUser();
  },
  signClick: function(event){
    event.preventDefault();
    this.clicked = true;

    if(this.state.password !== null && this.state.password.length >= 6){
      APIUtil.signIn(this.state.username, this.state.password);
    }
    else{
      this.state.password = "";
      this.setState({message: "invalid password please try again"});
    }





  },
  _onChange: function(){

    if(UserStore.loggedIn()){
      this.closeModal();
      this.setState({loggedIn: UserStore.loggedIn()})

    }else{
      if(this.clicked){
        this.setState({message:"unsuccessful, please try again", loggedIn: UserStore.loggedIn()});
      }else {
        this.setState({loggedIn:UserStore.loggedIn()})
      }
    }
  },

  render: function() {
    var signB;
    var un;
    var cb;

    if(this.state.loggedIn){
      signB = <li className="nav-right" id="NavUser" onClick={this.signOutClick}>Sign Out</li>;
      un = UserStore.currentUser().username;
    }
    else{
      signB = <li className="nav-right" id="NavUser" onClick={this.openModal}>Sign in/up!</li>
    }

    return (
      <div className="Navbar">
        <nav className="header-nav group">

           <div className="header-logo" onClick={this.searchClick}>
             <i className="fa fa-book fa-3x"></i>
             <div className="userNameLabel">{un}</div>
           </div>

           <ul className="header-list group">
             <li className="nav-right" id="NavSearch" onClick={this.searchClick}>Search</li>
             <li className="nav-right" id="NavDesk" onClick={this.deskClick}>Desk</li>
             {signB}
           </ul>


         </nav>
         <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} >

           <h1> This is my logIn Modal!</h1>
           <p> {this.state.message}</p>

            <form className="NoteForm">

              <label className="UserNameLabel">Username:</label>
              <input type="text" className="UserNameInput" valueLink={this.linkState('username')} placholder="enter a valid username"/>
              <br />
              <label className="PasswordInputLabel">Password:</label>
              <input type="password" className="PasswordInput" password="enter a password, at least 6 digits long" valueLink={this.linkState('password')} />
              <br />

                  <button className="SignButton" onClick={this.signClick}>Save!</button>
            </form>


            <button onClick={this.closeModal}>close</button>

          </Modal>
      </div>
    );
  }

});

module.exports = Navbar;
