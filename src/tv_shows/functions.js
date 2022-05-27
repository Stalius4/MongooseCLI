const yargs = require("yargs");
const Tv = require("./model")

exports.addTv = async (movieObj) => {
    try {
        const response = await Tv.create(movieObj);
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

exports.updateTv = async ( yargsObj) => {
    try {
        const filter = { title: yargsObj.title };
        const updateYear = { year: yargsObj.year };
        const updateGenre = { genre: yargsObj.genre };
        const updateActor = { actor: yargsObj.actor };
        if(yargsObj.year){        
            const response = await Tv.findOneAndUpdate(filter, updateYear)
            console.log(response)
           
        }else if (yargsObj.genre){
            const response = await Tv.findOneAndUpdate(filter, updateGenre)
            console.log(response)
        }else if (yargsObj.actor){
            const response = await Tv.findOneAndUpdate(filter, updateActor)
            console.log(response)
        }

    } catch (error) {
        console.log(error)
    }
}

exports.deleteTv = async (movieObj) => {
    try {
        const response = await Tv.deleteOne(movieObj);
        console.log(response.deletedCount > 0);
    } catch (error) {
        console.log(error)
    }
};

exports.findTv = async (yargsObj ) =>{
try {
if(yargsObj.title){const result = await Tv.where("title").equals(yargsObj.title)
console.log(result)
}else if(yargsObj.genre){const result = await Tv.where("genre").equals(yargsObj.genre)
console.log(result)
}else if(yargsObj.actor){const result = await Tv.where("actor").equals(yargsObj.actor)
console.log(result)}
} catch (error) {
    console.log(error)
}
}