# Schema Information

## feeds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
source          | string    | not null, indexed, unique
RSS_feed        | string    | not null, indexed, unique

## subscriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
feed_id         | integer   | not null, indexed, unique
user_id         | integer   | not null, indexed, unique

## collections
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique

## collection_subscriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
collection_id   | integer   | not null, indexed, unique
feed_id         | integer   | not null, indexed, unique

## categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique
image_url       | string    | not null, indexed, unique

## feed_categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
feed_id         | integer   | not null, indexed, unique
category_id     | integer   | not null, indexed, unique

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
