# Schema Information

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | text      | not null
author_id   | integer   | not null, foreign key, indexed
yr          | integer   | not null,
publishing  | string    | not null
pages       | integer   | not null
era_id      | integer   | foreign key, indexed

## authors
column name | data type | detail 
------------|-----------|-----------------------
id          | integer   | not null, primary key
pen name    | string    | not null
legal name  | string    | 
last name   | string    | not null, indexed
birth date  | date      | 
death date  | date      |
country     | string    | 
era_id      | integer   | foreign key, indexed

## ratings
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
value       | integer   | not null
user_id     | integer   | not null, indexed, foreign key
book_id     | integer   | not null, indexed, foreign key

## reviews
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
review      | text      | not null
user_id     | integer   | not null, indexed, foreign key
book_id     | integer   | not null, indexed, foreign key

## bookshelf
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed, foreign key
read        | boolean   | not null

## bookshelf_spot
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | integer   | not null, foreign key, indexed 
bookshelf_id| integer   | not null, indexed, foreign key

## characters
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
book_id     | integer   | not null, foreign key, indexed
description | text      | not null
era_id      | integer   | foreign key, indexed

## genres
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
era_id      | integer   | foreign key, indexed

## era
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
start yr    | integer   | not null
end yr      | integer   |
description | text      | not null

## genre_joins
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | integer   | not null, foreign key, indexed 
genre_id    | integer   | not null, foreign key, indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
book_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
