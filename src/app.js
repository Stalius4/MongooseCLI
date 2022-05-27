require("./db/connection")
const yargs =require("yargs")
const mongoose =require("mongoose")
const { addMovie, findMovie, updateMovie, deleteMovie } = require("./movie/functions")

const app = async (yargsObj) => {
 if (yargsObj.add){
//add movie to database from yargs input
await addMovie ({
    title: yargsObj.title, 
    actor:yargsObj.actor, 
    year:yargsObj.year, 
    genre:yargsObj.genre, 
    rating:yargsObj.rating})
//  }else if (yargsObj.list){
//     await findMovie ({title: yargsObj.title})
 }else if (yargsObj.update){
    await updateMovie({title: yargsObj.title, year:yargsObj.year})
 }else if (yargsObj.delete){
   await deleteMovie({title:yargsObj.title})
}else if (yargsObj.find){
    await findMovie(yargsObj)
 }else{
     console.log("incorrect command")
 }
  await mongoose.disconnect()
}

app(yargs.argv)


