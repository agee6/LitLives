var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>nada</h1></header>
        {this.props.children}
      </div>
    );
  }
});
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    
  </Route>
);
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('reactContent'));
