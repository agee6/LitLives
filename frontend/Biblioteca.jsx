var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Home = require('./components/Home.jsx');
var Desk = require('./components/Desk.jsx');

var App = React.createClass({
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
    <IndexRoute component={Home}/>
    <Desk path="/Desk" component={Desk} />


  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('reactContent'));
});
