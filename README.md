# Folder Structure

```
    -node_modules/
    -src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    -tests/ [later]
    -static/
    -temp/
```

## Setup Microservice for Flights and Search

> 1. Create a folder by the name of flightsandsearch or whatever name you want.

- mkdir flightsandsearch
- cd flightsandsearch

> 2. Create required folder like above structure inside a src/ folder

- controllers/
- middlewares/
- models/
- services/
- utils/
- config/
- repository/
- index.js

> 3. Create tests/ static/ temp/ folder on root.

## Run following commands to install package.

> ```
>   npm i express body-parser nodemon dotenv
> ```

> 4. Install Sequelize & Sequelize CLI

```
npm install sequelize
npm install sequelize-cli
```

> 5. Initialize sequelize (inside root folder)

```
npx sequelize init
```

#### This command create several folders

- config/config.json
- models/index.js
- migrations/
- seeders/

> 6. Setup your config/config.json file for developement database.

> 7. Run `npx sequelize db:create` command to create your databse.
