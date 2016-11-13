var React = require('react');
var PropTypes = React.PropTypes;
var AnalysisStore = require('../../stores/AnalysesStore.js');
var APIUtil = require('../../util/APIUtil.js');
var UserStore = require('../../stores/UserStore.js');


var Analyses = React.createClass({

  getInitialState: function(){
    return({analyses: AnalysisStore.all(), loggedIn: UserStore.loggedIn()});
  },
  componentDidMount: function(){
    APIUtil.fetchAnalyses({});
    this.analysesIndex = AnalysisStore.addListener(this._onChange);
    this.userIndex = UserStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.analysesIndex.remove();
    this.userIndex.remove();
  },
  _onChange: function(){
    this.setState({analyses: AnalysisStore.all(), loggedIn: UserStore.loggedIn()});
  },
  createClick: function(event){
    event.preventDefault();
    console.log("openModal?");

  },
  deskView: function(event){
    event.preventDefault();
    console.log("go to Desk page?");
  },

  render: function() {
    var createButton, userView;
    var analysisList = this.state.analyses.map(function(analysis){
      return(<AnalysisListItem analysis={analysis} key={analysis.id} />);
    }, this);
    if(this.state.loggedIn){
      createButton = <button className="analysis-header" id="create-button" onClick={this.createClick}>Create New</button>
      userView = <button className="analysis-header" id="user-view" onClick={this.deskView}>View Your Reviews</button>
    }else {
      createButton = <div />
      userView = <div />
    }
    return (
      <div className="analysis-index" id="analysis-index-main">
        <div className="analysis-index" id="analysis-body">
          {analysisList}
        </div>
        <div className="analysis-index" id="analysis-header">
          {createButton}
          {userView}
        </div>

      </div>
    );
  }

});

module.exports = Analyses;
