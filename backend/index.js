const express = require("express");

rquire("dotenv").config();
const app = express();

// route imports
const adminRouter = require("./routes/adminRoutes/route.js");
const userRouter = require("./routes/userRoutes/route.js");

// Middleware for parsing request bodies
app.use(express.json());

// routers
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
