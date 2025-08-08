This is base nodejs project template with clean folder structure and code principles.

`src` ->  inside the src folder all actual source code regarding project reside.

src folder has,
`config` -> in this folder we define all configurations setups.

`routes` -> In routes folder , we register route and the corresponding middleware and controllers to it.

`middlewares` -> they are just going to intercept the incoming requests wher we can write our validators , authenticators , etc.

`controllers` -> In controllers we just receive requests and data and then pass it to business layer  once business layer returns .we structure api response in controllers and send output.

`repositories` -> this folder contains all logic using which we interact DB by writing queries,all raw queries or orm queries will go here.

`services` -> contains the business logic and interacts with repositories for data from database.

`utils` -> contains helper methods, error classes etc.

