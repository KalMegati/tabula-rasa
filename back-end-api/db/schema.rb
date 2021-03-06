# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_01_183834) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "blurb"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "elements", force: :cascade do |t|
    t.string "icon1"
    t.string "icon2"
    t.string "icon3"
    t.string "label1"
    t.string "label2"
    t.string "label3"
    t.text "text1"
    t.text "text2"
    t.text "text3"
    t.string "active"
    t.integer "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_elements_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "handle"
    t.string "password_digest"
    t.string "icon"
    t.string "style", default: "cerulean"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
