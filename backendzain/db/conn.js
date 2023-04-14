import mongoose from 'mongoose'

let db = "mongodb+srv://zain:zain123@cluster0.mcv9enr.mongodb.net/?retryWrites=true&w=majority"
async function main() {
    try {
        let database = await mongoose.connect(db)
        console.log("db connection successful")
    }
    catch (err) { console.log("db connection error") }
}
main();