const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const id = 1;

app.post('/users/register', async (req,res) =>{
    
    try {
        const user = req.body;
        if(!user.username || user.password){
            return res.status(400).json({ error: 'All fields are required!'})
        }
        return res.status(201).json({...user, id: id + 1})
    } catch (error) {
        return res.status(400).json({ message: error })  
    }
})

module.exports = app;