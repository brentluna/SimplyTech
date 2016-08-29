# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Feeds Cycles

### Feeds API Request Actions

* `fetchAllFeeds`
  0. invoked from `FeedsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/feeds` is called.
  0. `receiveAllFeeds` is set as the success callback.

* `fetchSingleFeed`
  0. invoked from `FeedIndexItemDetail` `didMount`/`willReceiveProps`
  0. `GET /api/feeds/:id` is called.
  0. `receiveSingleFeed` is set as the success callback.


### Feeds API Response Actions

* `receiveAllFeeds`
  0. invoked from an API callback
  0. the `FeedReducer` updates `feeds` in the application's state.

* `receiveSingleFeed`
  0. invoked from an API callback
  0. the `FeedReducer` updates `feeds` in the application's state.

## Categories Cycles

### Categories API Request Actions

* `fetchAllCategories`
  0. invoked from `CategoriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/categories` is called.
  0. `receiveAllCategories` is set as the success callback.

* `fetchSingleCategory`
  0. invoked from `CategoryIndexItemDetail` `didMount`/`willReceiveProps`
  0. `GET /api/categories/:id` is called.
  0. `receiveSingleCategory` is set as the success callback.


### Categories API Response Actions

* `receiveAllCategories`
  0. invoked from an API callback
  0. the `CategoriesReducer` updates `categories` in the application's state.

* `receiveSingleCategory`
  0. invoked from an API callback
  0. the `CategoriesReducer` updates `categories` in the application's state.


## Subscriptions Cycles

### Subscriptions  API Request Actions

* `fetchAllSubscriptions`
  0. invoked from `SubscriptionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/subscriptions` is called.
  0. `receiveAllSubscriptions` is set as the success callback.

* `subscribe`
  0. invoked from subscribe button `onClick`
  0. `POST /api/subscriptions` is called.
  0. `addSubscription` is set as the callback.

* `fetchSingleSubscription`
  0. invoked from `SubscriptionIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/subscriptions/:id` is called.
  0. `receiveSingleSubscription` is set as the success callback.

* `unsubscribe`
  0. invoked from unsubscribe button `onClick`
  0. `DELETE /api/subscriptions/:id` is called.
  0. `removeSubscription` is set as the success callback.

### Subscriptions API Response Actions

* `receiveAllSubscriptions`
  0. invoked from an API callback.
  0. The `Subscription` reducer updates `subscriptions` in the application's state.

* `receiveSingleSubscription`
  0. invoked from an API callback.
  0. The `Subscription` reducer updates `subscriptions[id]` in the application's state.

* `removeSubscription`
  0. invoked from an API callback.
  0. The `Subscription` reducer removes `subscriptions[id]` from the application's state.

### Collections  API Request Actions

* `fetchAllCollections`
  0. invoked from `CollectionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/collections` is called.
  0. `receiveAllCollections` is set as the success callback.

* `addCollection`
  0. invoked from add button `onClick`
  0. `POST /api/collections` is called.
  0. `receiveSingleCollection` is set as the callback.

* `fetchSingleCollection`
  0. invoked from `CollectionIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/collections/:id` is called.
  0. `receiveSingleCollection` is set as the success callback.

* `updateCollection`
  0. invoked from `CollectionForm` `onSubmit`
  0. `PATCH /api/collections/:id` is called.
  0. `receiveSingleCollection` is set as the success callback.

* `deleteCollection`
  0. invoked from delete button `onClick`
  0. `DELETE /api/subscriptions/:id` is called.
  0. `removeCollection` is set as the success callback.

### Collections API Response Actions

* `receiveAllCollections`
  0. invoked from an API callback.
  0. The `Collection` reducer updates `collections` in the application's state.

* `receiveSingleCollection`
  0. invoked from an API callback.
  0. The `Collection` reducer updates `collections[id]` in the application's state.

* `removeCollection`
  0. invoked from an API callback.
  0. The `Collection` reducer removes `collections[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/feeds` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
