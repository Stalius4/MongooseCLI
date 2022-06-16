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
// find all documents
await MyModel.find({});

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// executes, passing results to callback
MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

// executes, name LIKE john and only selecting the "name" and "friends" fields
await MyModel.find({ name: /john/i }, 'name friends').exec();

// passing options
await MyModel.find({ name: /john/i }, null, { skip: 10 }).exec();
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
