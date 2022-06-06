# Commands for app to work

### For movies 

1. `node/src/app.js --addMovie --title "Name" --actor "Name" --year "year" --genre "drama" --rating "9.2"` (add movie with actor)
2. `node/src/app.js --findMovie --title  / --genre  /  --actor`
3. `node src/app.js --deleteMovie --title`  
4. `node src/app/js --updateMovie --title "name" --genre  / --actor / --year`

### For tv-shows 

1. `node/src/app.js --addTv --title "Name" --actor "Name" --year "year" --genre "drama" --rating "9.2"` (add movie with actor)
2. `node/src/app.js --findTv --title  / --genre  /  --actor`
3. `node src/app.js --deleteTv --title`
4. `node src/app/js --updateTv --title "name" --genre  / --actor / --year`


# What is an ODM?
Object Document Mapping 
library that allows you to pass **documents to a DBMS (MongoDB with Mongoose)** 
allowing you to add **structure** to a **NoSQL database**.

# First steps 

1. Create git repository.
2. npm init -y
3. mkdir src src/movie src/db
4. touch .gitignore .env src/app.js src/db/connection.js src/movie/model.js src/movie/functions.js
5. add  .env  /node_modules to .gitignore file
6. add  MONGO_URI= and link from mongodb with username and login  and after .net/   name it 
7. npm i yargs mongoose dotenv  (dotenv let us to access .env file ), [yargs]((https://www.npmjs.com/package/yargs))


# CRUD   (create, read, update and delete) [Documentation](https://mongoosejs.com/docs/models.html)

1. ***Create*** create( )    
2. ***Read*** .findOne( ) 
```javascript 
const result = await Movie.where("title").equals(yargsObj.title)
```
3. ***Update*** updateOne( )     
4. ***Delete*** deleteOne( ), deleteMany     





# Task 


• Create a **CLI** that allows users to store movies in
a **MongoDB database using mongoose**.
• App must cover all **CRUD** operations.
• Movie entries should include **optional information**.


Stretch goals - Allow for filtered search results
(by name/actor/rating), Create a second
Schema/Model for TV shows with full CRUD
operations.


# Re-search again

1. promises 
