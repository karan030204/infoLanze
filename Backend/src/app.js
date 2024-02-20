import dotenv from "dotenv";
import express from "express";
import { router as userRouter } from "./routes/user.route.js";
import { router as paymentRouter } from "./routes/paymentRoutes.js";
import cors from "cors"
 
const app = express();

dotenv.config({
  path: "./Backend/env",
});

app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'payment=*');
  next();
});
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRouter);

app.use("/api",paymentRouter)

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.KEY_ID })
);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});

export default app;
