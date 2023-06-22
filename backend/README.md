# Bus Reservation App

The Bus Reservation Web App is a convenient application that allows users to easily book and manage bus tickets for their desired destinations, providing a seamless and hassle-free travel experience.

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
