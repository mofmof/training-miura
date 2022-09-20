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

<<<<<<< HEAD
ActiveRecord::Schema[7.0].define(version: 20_220_913_092_216) do
=======
ActiveRecord::Schema[7.0].define(version: 2022_09_12_063855) do
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table 'tasks', force: :cascade do |t|
    t.string 'title', null: false
    t.text 'body'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.bigint 'user_id'
    t.date 'limit_at'
    t.integer 'state', default: 0, null: false
    t.index ['user_id'], name: 'index_tasks_on_user_id'
=======
  create_table "tasks", force: :cascade do |t|
    t.string "title", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.date "limit_on"
    t.index ["user_id"], name: "index_tasks_on_user_id"
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "crypted_password"
    t.string "salt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "tasks", "users"
end
