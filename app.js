require("dotenv").config()

const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000


const product_route = require("./routes/products")
app.get("/", (req, res) => {
    res.send("Hi I am live")
})
// middleware or set to route
app.use("/api/products", product_route)

const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes i am connected`)
        })
    } catch (err) {
        console.log(err)
    }
}
start()


// password for mongodb
// dlrpZJORmvdbvvpw
// Cluster0
//  mongodb+srv://<username>:<password>@cluster0.kt86xln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0