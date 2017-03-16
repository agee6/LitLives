var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.Histoary;
//util
var UserUtil = require('./util/UserUtil.js');
var BookUtil = require('./util/BookUtil.js');

//root
var root = document.getElementById('reactContent');

//components
var Navbar = require('./components/Navbar/Navbar.jsx');
var Book = require('./components/BookPage/Book.jsx');
var MainPage = require('./components/MainPage.jsx');
var User = require('./components/UserPage/User.jsx');
var Books = require('./components/Books.jsx');
var SearchResults = require('./components/SearchResults/SearchResults.jsx');

//stores
var UserStore = require('./stores/UserStore.js');

//ApiActions
var ApiActions = require('./actions/api_actions');

var App = React.createClass({
  mixins:[History],
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn()});
  },
  componentDidMount: function(){
    UserUtil.getCurrentUser();
    if(this.state.loggedIn){
      BookUtil.getUserBooks();
    }
    UserStore.addListener(this._onChange);
  },
  _onChange: function(){
    if(UserStore.loggedIn()){
      BookUtil.getUserBooks();
    }
    this.setState({loggedIn: UserStore.loggedIn()});
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
    <IndexRoute component={MainPage} />
    <Route path="books" component={Books}>
      <Route path="/Book/:bookId" component={Book}/>
    </Route>
    <Route path="User/:userId" component={User}>
    </Route>
    <Route path="SearchResults" component={SearchResults} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, root)
});


//to add:
// <Route path="/Analyses" >
//   <IndexRoute component={Analyses} />
//   <Route path="/:id" component={AnalysisShow} />
// </Route>
