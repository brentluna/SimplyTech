# SimplyTech

#### [Heroku link][heroku]

[heroku]: https://simply-tech.herokuapp.com/


## Minimum Viable Product

SimplyTech is a web application inspired by Feedly, built using Ruby on Rials and React/Redux. By the end of week 9, this app, at minimum will satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- Feeds
  - [ ] Users can view articles
  - [ ] Article preview component will slide out when clicked
  - [ ] Search bar will autopopulate matching feeds
- Categories
  - [ ] Feeds are grouped by categories
  - [ ] Feeds can be subscribed to via their CategoryIndexItem page
- Collections
  - [ ] Feeds can be subscribed to and added to a collection
  - [ ] Can view a collection which shows all subscribed feeds of collection
- [ ]
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components(modal?)
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Feeds Model, API, and components (2 days)

**Objective:** FeedIndex will display multiple RSS feeds and display FeedIndexItemDetail when clicked.

- [ ] `Feed` model
- [ ] Seed database with a small amount of test data using Feedjira
- [ ] CRUD API for Feeds (`FeedsController, #show, #index`)
- [ ] JBuilder views for feeds
- Feed components and respective Redux loops
  - [ ] `FeedsIndex`
  - [ ] `FeedIndexItem`
  - [ ] `FeedIndexItemDetail`
- [ ] Style Feeds components


### Phase 3: Category Mode, SourceCategory Model  (1 day)

**Objective:** Feeds will be grouped in categories

- [ ] 'Category' model
- [ ] 'SourceCategory' model
- [ ] CategoriesController #show #index
- [ ] APIUtil to fetch categories and their sources
- [ ] Seed Category Data

### Phase 4: Subscriptions Model, API (1day)

**objective:** Users can subscribe to feeds

- [ ] SubscriptionsController #index, #create, #destroy
- [ ] APIUtil to fetch subscribed feeds

### Phase 5: Collections &CollectionSubscriptions Model  (2 days)

**Objective:** Subscriptions to sources belong to collections

- [ ] `Collection` model
- [ ] 'CollectionsController' #new, #create, #edit, #update, #destroy #show, #index
- [ ] 'CollectionSubscriptions' model
- [ ] CRUD API for Collections (`CollectionsController`)
- [ ] Deleting Subscriptions from Collections
- [ ] Seed Collections


### Phase 7: - Styling and Seed Data (2 days)

**objective:** Improve styling details

- [ ] Make sure style is cohesive across all components
- [ ] Add Hover and transitions animations
- [ ] Make sure seed data is Robust enough to have 5+ sources per cateogry

### Phase 7: - Work on Bonus Features
**objective:** Add Bonus Features with remaining time

- Prioritize features as follows
  - [ ] Favorites
  - [ ] Search
  - [ ] Mark as read
  - [ ] Toggle Feeds List Style


### Bonus Features (TBD)
- [ ] Search for Sources with autocomplete dropdown
- [ ] Users can save/favorite articles for later
- [ ] Toggle for Compact List or Detailed List view
- [ ] Display articles as read if clicked on
- [ ] Multiple sessions
