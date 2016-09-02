json.extract! @category, :id, :title, :image
json.feeds @category.feeds do |feed|
  json.extract! feed, :id, :title, :description
  json.recent_entry first_entry(feed)
end
