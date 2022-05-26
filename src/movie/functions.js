const Movie = require("./model")

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

exports.findMovie = async (movieObj) => {
    try {
        const response = await Movie.findOne(movieObj);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async ( yargsObj) => {
    try {
        const filter = { title: yargsObj.title };
        const update = { year: yargsObj.year };
        const response = await Movie.findOneAndUpdate(filter, update)
        console.log(response)
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