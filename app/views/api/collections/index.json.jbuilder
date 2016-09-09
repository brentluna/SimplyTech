json.array! @collections do |collection|
  puts collection.title
  json.id collection.id
  json.title collection.title
  json.feeds collection.feeds.map {|feed| feed.id}
  json.entries limited_ordered_entries(collection)
end
