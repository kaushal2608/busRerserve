# Bus Reserve

This is a backend capston project given by almabetter in this project we created busReserve website this project have vary simple UI and this website is very easy to use ( userfriendly ) and also a work in any devices ( Responsiveness ) .

## Deployment Links

click on the line to see the project

Frontend host on netlify.com

- busreserve.netlify.app

Backend host on render.com

- https://busreservation.onrender.com

## Installation

If you want to work on this project clone this repo
bash
git clone git@github.com:kaushal2608/busRerserve.git

open this project on you local IDE and in the terminal do this commands one by one

- for Frotend
  bash
  cd frontend

npm install

npm start

- for backend
  bash
  cd backend

npm install

npm start

This will start you frontend part in http://localhost:3000 and backend part running in http://localhost:8080

## Tech Stack

_Frontend:_ React js,

_backend:_ Node js, Express js ,

_database:_ Mongodb

This is a MERN stack project

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key

`API_KEY`

MONGOURI : mongodb+srv://user_name:<password>@cluster0.adfedxd.mongodb.net/<batabase_name>?retryWrites=true&w=majority

## API Reference

#### Get all Trips

```http
  GET /api/v1/gettrips
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Trips by Date

```http
  GET /api/v1/tripsbydate
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `date`    | `Number` | **Required**. Date of trip in timestamp to fetch trip |

#### Get Trips by query

```http
  GET /api/v1/tripsbyquery
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `query`   | `string` | add query to fetch trip according to your need |

#### Post Trips

```http
  Post /api/v1/posttrips
```

| Body   | Type   | Description                         |
| :----- | :----- | :---------------------------------- |
| `data` | `json` | add the data to post it in database |

#### Booking Tickets by post

```http
  Post /api/v1/bookingticket
```

| Body   | Type   | Description                                    |
| :----- | :----- | :--------------------------------------------- |
| `data` | `json` | add the data to post booked ticket in database |

## Support

For support, **email**

- kaushalyadav2695@gmail.com

or connect on **linkedin**

- Kaushal Kishor :- https://www.linkedin.com/in/kaushalkishor07/
