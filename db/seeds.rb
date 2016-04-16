# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
(0..10000).each do
  Contact.create(
    name:Faker::Name.name,
    email:Faker::Internet.email,
    phone:Faker::PhoneNumber.cell_phone,
    avatar:Faker::Avatar.image
  )
end
