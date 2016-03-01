# Schema Information

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | text      | 
author      | integer   | 
yr          | integer   | 
publishing  | string    | 
pages       | integer   | 
user_id     | string    | not null, indexed, foreign key
genre       | string    |
read        | string    | read, toRead, currentlyReadaing
ISBN13      | string    | integer?
ISBN10      | string    | integer? 
language    | string    |
country     | string    |



## reviews
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
review      | text      | not null
rating      | integer   | not null, 
user_id     | integer   | not null, indexed, foreign key
book_id     | integer   | not null, indexed, foreign key


## characters
column name | data type | detail
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
book_id     | integer   | not null, foreign key, indexed
description | text      | not null

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

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
book_id     | integer   | not null, foreign key
comments    | text      | not null
page        | integer   | 


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
