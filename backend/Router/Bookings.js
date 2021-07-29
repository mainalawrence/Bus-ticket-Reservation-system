const router=require('express').Router()
const db = require('../db')

router.get('/', async(req, res) => {
    try {
        const Data = await db.query("SELECT * FROM bookings")
        res.json(Data.rows)
    } catch (error) {
        console.log(error);
    }
})
router.post('/', async (req, res) => {
    const { Location, CustomerName, CustomerPhoneNumber, DepartureTime, _Date, Buse } = req.body;
    console.log(req.body);
    try {
        //await db.query("INSERT INTO bookings VALUES($1,$2,$3,$4,$5,$6 ) ",[DepartureTime,_Date,Location,CustomerName,Buse,CustomerPhoneNumber])
        res.json("successful")
    } catch (error) {
        console.log(error);
    }
})
router.get('/:date/:location', async (req, res) => {
    const { location, date } = req.body;
    try {
const Data= await db.query("SELECT * FROM bookings WHERE Location=$1 OR Date=$2",[location,date])
        res.json(Data.rows)
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
