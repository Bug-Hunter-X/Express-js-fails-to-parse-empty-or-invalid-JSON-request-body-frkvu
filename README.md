# Express.js JSON Parsing Bug

This repository demonstrates a common bug in Express.js applications where the server fails to correctly parse JSON request bodies that are empty or contain invalid JSON data.  The application does not throw an error, but instead logs an empty object, leading to unexpected behavior.

## Bug Description

The provided Express.js application uses `express.json()` middleware to parse JSON request bodies. However, when an empty request body or a request body with invalid JSON is sent, the application does not handle the error gracefully.  Instead of throwing an error or returning an appropriate error response, the server logs an empty object and continues processing, potentially causing unexpected behavior in downstream code.

## Solution

The solution involves adding error handling to catch JSON parsing errors.  This is done by wrapping the `express.json()` middleware with an error-handling function that can detect and properly handle parsing errors, providing more informative error messages and responses to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the root directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `/data` with an empty body or invalid JSON using a tool like `curl` or Postman.
6. Observe that the server logs an empty object `{}`, and the response is 'Data received'.