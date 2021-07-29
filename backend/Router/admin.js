const router=require('express').Router()
const db = require('../db')

const table = "admin"

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userpassword = password;
        const respond = await db.query("SELECT password FROM $2 WHERE  username=$1", [username, table])
        
        if (respond.rowCount === 0) return res.json({res:false,message:"username don't exist"});
     
        else {
            const { password } = respond.rows[0]
            if (userpassword !== password) return res.json({ res: false, message: "incorrect password" })
            else return res.json({ res:true, message: "success" });
        }
        console.log(respond);
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;