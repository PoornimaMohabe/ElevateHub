const express = require("express")
const { connection } = require("./config/db")
const cors = require("cors")
const { userRouter } = require("./routes/user.routes")
const { jobRouter } = require("./routes/job.routes")
const { mentorshipRouter } = require("./routes/mentorShip.routes")
const { mentorRouter } = require("./routes/mentor.routes")
const { mentorBookingRouter } = require("./routes/mentorBooking.router")

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).json({ message: "This is home page" })
})


app.use("/", userRouter)
app.use("/", jobRouter);
app.use("/", mentorshipRouter);
app.use("/", mentorRouter);
app.use("/", mentorBookingRouter);

const PORT = process.env.PORT || 4500

app.listen(4500, async () => {
    try {
        await connection
        console.log("Connected to Database");

        console.log(`Server is running at ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})
