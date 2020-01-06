# Backend

## URL

* https://build-week-africanmarketplace.herokuapp.com
    - Uses CORS

## Endpoints

### GET /api/users

* Lists all users in ascending order


### GET /api/users/:id

* Retrieves user with id number


### GET /api/users/:id/items

* Lists all the items available for a specific user


### POST /api/auth/register

* Register new user
* Required fields:
    - username
    - password
    - email


### POST /api/auth/login

* User can login
* Required fields:
    - username
    - password


### POST /api/users/:id/items

* Adds a new item for user
* Required fields:
    - item_name
    - item_description
    - item_price
    - market_location


### PUT /api/users/:id

* Updates user information
* Fields that can be updated:
    - password (bug: updated password isn't hashed)
    - first_name
    - last_name
    - company_name
    - street_address
    - city
    - country


### PUT /api/users/:id/items/:id

* Updates item information
* Fields that can be updated:
    - item_name
    - item_description
    - item_price
    - market_location


### DEL /api/users/:id

* Removes user with id number (bug: doesn't completely delete user info)


### DEL /api/users/:id/items/:id

* Removes item with id number
