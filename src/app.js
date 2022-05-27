require("./db/connection")
const yargs =require("yargs")
const mongoose =require("mongoose")
const { addMovie, findMovie, updateMovie, deleteMovie } = require("./movie/functions")
const {addTv, updateTv, deleteTv, findTv}  = require("./tv_shows/functions")

const app = async (yargsObj) => {
 if (yargsObj.addMovie){
//add movie to database from yargs input
await addMovie ({
    title: yargsObj.title, 
    actor:yargsObj.actor, 
    year:yargsObj.year, 
    genre:yargsObj.genre, 
    rating:yargsObj.rating})
 }else if (yargsObj.addTV){
    await addTv ({
        title: yargsObj.title, 
        actor:yargsObj.actor, 
        year:yargsObj.year, 
        genre:yargsObj.genre, 
        rating:yargsObj.rating})
 }else if (yargsObj.updateMovie){
    await updateMovie(yargsObj)
}else if (yargsObj.updateTv){
    await updateTv(yargsObj)
 }else if (yargsObj.deleteMovie){
   await deleteMovie({title:yargsObj.title})
}else if (yargsObj.deleteTv){
    await deleteTv({title:yargsObj.title})
}else if (yargsObj.findMovie){
    await findMovie(yargsObj)
}else if (yargsObj.findTv){
    await findTv(yargsObj)
 }else{
     console.log("incorrect command")
 }
  await mongoose.disconnect()
}

app(yargs.argv)


