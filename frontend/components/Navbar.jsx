var React = require('react');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],
  searchClick:function(){
    this.history.push({pathname: "/"});
  },
  deskClick:function(){
    this.history.push({pathname: "/Desk"});
  },
  signOut: function(){

  },

  render: function() {
    return (
      <div className="Navbar">
        <nav className="header-nav group">

           <div className="header-logo">
             <i className="fa fa-book fa-3x"></i>
           </div>

           <ul className="header-list group">
             <li className="nav-right" id="NavSearch" onClick={this.searchClick}>Search</li>
             <li className="nav-right" id="NavDesk" onClick={this.deskClick}>Desk</li>
             <li className="nav-right" id="NavUser" onClick={this.signOut}>Sign Out</li>
           </ul>

         </nav>
      </div>
    );
  }

});

module.exports = Navbar;
