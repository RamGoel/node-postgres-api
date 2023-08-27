
# node-postgres-api

A User details CRUD REST API built using expressjs and postgresql.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_USERNAME` : Username for Postgres
`POSTGRES_PASSWORD` : Password for Postgres



## API Reference

#### Get all users

```
  GET /user
```


#### Get single user

```
  GET /user?id=[id]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Add new user

```
  POST /user
```


```
{
"fname": "Ram",
"lname": "Goel",
"age": 21,
"email": "ram@habpages.com",
"country": "India"
} 
```
#### Update Email of User


```
  PUT /user
```


```
{
"email": "ram@habpages.com",
} 
```

#### Delete User


```
  DELETE /user
```


```
{
"id": "1"
} 
```


