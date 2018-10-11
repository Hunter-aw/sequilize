const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://sql7260497:nIkXBNLxQm@sql7.freesqldatabase.com:3306/sql7260497')


const Movie = sequelize.define('movie', {
    movie_name: {
        type: Sequelize.STRING
    }
})
const Actor = sequelize.define('actor', {
    actor_name: {
        type: Sequelize.STRING
    }
})
const Director = sequelize.define('director', {
    director_name: {
        type: Sequelize.STRING
    }
})
const Movie_Actor = sequelize.define('Movie_Actor', {})



Movie.belongsToMany(Actor, {through: Movie_Actor})
Actor.belongsToMany(Movie, {through: Movie_Actor})
Director.hasMany(Movie)
// sequelize.drop()

// Director.sync()

// Movie.sync()
// Actor.sync()
// Movie_Actor.sync()

// Director.bulkCreate([
//     {director_name: 'Rob Minkoff'},
//     {director_name: 'Peter Jackson'}
// ])

// Movie.create({movie_name: "Lord of the Mufasas", directorId: 2}).then(movie => console.log(movie))
// Actor.create({actor_name: "Jeremy Irons"}).then(actor => console.log(actor))
Actor.findById(2).then(actor => 
    {Movie.findById(7)
        .then(movie => 
        {movie.addActor(actor)
        })
    })
// const addRelationship = async function (movie, actor1, actor2, directorId) {
//     let newMovie = await Movie.create({ movie_name: movie})
//     let director = await Director.findById(directorId)
//     console.log(newMovie)
//     newMovie.addDirector(director)
//     let newActor = await Actor.create({ actor_name: actor1})
//     let newActor2 = await Actor.create({actor_name: actor2})
//     await newMovie.addActor(newActor)
//     newMovie.addActor(newActor2)
// }
// addRelationship('Lion King', 'James Earl Jones', 'Jeremy Irons', 1)

// Actor.create({actor_name: "James Earl Jones"})
// 
// Movie1.destroy({
//     where: {}
// })

// Actor1.destroy({
//     where: {}
// })

// Director1.destroy({
//     where: {}
// })


// ====================== AFTER ADDING EVERYONE IN ============
// Movie.findAll({
//     where: {
//         directorId: 1
//     }
// }).then(movie => console.log(movie))

Actor.findAll({
    where: {
        actor_name: "Ian McKellen"
    },
    include: [Movie]
}).then(actor => console.log(actor[0].movies))

