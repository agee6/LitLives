# FresherNote

[Heroku link][heroku] 

[heroku]: litlives.com

# LitLives

Lit lives is a website to allow the user to collaborate with the world of literature in a dynamic and interactive way. A user can save the books they have read and want to read, edit the detials of the book, as well as record notes and analysis about various works of literature in order to make new connections and understandings between characters, themes, ideas, and plot. 

## Use

The page defaults to the following search page: 

![splash-page]

To sign in the user just needs to click the "sign in" button in the top left corner. The following modal will show up: 

![sign-in]

The user can sign in with an existing account or create a new account, or if they would like, sign in as a guest simply by pushing the "sign in as guest" button. 

Once logged in the user can save a book to their bookshelf, edit books, add notes, etc.

To log in the user can choose a book which will be added automatically to their "to read" shelf. To select a book the user can use the search bar: 

![search-bar]

or select any of the titles that form the background of the search bar: 

![search-titles]

Once selected the user will be redirected to the "desk" page where they can edit their book, edit, add, and delete books. Here the user can also delete books from the shelf or move them from the "read" to the "to read" shelves. 

If the usere would like to go diretly to the "desk" to view the books they already have on their shelf, they just need click on the "desk" icon at the top of the page. The following page will appear: 

![desk-page]

Here, the user can view the title and some basic information about the book. If the user would like to edit details about the book they can press the "edit book" button and they will be redirected to the following page where they can edit details of the book such as the ISBN, page number, descriptions, and more. 

![edit-book-page]

If the user would like to switch to another book that is already on their shelves they can view books they already have on their shelf by clicking on the bookshelf button: 

![bookshelf-button]

This will open up the book shelf which looks like this:

![bookshelf]

The user can hover over and select the title of their choice and the book area will update accordingly. 

If the user would like to add, delete, or edit notes about the book they should click on the "notes" tab and the book will open to the list of all current notes about the given book. The user can select to add a new note, or delete a current note. The following is what the page to add a note looks like:  

![add-note]

When the user no longer wants to make changes to their current books they can click on the "Search" button at the top of the screen to add another book to the shelf. If the user is done they can sign out by clicking on the "sign out" button at the top of the page. 

## implementation

Lit lives is implemented using a postgres database to store user and book data. Notes, and books are stored in book, user, and note tables. Initial book seed data is taken from the google books api. For this reason a user can have multiple copies of a given book on their shelf, if the user wants to have data from two differeent editions, or they want to record notes from two different times reading through the book they can do this. 

The backend controller is done using ruby on rails with the front end being implemented entirely as a single page app using react and javascript. Jquery is also used to do api requests to the rails back end.

[splash-page]: ./docs/SearchPage.png
[sign-in]: ./docs/Login.png
[search-bar]: ./docs/SearchBar.png 
[search-titles]: ./docs/InitialBooks.png
[desk-page]: ./docs/Desk.png
[edit-book-page]: ./docs/ 
[bookshelf-button]: ./docs/bookshelfbutton.png
[bookshelf]: ./docs/bookshelf.png
[add-note]: ./docs/

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
