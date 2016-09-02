json.extract! @category, :id, :title, :image
json.feeds @category.feeds do |feed|
  json.id feed.id
  json.title feed.title
  json.description feed.description
  json.first_entry first_entry(feed)
  json.logo feed.logo

end
