var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/Search.jsx');
var Desk = require('./components/Desk.jsx');
var APIUtil = require('./util/APIUtil.js');
var root = document.getElementById('reactContent');
var cb = root.getAttribute("data-has-book");
var History = require('react-router').History;
var Navbar = require('./components/Navbar.jsx');
var UserStore = require('./stores/UserStore.js');

var App = React.createClass({
  mixins:[History],
  getInitialState: function(){
    return({currentUser: UserStore.loggedIn()});
  },
  componentDidMount: function(){
    APIUtil.getCurrentUser();
    APIUtil.getUserBooks();
    
    if (cb !== "false"){
      APIUtil.getCurrentBook();
      this.history.push({pathname: "/Desk"});
    }else {
      this.history.push({pathname: "/Search"});
    }

  },
  render: function(){
    return (
      <div>
        <Navbar />

        {this.props.children}
      </div>
    );
  }
});
var routes = (
  <Route path="/" component={App}>
    <Route path="/Search" component={Search}/>
    <Route path="/Desk" component={Desk} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(<Router>{routes}</Router>, root);
});
