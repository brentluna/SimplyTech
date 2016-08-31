# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email: 'user@demo.com', password: 'password')


Feed.create(title: 'Gizmodo', url: 'http://feeds.gawker.com/gizmodo/full', description: 'General tech blog with a focus on gadgets', logo: 'http://agent31.net/wp-content/uploads/2011/02/gizmodo.png');
