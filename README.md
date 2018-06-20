# Hackerbay University

Author: Jennifer Salas

## Table of Contents

* [Week 1](##week-1)
* [Week 2](##week-2)

## Week 1
### Date: June 19, 2018

The tasks for this week where to setup a simple API using node and express.

The API runs on port `8000` and supports three  endpoints.

* `GET` - `'/'` - returns a success message as a JSON string.
* `GET` - `'/data'` - returns a saved global variable `data` as a JSON string.
* `POST` - `'/data'` - requires a `data` parameter and saves it in a global variable. It returns a JSON string with the saved `data` string. If no data has been previously saved, returns an empty string.

To run the API:

    npm start

curl -X GET "localhost:8000/data"Check the program is running by submitting a `GET` request to `localhost:8000/`. 

    curl -X GET "localhost:8000/"

Sample `POST` request (requires `data` field)

    curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d "data=Any+String" "localhost:8000/data"

Sample `GET` request

    

## Week 2
### Date: June 19, 2018

The goal for this week is to connect a database to a backend and implement authentication.

