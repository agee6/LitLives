# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`
- `GET /user/id`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`


###

## JSON API

### Books

- `GET /api/books`
  - Books index/search
  - accepts `era` query param to list books by tag
  - accepts `tag_name` query if I get thered
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`

### Authors

- `GET /api/authors`
- `POST /api/authors`
- `GET /api/authors/:id`
- `PATCH /api/authors/:id`
- `GET /api/authors/:id/books`
  - index of all books written by an author. 

### Eras

- `GET /api/eras/:id/books`
  - index of books written in era
- `GET /api/eras/:id/authors`
- `GET /api/eras/:id/characthers`
- `GET /api/eras/:id/genre`
  -index of all books with given genre written in given time period


### Genres

- `GET /api/genres`
- `POST /api/genres`
- `GET /api/genres/:id`
- `PATCH /ap/genres/:id`
- `GET /api/genres/:id/books`
- `GET /api/genres/:id/authors`
- `GET /api/genres/:id/characters`

### Users/Bookshelves

- `GET /api/users/:id/bookshelf/:1`
  - index of all books on users "read" bookshelf
- `GET /api/users/:id/bookshelf/:2`
- `POST /api/users/:id/bookshelf/spot`
- `PATCH /api/users/:id/bookshelf/spot`
- `DELETE /api/users/:id/bookshelf/spot`

