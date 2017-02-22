var ApiActions = require('../actions/api_actions');

var ReviewUtil = {
  createReview: function(reviewObj){
    $.post('/api/reviews', reviewObj, function(payload){
      ApiActions.RecieveAddedReview(payload)
    });
  },
  fetchReviews: function(bookToFetch){
    var data = {Review:{ISBN13: bookToFetch}};
    $.get('api/reviews', data, function(payload){
      ApiActions.receiveBookReviews(payload)
    })
  },
  updateReviews: function(reviewID){
    $.patch('api/reviews/', reviewID, function(payload){
      ApiActions.ReciveAddedReview(payload)
    })
  },
  fetchUserReviewa: function(Review){
    $.get('/api/user/revews', {}, function(reviews){
      ApiActions.RecieveUserReviews(reviews);
    });
  },
  getCurrentBook: function() {
    $.get('/api/user/revews', {}, function(book){
      ApiActions.updateCurrentBook(book);
    });
  },
  updateUser: function(params){
    $.ajax({
      url: '/api/user',
      type: 'PATCH',
      data: params,
      success: function(book) {
          // Do something with the result
    }});
  },
  makeBookObject: function(bookData){
    var chosen = bookData.volumeInfo;
    var newBook = {title: chosen.title,
                description: chosen.description,
                publishing: chosen.publisher,
                pages: chosen.pageCount,
                language: chosen.language,
                read: "toRead",
              };
      if(chosen.imageLinks !== undefined){
        newBook.image = chosen.imageLinks.thumbnail;
      }
      if(chosen.authors !== undefined){
        newBook.author = chosen.authors[0];
      }
      if(chosen.industryIdentifiers !== undefined){
        if(chosen.industryIdentifiers[0] !== undefined){
          newBook.ISBN13 = chosen.industryIdentifiers[0].identifier;
        }
        if(chosen.industryIdentifiers[1] !== undefined){
          newBook.ISBN10 = chosen.industryIdentifiers[1].identifier;
        }
      }
      return newBook;
  },
  getUserBooks: function(){
    $.get('/api/books', {}, function(books){
      ApiActions.receiveUserBooks(books);
    });
  },
  createNote: function(noteHash){
    $.post('/api/notes', {note: noteHash}, function(payload){
      ApiActions.addNote(payload);
    });
  },
  fetchNotes: function(bookId){
    $.get('api/notes', {book_id: bookId}, function(notes){
      ApiActions.receiveNotes(notes);
    });
  },
  deleteNote: function(noteId){
      var uri = '/api/notes/'+noteId;
    $.ajax({
      url: uri,
      type: 'DELETE',
      success: function(notes) {
          // Do something with the result
          ApiActions.receiveNotes(notes);
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
  },
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
          console.log(analysis);
    }});

  },
  updateBook: function(bookId, bookParams){
    var uri = 'api/books/'+ bookId;

    $.ajax({
      url: uri,
      type: 'PATCH',
      data: bookParams,
      success: function(books) {
          ApiActions.receiveUserBooks(books);
    }});
  },
  deleteBook: function(bookId){
    var uri = 'api/books/' + bookId;
    $.ajax({
      url: uri,
      type: 'DELETE',
      success: function(books) {
          ApiActions.receiveUserBooks(books);
    }});
  }
};
module.exports = ReviewUtil;
