# Screeps Typescript with Local Server Starter

Starting point for developing a Screeps AI with Typescript and a local server

Forked from [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter) but includes a [local private server](https://github.com/screeps/screeps) requiring minimal setup for [authentication](https://github.com/ScreepsMods/screepsmod-auth). Also allows for quickly setting up additional servers; only your local mods and configurations are stored in your repo.

## Setup
1. Clone me `git clone https://github.com/benjohns1/screeps-ts-server-starter.git`
2. `cd` into the repo and remove the `.git` directory
3. Make this your own repo `git init`
4. `npm i`
5. In your Screeps client, generate an auth token from your [account page](https://screeps.com/a/#!/account)
6. Copy `screeps.sample.json` to `screeps.json` and add your token to `main` and `sim`

## Develop
1. `npm run watch-sim`
2. Open [screeps.com simulation](https://screeps.com/a/#!/sim/survival) and switch to the `sim` branch
3. Build an awesome Screeps AI!

Watch and push to your main screeps world: `npm run watch-main`<br/>
Typescript linting: `npm run lint`<br/>
Use `npm run push-sim` or `npm run push-main` for a single code push, rather than using a watcher

For additional details, please see the excellent [screeps-typescript-starter docs](https://screepers.gitbook.io/screeps-typescript-starter).

## Local Server
Optional, only needed if you want to run a local server for development and testing<br/>
Please see [https://github.com/screeps/screeps](https://github.com/screeps/screeps) for local server details.

### Setup the Included S1 Local Server

1. `cd servers/s1`
2. `npm install`
3. `npx screeps init`
4. Enter your [Steam Web API key](https://steamcommunity.com/dev/apikey) when prompted
5. `cd` back to the top level directory and under `s1` in `screeps.json` choose a client email (username) and password
6. Start the server: `npm run start-s1`
7. Go to [http://localhost:21025/authmod/password](http://localhost:21025/authmod/password) in a browser
8. Enter the new password from `screeps.json` (leave the old password field blank) and click `Sign in through Steam`

For additional authentication details, please see the [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) docs.

### Start the S1 Local Server
Run in the top level project directory

Start server: `npm run start-s1`<br/>
Server CLI: `npm run cli-s1`

### Connect to the S1 Local Server
1. Start Screeps via Steam
2. Choose Change server
3. Connect to Host `127.0.0.1` on Port `21025` without a password
4. Create a player with the username you configured in `screeps.json`
5. To start coding: `npm run watch-s1`

### Create a New Local Server
1. Copy `servers/default/` to a new directory `servers/<your_server_name>/`
2. Follow the setup steps above, but use `<your_server_name>` in place of `s1`
3. Add new `start-<your_server_name>` and `cli-<your_server_name>` scripts to `/package.json` for convenience
