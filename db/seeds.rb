# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Author.create({pen_name: "J.R.R. Tolkien", legal_name: "John Ronald Reuel Tolkien",
            last_name:"Tolkien", country: "England", language: "English"})
Author.create({pen_name: "C.S. Lewis", legal_name: "Clive Staples Lewis",last_name:"Lewis", country: "England", language: "English"})
Author.create({pen_name: "Homer", last_name: "Homer", country: "Greece", language: "Ancient Greek"})

Book.create({title:"The Odyssey", author_id: 3, year: 600, length: 26})

Book.create({title: "The Return of the King", author_id: 1, year: 1955, publishing: "George Allen & Unwin" })
Book.create({title: "The Hobbit", author_id: 1, year: 1937, publishing: "George Allen & Unwin"})

Book.create({title: "The Screwtape Letters", author_id: 2, year: 1942, publishing: "Geoffrey Bles"})

Genre.create({name: "Fantasy", description: "Usually associated with fantastic events and midevial times"})
Genre.create({name: "Science Fiction", description: "Fetishizes the future as Fantasy does the past. Equally unrealistic"})
