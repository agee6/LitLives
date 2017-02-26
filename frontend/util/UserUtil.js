var ApiActions = require('../actions/api_actions');

var UserUtil = {
  logoutUser: function(){
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success: function(payload){
        console.log("deleted");
        ApiActions.receiveUser(payload);
      }
    });
  },
  updateUser: function(params){
    $.ajax({
      url: '/api/user',
      type: 'PATCH',
      data: params,
      success: function(book) {
    }});
  },
  getCurrentUser: function(){
    $.get('/api/session', {}, function(user){
      ApiActions.receiveUser(user);
    });
  },
  signIn: function(username, password) {
    $.post('/api/session', {username: username, password: password}, function(user){
      ApiActions.receiveUser(user);
    });
  },
  createUser: function(username, password){
    $.post('/api/user',{username: username, password: password}, function(user){
      ApiActions.receiveUser(user);
    });
  }
};

module.exports = UserUtil;
