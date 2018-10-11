// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://sql7260497:nIkXBNLxQm@sql7.freesqldatabase.com:3306/sql7260497')

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })

// const Stock = sequelize.define('stock', {
//     ticker: {
//         type: Sequelize.STRING
//     },
//     date:  {
//         type: Sequelize.DATE
//     },
//     open: {
//         type: Sequelize.FLOAT
//     },
//     close: {
//         type: Sequelize.FLOAT
//     }
// })
// Stock.sync()

// Stock.create({
//     ticker: "MSFT",
//     date: new Date(),
//     open: 120.82,
//     close: 123.51
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(),
//     open: 270.03,
//     close: 281.98
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(),
//     open: 284.14,
//     close: 290.33
// })

// Stock.findAll({
//     where: {
//         ticker: "MSFT",
//         $and: [
//             {
//                 open: {
//                     $gte: 90
//                 }
//             },
//             {
//                 close: {
//                     $lte: 120
//                 }
//             }
//         ]
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

// Stock.update(
//     { ticker: 'TSLA_C'},
//     {
//         where: {
//             ticker: 'TSLA'
//         }
//     }
// )

// Stock.destroy({
//     where: {
//         ticker: 'MSFT'
//     }
// })

// const Song = sequelize.define ("song", {
//     title: Sequelize.STRING
// })

// const Artist = sequelize.define("artist", {
//     first_name: Sequelize.STRING
// })
// Artist.hasMany(Song)

// Artist.sync({})
// Song.sync({})

// Artist.create({ first_name: "Stephan Legar" })
// Artist.create({ first_name: "Cher" })
// Artist.create({ first_name: "Eric Clapton" })
// Artist.findAll({}).then(artist => console.log(artist))
// Song.create({
//     title: "Step Fun",
//     artistId: 7
// })

// Song.create({
//     title: "Comme ci comme ca",
//     artistId: 7
// })

// Song.create({
//     title: "Believe",
//     artistId: 8
// })

// Song.create({
//     title: "Layla",
//     artistId: 9
// })

// Song.create({
//     title: "Cocaine",
//     artistId: 9
// })

// Song.findAll({}).then(song => console.log(song))
// Artist.find({
//     where: {id: 7},
//     include: [Song]
// }).then(artist => {
//     console.log(artist.songs)
// })

const Store = sequelize.define("store", {
    name: Sequelize.STRING
})
const Customer = sequelize.define("customer", {
    name: Sequelize.STRING
})

const Store_Customer = sequelize.define("Store_Customer", {})

Store.belongsToMany(Customer, { through: Store_Customer })
Customer.belongsToMany(Store, { through: Store_Customer })

// Store.sync()
// Customer.sync()
// Store_Customer.sync()

// Store.create({
//     name: "Walmart"
// }).then(s => {
//     Customer.create({
//         name: "John"
//     }).then(c => {
//         s.addCustomer(c)
//     })
// })

// const addRelationship = async function () {
//     let store = await Store.create({ name: "Target"})
//     let customer = await Customer.create({ name: "Julius"})
//     store.addCustomer(customer)
// }

// addRelationship()

Store.find({ where: {id:1}, include: [Customer] })
.then( s=> {
    console.log(s)
})