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

> 8. To create a new model we use 

> ```npx sequelize-cli model:generate --name <ModelName> --attributes <Column name>:<Datatype>```

> 9. After creating your models you need to migrate model/tables

```
npx sequelize-cli db:migrate
```

## Tables
### City => id, name, created_at, updated_at
### Airport => id, name, address, city_id, created_at, updated_at
    Relationship: City has many airports and Airport belongs to a city (one to many)

```npx sequelize-cli model:generate --name Airport --attributes name:String,address:String,cityId:Integer```


## Seeder
```
npx sequelize-cli seed:generate --name airport-seeder
```