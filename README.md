## Requirements
* NodeJS

## Installation

```bash
 npm install
```

## Env

Create a file named <b>.env</b> in the project. Inside the file:
```bash
 DB_HOST = mongodb://localhost:27017/<name of db>
```

## Running The Server
```bash
 npm run start:dev
```

## Endpoints
Get:
 * http://localhost:3000/account
 * http://localhost:3000/account/id/<_id>
 * http://localhost:3000/account/email/<email>
 * http://localhost:3000/business/<_id>

Post
 * http://localhost:3000/account
    * Any JSON Object
 * http://localhost:3000/auth/
    * {
      "email_address": String,
      "password": String
    }
