# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email: 'user@demo.com', password: 'password')

#
# Feed.create(title: 'Gizmodo', url: 'http://feeds.gawker.com/gizmodo/full', description: 'General tech blog with a focus on gadgets', logo: 'http://agent31.net/wp-content/uploads/2011/02/gizmodo.png');
# Feed.create(title: 'Android Police', url: 'http://www.androidpolice.com/feed/', description: 'Android covereage at it\'s finest', logo: 'https://www.getqardio.com/wp-content/uploads/2015/05/Android-Police-logo.png');

Feed.create!([
{title: "IndieGames", url: "http://www.indiegames.com/blog/atom.xml", description: "The latest independent games news, interviews, and features, from the makers of Gamasutra.", logo: "http://i.cdn.turner.com/adultswim/big/img/2016/04/18/indiegames_logo.jpg"},
{title: "The Verge", url: "http://www.theverge.com/rss/group/features/index.xml", description: "Covering the intersection of technology, science, art, and culture.", logo: "http://www.mcockerill.com/wp-content/uploads/2013/10/the-verge-logo-620x300.png"},
{title: "Wired", url: "http://www.wired.com/feed/", description: "Get in-depth coverage of current and future trends in technology, and how they are shaping business, entertainment, communications, science, politics, and culture.", logo: "http://www.wired.com/wp-content/themes/Phoenix/assets/images/apple-touch-icon.png"},
{title: "TechCrunch", url: "http://feeds.feedburner.com/TechCrunch/", description: "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.", logo: "https://tctechcrunch2011.files.wordpress.com/2014/04/tc-logo.jpg"},
{title: "Digital Trends", url: "http://www.digitaltrends.com/feed/", description: "Digital Trends is your premier source for technology news and unbiased expert product reviews of HDTVs, laptops, smartphones and more.", logo: "http://cdn2.digitaltrends.com/dt-logo-200x200.png"},
{title: "Gizmodo", url: "http://feeds.gawker.com/gizmodo/full", description: "We come from the future.", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Gizmodo_Logo.png"},
{title: "Android Police", url: "http://www.androidpolice.com/feed/", description: "We come from the future.", logo: "https://www.getqardio.com/wp-content/uploads/2015/05/Android-Police-logo.png"}])


Category.create!([
  {title: 'General', image: 'http://kenstonlocal.org/kenston/wp-content/uploads/2014/07/technology1.jpg'},
  {title: 'Android', image: 'http://davy.preuveneers.be/phoneme/public/icon/android.png'}
  ])


FeedCategory.create!([
  {feed_id: Feed.find_by(title: "Gizmodo").id, category_id: Category.find_by(title: "General").id},
  {feed_id: Feed.find_by(title: "Android Police").id, category_id: Category.find_by(title: "Android").id}

  ])


Collection.create!([
  {title: 'Best of Tech', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Mobile', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Work', user_id: User.find_by(email: 'user@demo.com').id}
  ])

CollectionFeed.create!([
  {collection_id: Collection.find_by(title: 'Work').id, feed_id: Feed.find_by(title: 'Gizmodo').id},
  {collection_id: Collection.find_by(title: 'Work').id, feed_id: Feed.find_by(title: 'Digital Trends').id},
  {collection_id: Collection.find_by(title: 'Mobile').id, feed_id: Feed.find_by(title: 'Android Police').id},
  {collection_id: Collection.find_by(title: 'Best of Tech').id, feed_id: Feed.find_by(title: 'Wired').id},
  ])
