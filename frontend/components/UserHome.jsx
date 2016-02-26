var React = require('react');
var BookShelf = require('../stores/Bookshelf.js');
var ReviewStore = require('../stores/ReviewStore.js');


var UserHome = React.createClass({
  getInitialState: function(){
    return({books:Bookshelf.all()});
  },
  render: function(){
    return (<section className="user-page">
      <Notebook />
      <BookShelf />

    </section>); 
  }
});
module.exports = UserHome;
