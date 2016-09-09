# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email: 'user@demo.com', password: 'password')


Feed.create!([
{title: "IndieGames", url: "http://www.indiegames.com/blog/atom.xml", description: "The latest independent games news, interviews, and features, from the makers of Gamasutra.", logo: "http://i.cdn.turner.com/adultswim/big/img/2016/04/18/indiegames_logo.jpg"},
{title: "The Verge", url: "http://www.theverge.com/rss/group/features/index.xml", description: "Covering the intersection of technology, science, art, and culture.", logo: "http://www.mcockerill.com/wp-content/uploads/2013/10/the-verge-logo-620x300.png"},
{title: "Wired", url: "http://www.wired.com/feed/", description: "Get in-depth coverage of current and future trends in technology, and how they are shaping business, entertainment, communications, science, politics, and culture.", logo: "http://www.wired.com/wp-content/themes/Phoenix/assets/images/apple-touch-icon.png"},
{title: "TechCrunch", url: "http://feeds.feedburner.com/TechCrunch/", description: "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.", logo: "https://tctechcrunch2011.files.wordpress.com/2014/04/tc-logo.jpg"},
{title: "Digital Trends", url: "http://www.digitaltrends.com/feed/", description: "Digital Trends is your premier source for technology news and unbiased expert product reviews of HDTVs, laptops, smartphones and more.", logo: "http://cdn2.digitaltrends.com/dt-logo-200x200.png"},
{title: "Gizmodo", url: "http://feeds.gawker.com/gizmodo/full", description: "We come from the future.", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Gizmodo_Logo.png"},
{title: "Android Police", url: "http://www.androidpolice.com/feed/", description: "We come from the future.", logo: "https://www.getqardio.com/wp-content/uploads/2015/05/Android-Police-logo.png"},
{title: "Android Central", url: "http://www.androidcentral.com/rss.xml", description: "News and developments relating to this mobile platform.", logo: "http://www.imore.com/sites/mobilenations.com/broadcasting/podcast_android_central_1400.jpg"},
{title: "Mac Rumors", url: "http://feeds.macrumors.com/MacRumors-All", description: "Apple Mac iOS Rumors and News You Care About", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/MacRumors.svg/1125px-MacRumors.svg.png"},
{title: "Cult of Mac", url: "http://www.cultofmac.com/feed/", description: "Tech and Culture through an Apple lens.", logo: "http://www.softwarehow.com/wp-content/uploads/Cult-of-Mac-logo.jpg"},
{title: "Kotaku", url: "http://feeds.gawker.com/kotaku/vip", description: "The Gamer's Guide", logo: "https://pbs.twimg.com/profile_images/590507751819841536/m8cKEBI0.jpg"},
{title: "CSS-Tricks", url: "http://feeds.feedburner.com/CssTricks", description: "Tips, Tricks, and Techniques on using Cascading Style Sheets.", logo: "http://www.infragistics.com/community/cfs-filesystemfile.ashx/__key/CommunityServer.Blogs.Components.WeblogFiles/brent_5F00_schooley.metablogapi/8765.css_2D00_tricks_5F00_03149516.png"},
{title: "Coding Horror", url: "http://feeds.feedburner.com/codinghorror", description: "programming and human factors", logo: "http://devstickers.com/assets/img/cat/coding-horror.png"},
{title: "Joel on Software", url: "http://www.joelonsoftware.com/rss.xml", description: "A weblog by Joel Spolsky, a programmer working in New York City, about software and software companies.", logo: "https://learningcentergauss.edublogs.org/files/2016/04/logo-joel-on-Software-1q72tgd.png"},
{title: "How-To Geek", url: "http://feeds.howtogeek.com/HowToGeek/", description: "Includes help, tutorials, tips and how-to guides for Windows and Linux.", logo: "https://pbs.twimg.com/profile_images/715229294/geek-204x204_400x400.png"},
{title: "Gamasutra", url: "http://feeds.feedburner.com/GamasutraFeatureArticles/", description: "The online free version of Game Developer Magazine. Weekly articles on game design and threads for discussion.", logo: "http://deepfreeze.it/img/j_logos/logo_gamasutra.png"},
{title: "David Walsh Blog", url: "https://davidwalsh.name/feed", description: "A blog featuring tutorials about JavaScript, HTML5, AJAX, PHP, CSS, WordPress, and everything else development.", logo: "https://davidwalsh.name/wp-content/themes/punky/images/logo.png" }
])


Category.create!([
  {title: 'General', image: 'http://kenstonlocal.org/kenston/wp-content/uploads/2014/07/technology1.jpg'},
  {title: 'Android', image: 'https://i.kinja-img.com/gawker-media/image/upload/s--HKE-He8v--/c_scale,fl_progressive,q_80,w_800/hw5uj62xo93duxzlqmf3.jpg'},
  {title: 'Apple', image: 'https://www.wired.com/wp-content/uploads/2016/03/apple-fbi-514451372.jpg'},
  {title: 'Programming', image: 'http://images.8tracks.com/cover/i/000/007/570/programming-8239.jpg?rect=356,0,2136,2136&q=98&fm=jpg&fit=max&w=1024&h=1024'},
  {title: 'Gaming', image: 'https://yt3.ggpht.com/2tDwwVVEuy0ja92htLiC-JZdfqUB1ogR--jjSph3Ybk068mSQkoOhG9YdvYvgDrWyjCIvi9JOubtFIyi=s900-nd-c-c0xffffffff-rj-k-no'},
  {title: 'Gadgets', image: 'https://www.wired.com/wp-content/uploads/2015/11/mosaic-gear.jpg'}
  ])


FeedCategory.create!([
  {feed_id: Feed.find_by(title: "Gizmodo").id, category_id: Category.find_by(title: "General").id},
  {feed_id: Feed.find_by(title: "Gizmodo").id, category_id: Category.find_by(title: "Gadgets").id},
  {feed_id: Feed.find_by(title: "Wired").id, category_id: Category.find_by(title: "General").id},
  {feed_id: Feed.find_by(title: "TechCrunch").id, category_id: Category.find_by(title: "General").id},
  {feed_id: Feed.find_by(title: "Digital Trends").id, category_id: Category.find_by(title: "General").id},
  {feed_id: Feed.find_by(title: "Mac Rumors").id, category_id: Category.find_by(title: "Apple").id},
  {feed_id: Feed.find_by(title: "Cult of Mac").id, category_id: Category.find_by(title: "Apple").id},
  {feed_id: Feed.find_by(title: "Cult of Mac").id, category_id: Category.find_by(title: "Gadgets").id},
  {feed_id: Feed.find_by(title: "Kotaku").id, category_id: Category.find_by(title: "Gaming").id},
  {feed_id: Feed.find_by(title: "IndieGames").id, category_id: Category.find_by(title: "Gaming").id},
  {feed_id: Feed.find_by(title: "Gamasutra").id, category_id: Category.find_by(title: "Gaming").id},
  {feed_id: Feed.find_by(title: "Android Central").id, category_id: Category.find_by(title: "Android").id},
  {feed_id: Feed.find_by(title: "Android Police").id, category_id: Category.find_by(title: "Android").id},
  {feed_id: Feed.find_by(title: "Android Police").id, category_id: Category.find_by(title: "Gadgets").id},
  {feed_id: Feed.find_by(title: "CSS-Tricks").id, category_id: Category.find_by(title: "Programming").id},
  {feed_id: Feed.find_by(title: "Coding Horror").id, category_id: Category.find_by(title: "Programming").id},
  {feed_id: Feed.find_by(title: "Joel on Software").id, category_id: Category.find_by(title: "Programming").id},
  {feed_id: Feed.find_by(title: "David Walsh Blog").id, category_id: Category.find_by(title: "Programming").id},
  {feed_id: Feed.find_by(title: "Gamasutra").id, category_id: Category.find_by(title: "Programming").id},
  {feed_id: Feed.find_by(title: "How-To Geek").id, category_id: Category.find_by(title: "Programming").id}

  ])


Collection.create!([
  {title: 'Best Tech', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Android', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Work', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Mobile', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Gaming', user_id: User.find_by(email: 'user@demo.com').id},
  {title: 'Code', user_id: User.find_by(email: 'user@demo.com').id}
  ])

CollectionFeed.create!([
  {collection_id: Collection.find_by(title: 'Work').id, feed_id: Feed.find_by(title: 'Gizmodo').id},
  {collection_id: Collection.find_by(title: 'Work').id, feed_id: Feed.find_by(title: 'Digital Trends').id},
  {collection_id: Collection.find_by(title: 'Mobile').id, feed_id: Feed.find_by(title: 'Android Central').id},
  {collection_id: Collection.find_by(title: 'Best Tech').id, feed_id: Feed.find_by(title: 'Wired').id},
  {collection_id: Collection.find_by(title: 'Best Tech').id, feed_id: Feed.find_by(title: 'Android Police').id},
  {collection_id: Collection.find_by(title: 'Mobile').id, feed_id: Feed.find_by(title: 'Mac Rumors').id},
  {collection_id: Collection.find_by(title: 'Code').id, feed_id: Feed.find_by(title: 'Coding Horror').id},
  {collection_id: Collection.find_by(title: 'Code').id, feed_id: Feed.find_by(title: 'David Walsh Blog').id},
  {collection_id: Collection.find_by(title: 'Code').id, feed_id: Feed.find_by(title: 'CSS-Tricks').id},
  {collection_id: Collection.find_by(title: 'Gaming').id, feed_id: Feed.find_by(title: 'Gamasutra').id},
  {collection_id: Collection.find_by(title: 'Gaming').id, feed_id: Feed.find_by(title: 'IndieGames').id}
  ])

  Favorite.create!([
    {
      user_id: User.find_by(email: 'user@demo.com').id,
      author: "Andrew Liszewski",
      title: "The Best Way To Charge Your iPhone 7 and Use Wired Headphones Is a Giant $40 Dongle",
      feed: 'Gizmodo',
      image: "https://i.kinja-img.com/gawker-media/image/upload/s--HHPHCzpT--/c_fit,fl_progressive,q_80,w_636/wrpnzhqe2upnpgblu1xt.jpg",
      published:  "2016-09-08 21:00:00 UTC",
      summary:  "Upgrading to the iPhone 7 and lack wireless headphones? Say hello to your new reality. Belkin appears to be the first accessory maker with a Lightning dongle that lets you attach a pair of Lightning connector headphones and a charging cable at the same time. Sigh.",
      url:  "http://gizmodo.com/the-best-way-to-charge-your-iphone-7-and-use-wired-head-1786401737"
    },
    {
      user_id: User.find_by(email: 'user@demo.com').id,
      author: 'David Walsh',
      title: "Get Query String Parameters with JavaScript",
      feed: "David Walsh Blog",
      image: "https://davidwalsh.name/wp-content/themes/punky/images/sda/ba-vlny16-pc20dwalsh-20160705.jpg",
      published: "2016-08-29 13:24:42 UTC",
      summary:  "<p>One of the front-end features that server side languages don&#8217;t have is the ability to natively get query string parameters by key.  The only method you have to access the query string is via the window.location.search property but you don&#8217;t get each property within one object, you get one string that represents the entire query string: console.log(window.location.search)",
      url:  "https://davidwalsh.name/query-string-javascript"
    },
    {
      user_id: User.find_by(email: 'user@demo.com').id,
      author: 'Richard Gao',
      title: "Google finally makes the Nexus 6P 7.0 Nougat factory and OTA images available",
      feed: 'Android Police',
      image: "http://www.androidpolice.com/wp-content/uploads/2016/09/nexus2cee_ap_resize-1-728x485.jpg",
      published: "2016-09-08 23:52:23 UTC",
      summary: "The title says it all, really&#8212;the Nexus 6P finally has a downloadable factory image and OTA, courtesy of Google. This news comes shortly after Vodafone announced that it was halting the Nougat OTA for the 6P due to unnamed issues. Earlier this month, when the September security update came out for Nexus devices, we were both puzzled and disappointed when only the Marshmallow Nexus 6P build received the security update, but both the image and OTA are finally here.",
      url:"http://www.androidpolice.com/2016/09/08/google-finally-makes-nexus-6p-7-0-nougat-factory-ota-images-available/"
    },
    {
      user_id: User.find_by(email: 'user@demo.com').id,
      author: 'Liz Stinson',
      title: "Here’s What You Need to Know About Ceramic, The Fancy Material in Apple’s Fanciest Watch",
      feed: 'Wired',
      image: "https://www.wired.com/wp-content/uploads/2016/09/CeramicAppleWatch-599948260-660x440.jpg",
      published: "2016-09-08 21:04:10 UTC",
      summary: "Here&#8217;s What You Need to Know About Ceramic, The Fancy Material in Apple’s Fanciest Watch Apple's shiny-white ceramic wearable is twice the price of the stainless steel model. So what does that extra dough buy you, besides a clean look?.",
      url: "https://www.wired.com/2016/09/apples-new-high-end-watch-crazy-tough-ceramics-baby/"
    }
    ])
