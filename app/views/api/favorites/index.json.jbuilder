
json.array! @favorites do |favorite|
  json.id favorite.id
  json.title favorite.title
  json.summary favorite.summary
  json.image favorite.image
  json.url favorite.url
  json.published favorite.published
  json.feed favorite.feed
  json.author favorite.author
end
