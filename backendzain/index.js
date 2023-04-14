import express from 'express';
import cors from 'cors'
import './db/conn.js'
import User from './models/user.js'
import DE from './models/dataEntry.js';

const app = express()
app.use(cors())
app.use(express.json())


//-------- api start
//userapi start
//signup
app.post("/signup", async (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body;
    const user = new User({ username, email, password })
    let newUser = await user.save()
    res.json(newUser)
})
//signin
app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    let user = await User.findOne({ username, password })
    res.json(user)
})
//list users
app.get('/users', async (req, res) => {
    let user = await User.find()
    res.json(user)
})
// update user
app.put('/user/:_id', async (req, res) => {
    let user = await User.findByIdAndUpdate(
        req.params._id,
        { $set: { ...req.body } },
        { new: true },
    )
    res.json(user)
})
//delete
app.delete('/user/:_id', async (req, res) => {
    let user = await User.findByIdAndDelete(
        req.params._id
    )
    res.json({ "message": "user delete successfully" })
})
//userapi end

//dataEntryApi start
app.post("/api/data-entry/create", async (req, res) => {
    const de = new DE(req.body)
    let newEntry = await de.save()
    res.json(newEntry)
})
app.get("/api/data-entry", async (req, res) => {
    let data = await DE.find()
    res.json(data)
})
//read
app.get("/api/data-entry/:_id", async (req, res) => {
    try {
        console.log(req.params)
        let data = await DE.findById(req.params._id !== "undefined" && req.params._id)
        res.json(data)
    }
    catch (err) {
        console.log(err)
    }
})
// update
app.put('/api/data-entry/:_id', async (req, res) => {
    try {
        let de = await DE.findByIdAndUpdate(
            req.params._id,
            { $set: { ...req.body } },
            { new: true },
        )
        res.json(de)
    }
    catch (err) { }
})
//delete
app.delete('/api/data-entry/:_id', async (req, res) => {
    try {
        await DE.findByIdAndDelete(
            req.params._id
        )
        res.json({ "message": "Entry delete successfully" })
    }
    catch (err) { }
})
//-------- api end

let port = 9000;
app.listen(port, () => {
    console.log(`App is running on port no ${port}`);
})
