# Request Header Parser Microservice

This is a microservice application that retrieves information about the client's HTTP request headers. It is built with Node.js and uses the Express framework.

## Endpoints

- `GET /`: serves the home page with instructions on how to use the API.
- `GET /api/whoami`: retrieves the client's IP address, preferred language, and user-agent software string, and returns it to the user in JSON format.

For example, if a user accesses the endpoint, the JSON object returned by the endpoint would look like this:

```
{
  "ipaddress": "127.0.0.1",
  "language": "en-US",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
}
```

These endpoints are simple but effective for demonstrating the basic functionality of a microservice. They allow a user to retrieve information about their HTTP request headers without having to install any additional software or dependencies.

## Installation

1. Clone this repository or download the source code.

```
git clone https://github.com/kafwe/headerparser-microservice.git


cd headerparser-microservice
```

2. Install dependencies.

```
npm install
```

3. Start the server.

```
npm start
```

The API is now running on http://localhost:3000. You can test the API by visiting http://localhost:3000 in your browser or using a tool such as Postman.

## Running in Docker Container

1. Build Docker image of the app

```
docker build -t headerparser .
```

2. Start a container from the image

```
docker run -p 3000:3000 -d headerparser
```

The API is now running on http://localhost:3000. You can test the API by visiting http://localhost:3000 in your browser or using a tool such as Postman.

## Acknowledgements

The prompt for this project can be found on [freeCodeCamp.org](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice).
