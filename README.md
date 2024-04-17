# ⚽ Welcome to Football Manager

## What is it

Full Stack project developed as a challenge for completing the Back-End module at Trybe Web Development course.

It aims to integrate a dockerized Back-End Express HTTP server written in TypeScript as a RESTful API by use of Sequelize to a React based dockerized Front-End. Tested using Puppeteer, Jest, Mocha and Sinon and is orchestrated by Docker-Compose.

## Tech Stack

| Front-End | Back-End   | Authentication | HTTP Server | Database | ORM           | Testing   | Packaging | Orchestration  |
|:---------:|:----------:|----------------|:-----------:|:--------:|:-------------:|:---------:|:---------:|:--------------:|
| React     | TypeScript | BCrypt.js      | Express     | MySQL    | Sequelize     | Puppeteer | Docker    | Docker-Compose |
|           | Node.js    | JWT            |             |          | Sequelize-CLI | Jest      | NPM       |                |
|           |            |                |             |          |               | Mocha     |           |                |

## Entities

This application leverages a RESTful API to manipulate a database keeping track of:

- Users and credentials
- Teams, with score and status
- Matches and their information

Using this data, a Leaderboard endpoint is provided for tournment classifications 🏆

### Relationship

These entities are related as shown below:

![Entity Relation Diagram](previews/entity_relations_diagram.png)

## How to run this project

1. Clone this repository and enter its directory:

``
git clone git@github.com:fernando-costa/football-manager.git && cd football-manager/
``

2. Install dependencies

``
npm run install:apps
``

3. Orchestrate containers

``
npm run compose:up
``

4. Start the HTTP service at app/backend

``
cd app/backend && npm run start
``

5. Visit http://localhost:3000/login

For different access roles, use:

| Role  | Username | Email           | Password     |
|-------|----------|:---------------:|:------------:|
| Admin | Admin    | admin@admin.com | secret_admin |
| User  | User     | user@user.com   | secret_user  |
