var React = require('react');
var History = require('react-router').History;
var APIUtil = require('../util/APIUtil.js');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var BookSearchStore = require('../stores/BookSearchStore.js');
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
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#e4cdb4',
    borderRadius          : '5px'
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
    if(this.state.loggedIn){
      this.history.push({pathname: "/Desk"});

    }else{
      this.setState({modalIsOpen: true})
    }
  },
  openModal: function() {
    this.setState({modalIsOpen: true, chosen: BookSearchStore.currentBook()});
  },

  closeModal: function() {

    this.setState({modalIsOpen: false});
  },
  signOutClick: function(event){

    APIUtil.logoutUser();

      ApiActions.emptyShelves();
      ApiActions.deleteCurrentBook();


    this.history.push({pathname: "/Search"});
  },
  signClick: function(event){
    event.preventDefault();
    this.clicked = true;

    if(this.state.password !== null && this.state.password.length >= 6){
      APIUtil.signIn(this.state.username, this.state.password);
    }
    else{
      this.state.password = "";
      this.setState({message: "invalid password, must be at least 6 digits please try again"});
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
  signUpClick: function(event){
    event.preventDefault();
    console.log("SignedUp!");
    this.clicked = true;
    if(this.state.username !== "" && this.state.password !== ""){
      APIUtil.createUser(this.state.username, this.state.password)
    }
    else {
      this.setState({message: "invalid password please try again"});
    }
    debugger;

  },
  logInAsGuest:function(event){
    event.preventDefault();
    console.log("I'm a guest");
    this.clicked = true;
    APIUtil.signIn("guest_user", "password");
  },
  render: function() {
    var signB;
    var un;
    var cb;

    if(this.state.loggedIn){
      signB = <li className="nav-right" id="NavUser" onClick={this.signOutClick}>Sign Out</li>;
      un = UserStore.currentUser().username;
      if(BookSearchStore.currentBook() !== null){
        // cb = <div className="userNameLabel" id="bookTitle"> is currently exploring {BookSearchStore.currentBook().title}</div>;
        cb= {backgroundImage: "url(" +BookSearchStore.currentBook().image + ")"};
      }else {
        cb = null;
      }

    }
    else{
      signB = <li className="nav-right" id="NavUser" onClick={this.openModal}>Sign in/up!</li>
    }

    return (
      <div className="Navbar">
        <nav className="header-nav group" >

           <div className="header-logo" onClick={this.searchClick}>
             <i className="fa fa-book fa-3x"></i>
             <div className="userNameLabel" >{un}</div>

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

           <h1> Login or Enter as guest to continue exploring!</h1>
           <p> {this.state.message}</p>

            <form className="NoteForm">
              <div className="UserNameArea">
                <label className="UserNameLabel">Username:</label>
                <input type="text" className="UserNameInput" valueLink={this.linkState('username')} placholder="enter a valid username"/>

              </div>
              <div className="PasswordArea">
                <label className="PasswordInputLabel">Password:</label>
                <input type="password" className="PasswordInput" password="enter a password, at least 6 digits long" valueLink={this.linkState('password')} />

              </div>
              <br />

                  <button id="SignButton" onClick={this.signClick}>Sign In!</button>
                  <button id="SignButton" onClick={this.signUpClick}>Sign Up!</button>
                  <button id="SignButton" onClick={this.logInAsGuest}>Guest Sign In</button>
              </form>


            <button onClick={this.closeModal}>close</button>

          </Modal>
      </div>
    );
  }

});

module.exports = Navbar;
