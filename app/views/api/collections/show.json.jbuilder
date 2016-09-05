json.id @collection.id
json.title @collection.title
json.feeds @collection.feeds.map {|feed| feed.id }
json.entries ordered_entries(@collection)
