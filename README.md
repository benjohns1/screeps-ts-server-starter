# Screeps Typescript with Local Server Starter

Starting point for developing a Screeps AI with Typescript and a local server

Forked from [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter) but includes a [local private server](https://github.com/screeps/screeps) requiring minimal setup for [authentication](https://github.com/ScreepsMods/screepsmod-auth). Also allows for quickly setting up additional servers; only your local mods and configurations are stored in your repo.

# Setup
1. `npm i`
2. In your Screeps client, generate an auth token from your [account page](https://screeps.com/a/#!/account)
3. Copy `screeps.sample.json` to `screeps.json` and add your token to `main`

# Develop
1. `npm run watch-main`
2. Build an awesome Screeps AI

For additional details, please see the excellent [screeps-typescript-starter docs](https://screepers.gitbook.io/screeps-typescript-starter).

# Local Server
Optional, only needed if you want to run a local server for development and testing

## Setup the Included S1 Local Server

1. `cd` into `servers/s1`
2. `npm install`
3. `npx screeps init`
4. Enter your [Steam Web API key](https://steamcommunity.com/dev/apikey) when prompted
5. `cd` back to the top level directory and start the server: `npm run start-s1`
7. Go to [http://localhost:21025/authmod/password]() in a browser
8. Enter a new password and sign in with Steam
9. Add the password you just created to the `s1` password field in `/screeps.json` and choose a server username for the email field

For additional authentication details, please see the [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) docs.

## Start the S1 Local Server
Run in the top level project directory

Start server: `npm run start-s1`<br/>
Server CLI: `npm run cli-s1`<br/>

## Connect to the S1 Local Server
1. Start Screeps via Steam
2. Choose Change server
3. Connect to Host `127.0.0.1` on Port `21025` without a password
4. Enter the username you configured in `/screeps.json`
5. To start coding: `npm run watch-s1`

## Create a New Local Server
1. Copy `servers/default/` to a new directory `servers/<your_server_name>/`
2. Follow the setup steps above, but use `<your_server_name>` in place of `s1`
3. Add new `start-<your_server_name>` and `cli-<your_server_name>` scripts to `/package.json` for convenience
