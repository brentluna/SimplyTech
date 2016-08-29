# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Feeds

- `GET /api/feeds`
  - Notes index/search
- `GET /api/feeds/:id`
  - #show

### Categories

- `GET /api/categories`
  - #index
- `GET /api/categories/:id`
  - #show
### Subscriptions

- `GET /api/subscriptions`
  - #index
- `POST /api/subscriptions`
  - #create
- `GET /api/subscriptions/:id`
  - #show
- `DELETE /api/subscriptions/:id`
  - #destroy
### Collections

- `GET /api/collections`
  - #index
- `POST /api/collections`
  - #create
- `PATCH /api/collections/:id`
  - #update
- `DELETE /api/collections/:id`
  - #destroy
- `GET /api/collections/:id`
  - #show
