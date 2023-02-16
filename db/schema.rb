# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_16_165554) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "eateries", force: :cascade do |t|
    t.string "eatery_name"
    t.string "eatery_address"
    t.string "eatery_neighborhood"
    t.string "eatery_category"
    t.string "eatery_type"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
    t.text "eatery_notes"
    t.boolean "have_visited"
    t.string "eatery_img"
    t.index ["user_id"], name: "index_eateries_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "location"
    t.text "bio"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "visits", force: :cascade do |t|
    t.date "date"
    t.string "occasion"
    t.text "notes"
    t.text "drink"
    t.text "appetizer"
    t.text "food"
    t.text "dessert"
    t.text "other_consumables"
    t.string "visit_img"
    t.bigint "user_id", null: false
    t.bigint "eatery_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating"
    t.index ["eatery_id"], name: "index_visits_on_eatery_id"
    t.index ["user_id"], name: "index_visits_on_user_id"
  end

  add_foreign_key "visits", "eateries"
  add_foreign_key "visits", "users"
end
