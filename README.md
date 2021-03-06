# Sequelize_PostToDatabase
An Express app utilizing sequelize to connect to mySQL and posting to the database. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_PostToDatabase: 

    express --view=hbs express_Sequelize_PostToDatabase

(6) Once the process is complete, navigate into the express_Sequelize_PostToDatabase directory: 

    cd express_Sequelize_PostToDatabase
    
(7) Now in the express_Sequelize_PostToDatabase directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_PostToDatabase directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file.: ![Open index js file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504612-753c9300-0ef2-11ea-8704-d2d9393547f7.JPG)

(14) Require mysql2 and models in routes/index.js file:. ![Require mysql2 in index js file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504617-884f6300-0ef2-11ea-82f6-a3e153bbc261.JPG)

COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and files in project.:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504640-b59c1100-0ef2-11ea-919d-5f129e1ae1bd.JPG) 

COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database.:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Require models in app js file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504668-f562f880-0ef2-11ea-9fa9-5e0dba0d2091.JPG) 

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![Add models sequelize sync in app js file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504681-11ff3080-0ef3-11ea-967a-2cac48f5ef8a.JPG)

(23) In the views folder, create a actors.hbs file.: ![Create actors hbs file in views folder (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504714-3bb85780-0ef3-11ea-8780-6d91d692bc8b.JPG)

(24) Add HTML form and add code to show the names of the actors in the actors.hbs file.: ![Add HTML form to add actor and code to view list of actors in actors hbs file in views folder (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504727-52f74500-0ef3-11ea-99ad-a7d667fbb6d6.JPG)

(25) Add a get() route for /actors and post() route for /actor to the routes/index.js file.: ![Add actors get() route and actor post() route in index js file (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504745-7ae6a880-0ef3-11ea-934d-d678f61c52b5.JPG)

(26) Open the models/actors.js file. Add auto increment to the actor_id.: ![Add autoIncrement to actorId in actor js file in models folder (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504761-9b166780-0ef3-11ea-9493-e670ae23d4be.JPG)

COMMAND PROMPT

(27) Run nodemon in terminal to see DB sync'd up: 

    nodemon

WEB BROWSER

(28) Navigate to localhost3000/actors to view the form and list of actors.: ![Navigate to localhost3000-actors to view form and list of actors (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504779-b7b29f80-0ef3-11ea-930a-dd41ab5672f0.JPG)

(29) Fill out form on the localhost3000/actors page.: ![Navigate to localhost3000-actors and fill out form (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504802-e29cf380-0ef3-11ea-9132-033c2b97ad58.JPG)

(30) SUbmit completed form and scroll down to the bottom of the list to view new actor added to list.: ![Navigate to localhost3000-actors and submit form then scroll to bottom of page to see new entry (Sequelize_PostToDatabase)](https://user-images.githubusercontent.com/35668707/69504814-f9434a80-0ef3-11ea-9509-0e02a1f6ce75.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.

