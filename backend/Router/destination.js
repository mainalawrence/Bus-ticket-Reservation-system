const router=require('express').Router()
const db = require('../db')

const tableB = "buses";
const tableD = "dates";

router.get('/locations', async(req, res) => { 
    const data =await db.query('SELECT id,_location FROM locations');
    res.send(data.rows)
})
router.post("/locations", async (req, res) => {
    const { location } = req.body;
    try {
        console.log(req.body);
        
        const data = await db.query("INSERT INTO locations VALUES($1) Returning *", [location.toUpperCase().trimEnd()])
        res.json(data.rows);
    } catch (error) {
        res.json({ "error": error.code })
    }
})

router.get('/buses', async(req, res) => { 

        const data =await db.query('SELECT * FROM buses');
        res.send(data.rows)

})
router.post('/buses', async(req, res) => { 
    const { location, sits, busname } = req.body;
    console.log(req.body);
    let sitsArray = [];
    for (let i = 1; i <=Number(sits); i++){
        sitsArray.push(i.toString())
    }
   try {
    const data =await db.query(`INSERT INTO buses VALUES ($1 ,$2,$3)`,[location.toUpperCase().trimEnd(),busname,sitsArray]);
    res.send(data)
   } catch (error) {
       console.log(error);
   }

})

router.get('/dates', async(req, res) => { 
    try {
        const data =await db.query('SELECT * FROM dates');
        res.json(data.rows)
    } catch (error) {
        res.json(data.rows)
    }
})
router.post('/dates', async (req, res) => {
    const {date,Arivetime,Departtime,busname}=req.body;
    try {
        
        console.log(req.body);
        const data = await db.query("INSERT INTO dates VALUES ($1,$2,$3,$4 ) Returning *",[date, Arivetime, Departtime, busname]);
        res.json(data.rows)
    } catch (error) {
        console.log(error);
        res.json(data.rows)
    }
})

router.post('/', async (req, res) => { 
    try {
    const { location, _date } = req.body;
    //const data =await db.query(`SELECT buses.name,dates.depart,dates.arrival FROM dates JOIN buses ON dates.buse_id =buses.name where date._date=${date} AND buses.destination=${dest}`);
    const data =await db.query("SELECT buses.name,dates.depart,dates.arrival,dates._date, buses.location FROM dates JOIN buses ON dates.buse_id=buses.name WHERE buses.location=$1 AND dates._date=$2;",[location,_date])
        res.send(data.rows)
    } catch (error) {
        return res.json(error)
    }
})

router.post('/add', async(req, res) => {    
    try {
        const { firstname, lastname, email, password, PhoneNumber} = req.body;
        const respond= await db.query(`INSERT INTO ${table}(firstname,lastname,email,password,phonenumber) VALUES($1,$2,$3,$4) RETURNING *`,[firstname,lastname,email,password,PhoneNumber])
        res.status(200).json(respond.fields)
    } catch (error) {
        if (error.code === "23505")
        {
            res.json({ email: "email exists" })
            return;
        }
        res.json(error)
    }

})
module.exports = router;
