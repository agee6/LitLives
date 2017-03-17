var ApiActions = require('../actions/api_actions');

var AnalysisUtil = {
  createAnalysis: function(analysisParams){
    $.post('/api/analyses', {analysis:analysisParams}, function(analysis){
      ApiActions.receiveNewAnalysis(analysis);
    });
  },
  fetchAnalyses: function(analysisParams){
    $.get('/api/analyses', {analysis: {}}, function(analyses){
      ApiActions.receiveAnalyses(analyses);
    });
  },
  fetchAnalysis: function(analysisId){
    $.get('api/analyses', {id: analysisId}, function(analysis){
      ApiActions.receiveAnalysis(analysis);
    });
  },
  updateAnalysis: function(analysisParams){
    $.ajax({
      url: '/api/analyses',
      type: 'PATCH',
      data: {analysis: analysisParams},
      success: function(analysis) {
          // Do something with the result
    }});
  }
};

module.exports = AnalysisUtil;
