# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.delete_all
User.delete_all

kal = User.create(handle: "Kal", password: "Kal")
shweta = User.create(handle: "Shweta", password: "Shweta")

azad = Character.create(name: "Azad", user: kal)
ruby = Character.create(name: "Ruby", user: kal)

caelin = Character.create(name: "Caelin", user: shweta)
vanya = Character.create(name: "Vanya", user: shweta)