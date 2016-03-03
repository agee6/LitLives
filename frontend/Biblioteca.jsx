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

var App = React.createClass({
  mixins:[History],
  componentDidMount: function(){
    APIUtil.getUserBooks();
    if (cb !== "false"){
      APIUtil.getCurrentBook();
      this.history.push({pathname: "/Desk"});
    }

  },
  render: function(){
    return (
      <div>

        {this.props.children}
      </div>
    );
  }
});
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="/Desk" component={Desk} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(<Router>{routes}</Router>, root);
});
