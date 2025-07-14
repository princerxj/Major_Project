const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
});

//New Route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
})

//Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
})

//Create Route
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Calanguta, Goa",
//         country : "India"
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful Testing");
// })

app.get("/", (req, res) => {
    res.send("Hello , I am root");
})

app.listen(8080, ()=> {
    console.log("Server is listening to port 8080");
})