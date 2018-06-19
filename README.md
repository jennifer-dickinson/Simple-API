# Hackerbay University

Author: Jennifer Salas<br>
Date: June 19, 2018

## Week 1 Task

The tasks for this week where to setup a simple API using node and express.

The API runs on port `8000` and supports three  endpoints.

* `GET` - `'/'` - returns a success message as a JSON string.
* `GET` - `'/data'` - returns a saved global variable `data` as a JSON string.
* `POST` - `'/data'` - requires a `data` parameter and saves it in a global variable. It returns a JSON string with the saved `data` string. If no data has been previously saved, returns an empty string.

To run the API:

    npm start

Check the program is running by submitting a `GET` request to `localhost:8000/`. 

    curl -X GET "localhost:8000/"

Sample `POST` request (requires `data` field)

    curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d "data=Any+String" "localhost:8000/data"

Sample `GET` request

    curl -X GET "localhost:8000/data"