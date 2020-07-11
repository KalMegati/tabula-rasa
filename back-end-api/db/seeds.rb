# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Element.delete_all
Character.delete_all
User.delete_all

#Users

kal = User.create(handle: "Kal", password: "Kal", style: "slate")
shweta = User.create(handle: "Shweta", password: "Shweta")

#Characters

azad = Character.create(name: "Azad", user: kal)
ruby = Character.create(name: "Ruby", user: kal)

caelin = Character.create(name: "Caelin", user: shweta)
vanya = Character.create(name: "Vanya", user: shweta)

#Elements

thief = Element.create(
    icon1: "", icon2: "1", icon3: "",
    label1: "", label2: "Racket: Thief", label3: "",
    text1: "When a fight breaks out, you prefer swift, lightweight weapons, and you strike where it hurts. When you attack with a finesse melee weapon, you can add your Dexterity modifier to damage rolls instead of your Strength modifier.",
    text2: "You are trained in Thievery.", text3:"",
    active: "003400780", character: azad
)

dodge = Element.create(
    icon1: "", icon2: "1", icon3: "",
    label1: "REACTION", label2: "Nimble Dodge", label3: "Requirements: You are not encumbered",
    text1: "Trigger: A creature targets you with an attack and you can see the attacker.",
    text2: "You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack.",
    text3: "", active: "023406780", character: azad
)