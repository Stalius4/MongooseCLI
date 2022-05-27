const yargs = require("yargs");
const Movie = require("./model")

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// exports.findMovie = async (movieObj) => {
//     try {
//         const response = await Movie.findOne(movieObj);
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

exports.updateMovie = async ( yargsObj) => {
    try {
        const filter = { title: yargsObj.title };
        const updateYear = { year: yargsObj.year };
        const updateGenre = { genre: yargsObj.genre };
        const updateActor = { actor: yargsObj.actor };
        if(yargsObj.year){        
            const response = await Movie.findOneAndUpdate(filter, updateYear)
            console.log(response)
           
        }else if (yargsObj.genre){
            const response = await Movie.findOneAndUpdate(filter, updateGenre)
            console.log(response)
        }else if (yargsObj.actor){
            const response = await Movie.findOneAndUpdate(filter, updateActor)
            console.log(response)
        }

    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        const response = await Movie.deleteOne(movieObj);
        console.log(response.deletedCount > 0);
    } catch (error) {
        console.log(error)
    }
};

exports.findMovie = async (yargsObj ) =>{
try {
if(yargsObj.title){const result = await Movie.where("title").equals(yargsObj.title)
console.log(result)
}else if(yargsObj.genre){const result = await Movie.where("genre").equals(yargsObj.genre)
console.log(result)
}else if(yargsObj.actor){const result = await Movie.where("actor").equals(yargsObj.actor)
console.log(result)}
} catch (error) {
    console.log(error)
}
}