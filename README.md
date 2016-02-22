# FresherNote

[Heroku link][heroku] **NB:** This link is not yet live. 

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

LitLives is an application for understanding the connections in literature to other pieces of literature and other elements of the real world, as well as for reviewing and finding new books to read.:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Add books to the read books bookshelf
- [ ] Add books to the to read bookshelf
- [ ] Review books
- [ ] Read reviews
- [ ] Rate books
- [ ] See overall ratings for any book
- [ ] Display general background of books
- [ ] Search for books based on author, title, genre, era, and language
- [ ] See connections between books
- [ ] Publish book analysis

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Books Model, API, and basic APIUtil (1.5 days)

**Objective:** User home page can be displayed, as well as books.

- [ ] create `Book` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 days)

**Objective:** Books can be added to shelves

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `Books Index`
  - [ ] `Book Index Item`
  - [ ] `Bookshelves`
  - 
### Phase 4: Flush out basic models and components for vanilla use case (authors, era, reviews, etc.) (1.5 days)
  
**Objective:** Books link to authors and reviews, reviews back to authors and so forth with era and genre. 
  - [ ] `Author Index`
  - [ ] `Author show`
  - [ ] `genre show`
  - [ ] `genre index`
  
### Phase 5: Start Styling (2 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Reviews and analysis and characters (1 day)

**Objective:** Characters belong to books, reviews to books and users and analysis as well. User can add reviews and analyses 

- [ ] create `character` as well as `analyses` model
- build out API, Flux loop, and components for:
  - [ ] characters CRUD
- Use CSS to style new views

###Phase 7 adds organization and relationships(1 day)

**Objective:** oranize all the realtionships between authors, characters, reviews, users, analyses, genre, and era. Insure that all the links and changes between pages works smoothly and can be understood. 


### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] amazing info graphics on each books
- [ ] amazing info graphics combinding books 
- [ ] more models such as country, language, et. 


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
