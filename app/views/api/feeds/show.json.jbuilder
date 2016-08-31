# json.id @feed.id
# json.title @feed.title
# json.description @feed.description
# json.entries feedjira_entries(@feed)
json.partial! "api/feeds/feed", feed: @feed
