var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/Search.jsx');
var Desk = require('./components/Desk.jsx');
var APIUtil = require('./util/APIUtil.js');

var App = React.createClass({
  componentDidMount: function(){
    APIUtil.getUserBooks();
    
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
    <Desk path="/Desk" component={Desk} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('reactContent'));
});
