# NodeJS (Express) Typescript API starter template
You can use this template as a starting point for an Express API on TypeScript

# Usage
## Clone a template:
  ```shell
  $ git clone git@github.com:vtl-pol/express-ts-starter-template.git /[NAME_OF_YOUR_PROJECT]
  $ cd [NAME_OF_YOUR_PROJECT]
  $ rm -fr .git # You'd probably want to attach this to your own repo, so you can get rid on this one
  ```
## Create an `.env` file.
You can use the `.env.example` as a reference.
## Run in development:
  ```shell
  $ yarn      # Install dependencies
  $ yarn dev  # Run a dev server
  ```
Your API should be available at [localhost:3000](http://localhost:3000)
```JSON
{
  "name": "Your Awesome API"
}
```
There's also a test route [localhost:3000/get/some](http://localhost:3000/get/some)
```
Got Some
```
## Run in production:
  ```shell
  $ yarn        # Install dependencies
  $ yarn build  # Build the TypeScript codebase to native JS (will appear in ./dist)
  ```
  Regular start script
  ```shell
  $ yarn start  # node ./bin/www under the hood.
  ```
  In production - You better use pm2 or other process-manager
  ```shell
  $ pm2 start ./bin/www --name [your-production-app]
  ```
## Docker
This template has a `Dockerfile`, so you can use it with docker as well
```shell
$ docker build . -t your-dockerized-api-image

Step 1/6 : FROM node:15.2-alpine3.12
......

Successfully built
Successfully tagged your-dockerized-project:latest

$ docker run -d -p 3000:3000 --name your-dockerized-project your-dockerized-api-image
```
You can also use this on dev with `docker-compose`

```yaml
version: '3.5'
services:
  api:
    build:
      # Assuming, you have the docker-compose.yml in the same folder as API
      context: .
    # This is a dev command, you can remove this line if you're OK with using the prod command, specified in a dockerfile
    command: ['/bin/sh', '-c', 'yarn ; yarn dev']
    volumes:
      # Assuming, you have the docker-compose.yml in the same folder as API
      - .:/home/node/app
    ports:
      - 3000:3000
```
#
## P.S.
A huge shout-out to **[Sam Quinn](https://github.com/santiq)** and his [post](https://softwareontheroad.com/ideal-nodejs-project-structure/) about **Bulletproof node.js project**.

I got a lot of inspiration and usefull features from it. I recommend you to check it out
