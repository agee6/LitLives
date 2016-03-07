# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160307044814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string   "pen_name",   null: false
    t.string   "legal_name"
    t.string   "last_name"
    t.date     "birth_date"
    t.date     "death_date"
    t.string   "country"
    t.string   "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "authors", ["pen_name"], name: "index_authors_on_pen_name", using: :btree

  create_table "books", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "publishing"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id",     null: false
    t.string   "genre"
    t.integer  "year"
    t.string   "read"
    t.string   "ISBN13"
    t.string   "ISBN10"
    t.string   "author"
    t.string   "image"
    t.integer  "pages"
    t.string   "language"
    t.integer  "chapters"
    t.text     "description"
  end

  create_table "bookshelves", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookshelves", ["user_id"], name: "index_bookshelves_on_user_id", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "genres", ["name"], name: "index_genres_on_name", using: :btree

  create_table "notes", force: :cascade do |t|
    t.text     "body",       null: false
    t.string   "title"
    t.integer  "page"
    t.integer  "chapter"
    t.integer  "user_id",    null: false
    t.integer  "book_id",    null: false
    t.boolean  "public",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "notes", ["book_id"], name: "index_notes_on_book_id", using: :btree
  add_index "notes", ["public"], name: "index_notes_on_public", using: :btree
  add_index "notes", ["user_id"], name: "index_notes_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "current_book"
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
