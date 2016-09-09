# simplyTech

[Live Site](http://simplyTech.us)

simplyTech is a full-stack web application inspired by the RSS Feed Aggregator [Feedly](http://feedly.com/), allowing users to pick the tech related feeds that are of interest. This application was built using Ruby on Rails with a PostgresSQl database for the back-end and uses React.js and Redux architectural pattern for the Front-End.

## Features & Implementation

### Single-Page App

simplyTech is a single-page app allowing for seamless transition between activities. Built using React Components, the application stands on a single static html page, that mounts different React Components depending on the route.

### RSS Feeds

Upon a user signing in the app will make an ajax request to the Feeds controller that will pull from the Feeds database the list of possible Feeds, and using the Feedjira Gem in combination with JBuilder, it will parse each feed, creating an object of the feed with all of it's article entries. After this initial database request, you are able to move around the app seamlessly with very little loading time required.

![reader]

![sidebar]

### Categories

This is a tech themed Feed Aggregator, which has a variety of different tech related categories. The categories store Feeds related to them, in order to help users easily find new feeds that may interest them.

![category]

### Collecitons

Collections are how a user can organize which feeds they subscribe to. I used a join table in my database to link columns from the Feeds table to columns in the Collections table, allowing a many-to-many relationship.

![add_to_collection]

![add_feeds]

### Search

The search feature is used to quickly find and go to a specific Feeds page, allowing the user to get to the content he wants quickly. The search makes ajax requests via the inputs onChange listener, allowing for an autocomplete dropdown, matching and updating possible Feeds as the user types each letter.

![search]

### Saved Articles

The feeds have a bookmark icon, which when clicked will send an ajax request storing the article in the database, so it will no longer be reliant on it's Feed parent, and will persist in a Saved Articles Collection as long as the user wishes. The user has the option to remove the Saved Article by clicking the bookmark icon from the saved articles collection, which will delete the article from the database.

## Future Features

### Number of Hits per article

The Articles will include a read count column in the database, that increments each time an article is opened, allowing a read count to be displayed

### Users can Import Feeds from their Feedly account

Users can import feeds they have stored in their Feedly account via a Feedly API

### Users can makrk feeds as read

An option  to mark a feed as read, with optional setting to hide them if marked as read.

[add_feeds]: ./app/assets/images/add_feeds.png
[add_to_collection]: ./app/assets/images/add_to_collection.png
[category]: ./app/assets/images/category.png
[search]: ./app/assets/images/search.png
[sidebar]: ./app/assets/images/sidebar.png
[reader]: ./app/assets/images/SimplyTech.png
