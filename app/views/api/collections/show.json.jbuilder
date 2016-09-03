json.id @collection.id
json.title @collection.title
json.feeds @collection.feeds
json.entries ordered_entries(@collection)
