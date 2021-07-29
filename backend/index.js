const  express =require('express');
const cors=require('cors')
const admin =require('./Router/admin');
const dest =require('./Router/destination');
const Bookings = require('./Router/Bookings');


const App = express()

App.use(cors())

App.use(express.json());

App.use('/api/admin',admin)
App.use('/api/destination', dest)
App.use('/api/bookings',Bookings)

const PORT = process.env.PORT | 5000

App.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})