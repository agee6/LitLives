# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
# Author.create({pen_name: "J.R.R. Tolkien", legal_name: "John Ronald Reuel Tolkien",
#             last_name:"Tolkien", country: "England", language: "English"})
# Author.create({pen_name: "C.S. Lewis", legal_name: "Clive Staples Lewis",last_name:"Lewis", country: "England", language: "English"})
# Author.create({pen_name: "Homer", last_name: "Homer", country: "Greece", language: "Ancient Greek"})
#
# Book.create({title:"The Odyssey", author: "Homer", year: 600, length: 26, user_id: 1, ISBN13: "9780140268867"})
#
# Book.create({title: "The Return of the King", author: "J.R.R. Tolkien", year: 1955, publishing: "George Allen & Unwin", user_id: 1, ISBN13: "9780547928197"})
# Book.create({title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, publishing: "George Allen & Unwin", user_id: 1, ISBN13: "9780547928227"})
#
# Book.create({title: "The Screwtape Letters", author: "C.S. Lewis", year: 1942, publishing: "Geoffrey Bles", user_id: 1, ISBN13:"9780060652937"})
#
# Genre.create({name: "Fantasy", description: "Usually associated with fantastic events and midevial times"})
# Genre.create({name: "Science Fiction", description: "Fetishizes the future as Fantasy does the past. Equally unrealistic"})
# create_table "books", force: :cascade do |t|
#   t.string   "title",       null: false
#   t.string   "publishing"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
#   t.integer  "user_id",     null: false
#   t.string   "genre"
#   t.integer  "year"
#   t.string   "read"
#   t.string   "ISBN13"
#   t.string   "ISBN10"
#   t.string   "author"
#   t.string   "image"
#   t.integer  "pages"
#   t.string   "language"
#   t.integer  "chapters"
#   t.text     "description"
# end

User.create({username: "guest_user", password: "password"});

Book.create({title:"Slaughterhouse-Five", description: "Billy's book about the battle of Dresden, and his account of being on an Alien Vessel.",
  user_id: 1, read: "read", image: "http://7summitsproject.com/wp-content/uploads/2015/06/Slaughterhouse-Five.jpg", language: "english" ISBN10: "9782040280772"})

Analysis.create({title: "Our Children's Crusade", body: "The alternate title for the book is A Children’s Crusade: A Duty-Dance with Death. At The beginning of the book the author claims to be writing a book about the battle of Dresden, a lesser known allied air-strike where more people died than at Hiroshima. A wife of one of the author’s friends is angry he is writing a war book because war books always glorify war. She says they were just children fighting in the war. He agrees to call it A Children’s Crusade. In many ways, modern wars are no different from the children’s crusades of the middle ages.

In war we send out 18 or 19 year old men, but in many ways they are children, they do not know what they are doing. This sets the tone for the rest of the book which I find to be symbolic of war, even though the actual war is talked about very little.

Most the book is nonsensical. The story is told in a completely non-linear fashion. The first part which talks about the author, but the rest is about an optometrist named Billy Pilgrim. Billy claims to have been abducted by aliens that see in the fourth dimension. They teach him the “true nature” of time. They can all go to any moment at any time. They can look at moments in time like we look at the rocky mountains. This leads to the convoluted story telling. Billy believes this and can somehow jump from moment to moment. He tells about part of his story during the war when he is in Dresden, then he is back in the states before the war, then back in the war, then at another point in the war, then getting married after the war, then when he is old, then when he is in school, and so on. By the end the reader is able to piece together his whole life, but it is like putting a puzzle together.

This is in many ways like war. It doesn’t make sense. After we see destroyed buildings and bits of pieces of information from different survivors and with that a story is pieced together which eventually becomes the narrative thousands of school children will recite on tests. Yet it is not the story of the war. We learn a broad story of events that logically follow one another and culminate in victory for the good guys. The history of America’s wars in most history books read more like a Victorian novel or an epic Greek poem. For the actual soldiers, it doesn’t make sense. There are bombs, explosions, going here and there and they don’t even knowing why. There is a reason tons come back with PTSD and other ailments: they just went through hell, and the worst part about it is that it is senseless hell. This is the reason the bombing of Dresden is not well known, because it does not fit the narrative. The good-guys don’t just bomb a completely unprotected city for no reason and kill thousands of civilians for no apparent reason. So what do we do, we skip over that. We get Hitler Bad, Hitler attack, Winston Churchill good, Churchill save day, American fighting men save the day, allies win, world saved! Yet this is not the story of war: this is the fantasy of those that don’t want to understand.

In this story Billy talks about visiting space aliens and going through time warps and all this stuff. It is all kind of crazy, but nothing compared to the craziness of sending bombs down on innocent people, but so it goes.

The aliens Billy meets are also very deterministic. There is no ability to change the course of events. Each moment happens because that is just how it is constructed. Billy knows when he is going to die, but he does nothing because that is just how it is. Throughout the book whenever someone dies (which is almost every other paragraph) it is followed by the sentence: So it goes. As if that is just how it is. Of course, to the man in the army this is how life feels, this is how war feels. You cannot choose where you go, or when you leave, or even when you go to the bathroom. It is all controlled by some external and seemingly arbitrary force. Life is completely controlled. You are a mere pawn in some scheme that you are completely incapable of fathoming.

And that is slaughterhouse five. It is not a story about a crazy optometrist who gets abducted by aliens. It is about some children, 18 and 19 year old children, sent on a crusade they didn’t understand. It is about the crazy stories these children have to create to make sense of their lives. Billy Pilgrim is not insane for seeing aliens; the world around him is insane as it makes escape to aliens a better alternative than reality.


The book is definitely worth a read, so read it, or don't. This is the anarchist Review: reading without rulers.", subtitle: "an anarchist review of Slaughterhouse-Five", book_id: 1, user_id: 1, public: true, image_url: "http://4.bp.blogspot.com/-xS2qgf3ayds/VncSKt60OKI/AAAAAAAACDc/tByg6WAqXs4/s1600/YoungMenWars.jpg"})
