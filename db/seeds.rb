# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
Author.create({pen_name: "J.R.R. Tolkien", legal_name: "John Ronald Reuel Tolkien",
             last_name:"Tolkien", country: "England", language: "English",
             bio: "Born in South Africa, Tolkien was orphaned at a young age, and raised in England. He was raised largely by a Catholic Priest which would inform his religious beliefs throughout his life.
             When he was a teenage he fell in love with a girl, but the priest who raised him forbid he form a relationship. He lost contact and was soon at war. His experience during the war
             would inform many of his future books. Upon returning, no longer under the watch of his guardian he sought out the women he had fallen in love with in his teens. He found her engaged
             within the week he had convinced her to call of her engagement and to marry him. He lived happily has a profesor of English, had two children and wrote two of the most successful books of all times
             The epic masterpiece The Lord of the Rings and the children's novel The Hobbit. He was good friends with fellow Brit, C.S. Lewis"})
Author.create({pen_name: "C.S. Lewis", legal_name: "Clive Staples Lewis",last_name:"Lewis", country: "England", language: "English",
  bio: "This englishman was heavily influenced by his time in boarding school, as many of his fellow Brits.
  Lewis, like his friend Tolkien, was off to war during WWI which influenced his later writing. Lewis was an atheist while in university
  and later became a Christian. Christianity would later become the main focus of his writing. He was a scholer of late midevial literature and was successful in his own right as a scholer, but also wrote
  popular Christian apologetics such as The Great Divorce, The Screwtape Letters and Mere Christianity. Next to his Christian writings he is likely most famous for his children's fantasy series The Chronicles of Narnia and his three science fiction novels."})
Author.create({pen_name: "Homer", last_name: "Homer", country: "Greece", language: "Ancient Greek", bio:"ancient greek writer who we are not entirely sure if he/she was a man a women or a single person. He/she is attributed with writing/orating The Iliad and The Odyssy"})
#
Book.create({title:"The Odyssey", author: "Homer", year: 600, user_id: 3, ISBN13: "9780140268867", description: "Join odyssyus on the the great journey to find his homeland.", read: "read"})
#
#Book.create({title: "The Return of the King", author: "J.R.R. Tolkien", year: 1955, publishing: "George Allen & Unwin", user_id: 1, ISBN13: "9780547928197"})
# Book.create({title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, publishing: "George Allen & Unwin", user_id: 1, ISBN13: "9780547928227"})
#
# Book.create({title: "The Screwtape Letters", author: "C.S. Lewis", year: 1942, publishing: "Geoffrey Bles", user_id: 1, ISBN13:"9780060652937"})
#
# Genre.create({name: "Fantasy", description: "Usually associated with fantastic events and midevial times"})
# Genre.create({name: "Science Fiction", description: "Fetishizes the future as Fantasy does the past. Equally unrealistic"})

User.create(username: 'aaron', password: 'password');
User.create([{username: "bob", password: 'password', username: "austen", password: 'password'}])
Bookshelf.create(user_id: 1, name: "read")
Bookshelf.create(user_id: 1, name: "currently reading")
Bookshelf.create(user_id: 1, name: "to read")

# Bookshelf.create(user_id: 2, title: "read");


User.create({username: "guest_user", password: "password"});




# Copy.create([{bookshelf_id: 1, book_id:2}{bookshelf_id: 2, book_id: 1}, {bookshelf_id: 1, book_id: 4}])

# notes = [
#   "I liked this book. It was interesting.",
#   "I hated this book. It was awful.",
#   "I have no feelings one way or another",
#   "Meh",
#   "First!!11",
#   "Hi mom!"
# ]
# Copy.all.each do |book|
#   5.times do
#     Note.create.create(user_id: rand(1..3), book_id: book.id, body: notes[rand(0..5)])
#   end
# end

isbns = ["9781612130293", "9780399155345", "9780156012195", "9780618260300", "9780743273565", "9780679783268", "9780452284241" ]
titles = ["worth a read", "a disaster", "hated it", "Best book ever!!!", "I want to cry", "This", "Yes", "No", "Just no"]
Review.create([
  {title: "worth a read", rating: 10, ISBN13:"9780618260300", body: "A beautiful masterpiece and look into the world of the hobbits", user_id: 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1},
  {title: titles.sample, rating: rand(11), ISBN13: isbns.sample, body: "trust me.", user_id: rand(3) + 1}
  ])





# Book.create({title:"Slaughterhouse-Five", description: "Billy's book about the battle of Dresden, and his account of being on an Alien Vessel.",
#   user_id: 1, read: "read", image: "http://7summitsproject.com/wp-content/uploads/2015/06/Slaughterhouse-Five.jpg", language: "english", ISBN10: "9782040280772"})

Analysis.create({title: "Our Children's Crusade", body: "The alternate title for the book is A Children’s Crusade: A Duty-Dance with Death. At The beginning of the book the author claims to be writing a book about the battle of Dresden, a lesser known allied air-strike where more people died than at Hiroshima. A wife of one of the author’s friends is angry he is writing a war book because war books always glorify war. She says they were just children fighting in the war. He agrees to call it A Children’s Crusade. In many ways, modern wars are no different from the children’s crusades of the middle ages.

In war we send out 18 or 19 year old men, but in many ways they are children, they do not know what they are doing. This sets the tone for the rest of the book which I find to be symbolic of war, even though the actual war is talked about very little.

Most the book is nonsensical. The story is told in a completely non-linear fashion. The first part which talks about the author, but the rest is about an optometrist named Billy Pilgrim. Billy claims to have been abducted by aliens that see in the fourth dimension. They teach him the “true nature” of time. They can all go to any moment at any time. They can look at moments in time like we look at the rocky mountains. This leads to the convoluted story telling. Billy believes this and can somehow jump from moment to moment. He tells about part of his story during the war when he is in Dresden, then he is back in the states before the war, then back in the war, then at another point in the war, then getting married after the war, then when he is old, then when he is in school, and so on. By the end the reader is able to piece together his whole life, but it is like putting a puzzle together.

This is in many ways like war. It doesn’t make sense. After we see destroyed buildings and bits of pieces of information from different survivors and with that a story is pieced together which eventually becomes the narrative thousands of school children will recite on tests. Yet it is not the story of the war. We learn a broad story of events that logically follow one another and culminate in victory for the good guys. The history of America’s wars in most history books read more like a Victorian novel or an epic Greek poem. For the actual soldiers, it doesn’t make sense. There are bombs, explosions, going here and there and they don’t even knowing why. There is a reason tons come back with PTSD and other ailments: they just went through hell, and the worst part about it is that it is senseless hell. This is the reason the bombing of Dresden is not well known, because it does not fit the narrative. The good-guys don’t just bomb a completely unprotected city for no reason and kill thousands of civilians for no apparent reason. So what do we do, we skip over that. We get Hitler Bad, Hitler attack, Winston Churchill good, Churchill save day, American fighting men save the day, allies win, world saved! Yet this is not the story of war: this is the fantasy of those that don’t want to understand.

In this story Billy talks about visiting space aliens and going through time warps and all this stuff. It is all kind of crazy, but nothing compared to the craziness of sending bombs down on innocent people, but so it goes.

The aliens Billy meets are also very deterministic. There is no ability to change the course of events. Each moment happens because that is just how it is constructed. Billy knows when he is going to die, but he does nothing because that is just how it is. Throughout the book whenever someone dies (which is almost every other paragraph) it is followed by the sentence: So it goes. As if that is just how it is. Of course, to the man in the army this is how life feels, this is how war feels. You cannot choose where you go, or when you leave, or even when you go to the bathroom. It is all controlled by some external and seemingly arbitrary force. Life is completely controlled. You are a mere pawn in some scheme that you are completely incapable of fathoming.

And that is slaughterhouse five. It is not a story about a crazy optometrist who gets abducted by aliens. It is about some children, 18 and 19 year old children, sent on a crusade they didn’t understand. It is about the crazy stories these children have to create to make sense of their lives. Billy Pilgrim is not insane for seeing aliens; the world around him is insane as it makes escape to aliens a better alternative than reality.


The book is definitely worth a read, so read it, or don't. This is the anarchist Review: reading without rulers.", subtitle: "an anarchist review of Slaughterhouse-Five", book_id: 1, user_id: 1, public: true, image_url: "http://4.bp.blogspot.com/-xS2qgf3ayds/VncSKt60OKI/AAAAAAAACDc/tByg6WAqXs4/s1600/YoungMenWars.jpg"})
