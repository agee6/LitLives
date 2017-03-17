var ApiActions = require('../actions/api_actions');

var BookUtil = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+"ISBN:" + query ;
    $.get(uri, {}, function(bookList){
      ApiActions.ReceiveActions(bookList);
    });
  },
  getBookByISBN: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    $.get(uri, {maxResults: 1}, function(book){
      var bookObj = BookUtil.makeBookObject(book.items[0]);
      ApiActions.updateCurrentBook(bookObj);
    });
  },
  getInitialBookIndex: function(){
    var uri = "https://www.googleapis.com/books/v1/volumes?q=best+selling+novels+all+time";
    $.get(uri, {maxResults: 40}, function(bookList){
      var newBookList = bookList.items.map(function(book, index){
        return(BookUtil.makeBookObject(book));
      });
      ApiActions.ReceiveInitial(newBookList);
    });
  },
  addToInitial: function(){
    var uri = "https://www.googleapis.com/books/v1/volumes?q=best+classic+novels";
    $.get(uri, {maxResults: 40}, function(bookList){
      var newBookList = bookList.items.map(function(book, index){
        return(BookUtil.makeBookObject(book));
      });
      ApiActions.AddToInitial(newBookList);
    });
  },
  getUserBook: function(ISBN13, getFromGoogle){
    $.get('api/book', {ISBN13:ISBN13}, function(payload){
      if(payload === false){
        if(getFromGoogle){
          BookUtil.getBookByISBN(ISBN13);
        }
      }else{
        ApiActions.updateCurrentBook(payload);
      }
    })
  },
  createBook: function(bookItem){
    $.post('/api/books', bookItem, function(payload){
      ApiActions.ReceiveAddedBook(payload);
    });
  },
  getCurrentBook: function() {
    $.get('/api/user', {}, function(book){
      ApiActions.updateCurrentBook(book);
    });
  },
  makeBookObject: function(bookData){
    var chosen = bookData.volumeInfo;
    var newBook = {title: chosen.title,
                description: chosen.description,
                publishing: chosen.publisher,
                pages: chosen.pageCount,
                language: chosen.language,
                read: "reading",
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

module.exports = BookUtil;
