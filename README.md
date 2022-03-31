# nextjs-boilerplate

## Scripts

### `yarn dev`

Starts the application in development mode with hot-code reloading, error reporting, and more, on http://localhost:3000.

### `yarn build`

Creates an optimized production build of the application.

### `yarn start`

Starts the application in production mode. The application should be compiled with next build first.

### `yarn lint`

Runs ESLint for all files in the pages, components, and lib directories.

### `yarn format`

Runs Prettier for `.ts` and `.tsx` files in the `src/` directory.

### `yarn test`

Runs tests using Jest.

### `yarn type-check`

Runs the TypeScript compiler to see if there are any type errors.

### `yarn studio`

Runs Prisma Studio, which lets you explore the database through a web UI at http://localhost:5555.

## Local environment

The project contains a `docker-compose.yml` file which is capable of setting up a local environment for development and testing purposes.

### Setup

1. Copy `.env.example` to `.env`.
1. Run `docker-compose up -d` to start the Docker containers.
1. Run `yarn prisma db push` to make Prisma initialize the database.
1. Now you're ready to run `yarn dev` to start the Next.js server.

### Features

#### Database

Hosts a local Postgres database. Credentials are set based on the value in `.env`

#### Mailhog

Hosts a local mail server that catches all outgoing mail, and displays them in a web UI. The web UI is accessible at http://localhost:8025.
